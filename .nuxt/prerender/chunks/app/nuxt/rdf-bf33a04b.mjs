import { f as defineStore } from '../server.mjs';
import { DataFactory, Store, Parser, BlankNode } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/n3/lib/index.js';
import axios from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/axios/index.js';
import { p as parseLinkHeader, g as getDefaultLabelFromURIOrString } from './str-5a6680f8.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const { namedNode } = DataFactory;
const filterRDFType = namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type");
const filterRDFSLabel = namedNode("http://www.w3.org/2000/01/rdf-schema#label");
class Prez {
  constructor() {
    __publicField(this, "store");
    __publicField(this, "data");
    __publicField(this, "parser");
    __publicField(this, "prefixes");
    __publicField(this, "headerLinks");
    this.store = new Store();
    this.parser = new Parser();
    this.data = [];
    this.prefixes = {};
    this.headerLinks = [];
  }
  async fetch(url, options) {
    try {
      const response = await axios(url, options);
      if (response.status != 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      this.headerLinks = parseLinkHeader(response.headers["link"]);
      await this.load(await response.data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`);
      } else {
        throw new Error(`An unknown error occurred.`);
      }
    }
  }
  async load(rdf) {
    await this.parser.parse(rdf, (error, quad, prefixes) => {
      if (prefixes) {
        this.prefixes = prefixes;
      }
      if (quad) {
        this.data.push(quad);
      }
    });
    this.store = new Store(this.data);
  }
  expandAll(iri) {
    return iri.map((item) => this.expand(item));
  }
  expand(iri) {
    const parts = iri.split(":");
    if (parts.length >= 2 && parts[0] in this.prefixes) {
      parts[0] = this.prefixes[parts[0]].toString();
      return parts[0] + parts.slice(1).join(":");
    }
    return iri;
  }
  firstQuad(subject, predicate, object, graph) {
    const quads = this.store.getQuads(subject, predicate, object, graph);
    if (quads && quads.length > 0) {
      return quads[0];
    } else {
      return null;
    }
  }
  list(labelPredicates = [], descriptionPredicates = []) {
    let mainSubject = "";
    let subjects = [];
    let count = 0;
    const countQuad = this.firstQuad(null, this.expand("prez:count"), null, null);
    if (countQuad !== null) {
      count = parseInt(countQuad.object.value);
      mainSubject = countQuad.subject.value;
      const predicateFilter = filterRDFType;
      subjects = this.store.getSubjects(predicateFilter, mainSubject, null);
    } else {
      throw new Error("prez:count predicate not found");
    }
    const mainHeaderMatches = this.store.getQuads(mainSubject, filterRDFSLabel, null, null);
    const mainShortName = this.compact(mainSubject);
    const result = {
      listHeaders: {},
      header: {
        label: mainHeaderMatches.length > 0 ? mainHeaderMatches[0].object.value : mainShortName,
        iri: mainSubject,
        link: mainSubject
      },
      count,
      list: [],
      iri: mainShortName
    };
    const expandedPredicateLabels = this.expandAll(labelPredicates);
    const expandedPredicateDescriptions = this.expandAll(descriptionPredicates);
    for (const si in subjects) {
      const subject = subjects[si].value;
      const item = this.getSubjectData(subject, expandedPredicateLabels, expandedPredicateDescriptions);
      Object.keys(item).filter((field) => field != "_meta").forEach((field) => {
        if (!(field in result.listHeaders)) {
          result.listHeaders[field] = this.getHeader(this.expand(field), item[field]);
        }
      });
      result.list.push(item);
    }
    return result;
  }
  form(labelPredicates = [], descriptionPredicates = [], subform) {
    console.log("FORM");
    let count = 0;
    let mainSubject = subform ? subform : "";
    let mainObject = "";
    if (mainSubject == "") {
      const typeQuad = this.firstQuad(null, filterRDFType, null, null);
      if (typeQuad !== null) {
        mainSubject = typeQuad.subject.value;
        mainObject = typeQuad.object.value;
      } else {
        throw new Error("rdf:type predicate not found");
      }
    }
    const result = {
      formHeaders: {},
      header: {
        label: this.compact(mainObject),
        //mainHeaderMatches.length > 0 ? mainHeaderMatches[0].object.value : mainShortName,
        iri: mainSubject,
        link: mainSubject
      },
      count,
      fields: {},
      iri: this.compact(mainSubject)
    };
    const expandedPredicateLabels = this.expandAll(labelPredicates);
    const expandedPredicateDescriptions = this.expandAll(descriptionPredicates);
    const item = this.getSubjectData(mainSubject, expandedPredicateLabels, expandedPredicateDescriptions);
    Object.keys(item).filter((field) => field != "_meta").forEach((field) => {
      if (!(field in result.formHeaders)) {
        if (mainSubject[0] != "_" || field != "iri") {
          result.formHeaders[field] = this.getHeader(this.expand(field), item[field]);
        }
      }
    });
    result.count = Object.keys(result.formHeaders).length;
    result.fields = item;
    return result;
  }
  getSubjectData(subject, expandedPredicateLabels, expandedPredicateDescriptions) {
    const item = {
      iri: subject,
      _meta: {}
    };
    const matches = this.store.getQuads(subject, null, null, null);
    for (const mi in matches) {
      const match = matches[mi];
      const shortName = this.compact(match.predicate.value);
      const meta = this.getMeta(match, expandedPredicateLabels, expandedPredicateDescriptions);
      console.log(mi, " = " + match.object.value);
      console.log("XX");
      if (match.object instanceof BlankNode) {
        if (!(shortName in item)) {
          item[shortName] = [];
        }
        item[shortName].push(this.form(expandedPredicateLabels, expandedPredicateDescriptions, "_:" + match.object.value));
      } else {
        const valueQuads = this.store.getQuads(subject, match.predicate.value, null, null);
        let value = void 0;
        valueQuads.map((valueQuad) => {
          const { label, description } = this.getAnnotations(valueQuad.object.value, expandedPredicateLabels, expandedPredicateDescriptions);
          const useValue = label !== void 0 ? label : valueQuad.object.value;
          if (value !== void 0) {
            if (!Array.isArray(value)) {
              value = [value];
            }
            value.push(useValue);
          } else {
            value = useValue;
          }
        });
        meta.value = value === void 0 ? match.predicate.value : value;
        item[shortName] = meta.value;
      }
      item._meta[shortName] = meta;
    }
    return item;
  }
  getMeta(quad, predicateLabels, predicateDescriptions) {
    const { label, description } = this.getAnnotations(quad.predicate.value, predicateLabels, predicateDescriptions);
    let type = void 0;
    let typeIRI = void 0;
    if (quad.object.datatype) {
      console.log("DATA TYPE = ", quad.object);
      typeIRI = quad.object.datatype.value;
      const typeQuad = this.firstQuad(typeIRI, filterRDFSLabel, null, null);
      type = getDefaultLabelFromURIOrString(
        typeQuad !== null && typeQuad.object.value ? typeQuad.object.value.toString() : typeIRI
      );
    }
    const meta = {
      iri: quad.predicate.value,
      label,
      description,
      typeIRI,
      type
    };
    return meta;
  }
  getHeader(subject, itemField) {
    const headerQuad = this.firstQuad(subject, filterRDFSLabel, null, null);
    const head = {
      iri: subject,
      link: filterRDFSLabel.value,
      label: getDefaultLabelFromURIOrString(
        headerQuad !== null && headerQuad.object.value ? headerQuad.object.value : subject
      ),
      description: ""
    };
    console.log("HEAD=", head, "ITEM=", itemField);
    return head;
  }
  getAnnotations(subject, predicateLabels, predicateDescriptions) {
    let label = void 0;
    let description = void 0;
    predicateLabels.map((predicate) => {
      if (label === void 0) {
        const quad = this.firstQuad(subject, predicate, null, null);
        if (quad) {
          label = quad.object.value;
        }
      }
    });
    predicateDescriptions.map((predicate) => {
      if (description === void 0) {
        const quad = this.firstQuad(subject, predicate, null, null);
        if (quad) {
          description = quad.object.value;
        }
      }
    });
    return {
      label,
      description
    };
  }
  compact(iri) {
    for (const prefix in this.prefixes) {
      if (iri.startsWith(this.prefixes[prefix].toString())) {
        return `${prefix}:${iri.substring(this.prefixes[prefix].toString().length)}`;
      }
    }
    if (iri == filterRDFType.value) {
      return "rdf:type";
    }
    return iri;
  }
}
const useRDFStore = defineStore("rdf", {
  // other options...
  state: () => ({
    cache: {},
    loading: false,
    error: "",
    success: false,
    prez: null
  }),
  actions: {
    clearCache() {
      this.cache = {};
    },
    async load(apiUrl, apiConfig) {
      try {
        this.loading = true;
        this.success = false;
        const hash = apiUrl + JSON.stringify(apiConfig);
        if (hash in this.cache) {
          this.prez = this.cache[hash];
        } else {
          this.prez = new Prez();
          await this.prez.fetch(apiUrl, apiConfig);
          this.cache[hash] = this.prez;
        }
        this.success = true;
        this.error = null;
      } catch (error) {
        this.error = error.message;
        this.success = false;
      } finally {
        this.loading = false;
      }
    }
  }
});

export { useRDFStore as u };
//# sourceMappingURL=rdf-bf33a04b.mjs.map
