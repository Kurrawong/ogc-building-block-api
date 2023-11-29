import { defineComponent, ref, unref, useSSRContext } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/index.mjs';
import { ssrInterpolate } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/server-renderer/index.mjs';
import { f as defineStore, s as storeToRefs } from '../server.mjs';
import { DataFactory, Store, Parser } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/n3/lib/index.js';
import axios from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/axios/index.js';
import { p as parseLinkHeader, g as getDefaultLabelFromURIOrString } from './str-5a6680f8.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/hookable/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unctx/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unhead/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/h3/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/ufo/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/destr/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/scule/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/klona/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/ohash/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/pathe/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/mustache/mustache.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const PrezDataFactory = {
  prezNamedNode(iri, label, description, uri, curie) {
    return {
      termType: "NamedNode",
      uri: uri || iri,
      label,
      description,
      curie
    };
  },
  prezLiteral(text) {
    return {
      termType: "Literal",
      text
    };
  },
  prezBlankNode(form) {
    return {
      termType: "BlankNode",
      form
    };
  }
  // Add more factory functions for other types as needed
};
const { namedNode } = DataFactory;
const { prezNamedNode, prezBlankNode, prezLiteral } = PrezDataFactory;
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
  getAnnotation(subject, predicates) {
    console.log("LOOKING UP ", subject, predicates);
    let label = void 0;
    predicates.map((predicate) => {
      if (label === void 0) {
        const quad = this.firstQuad(subject, predicate, null, null);
        if (quad) {
          label = prezLiteral(quad.object.value);
        }
      }
    });
    return label;
  }
  getAnnotated(subject, predicateLabels, predicateDescriptions = []) {
    return prezNamedNode(
      subject,
      this.getAnnotation(subject, predicateLabels),
      this.getAnnotation(subject, predicateDescriptions),
      subject,
      this.compact(subject)
    );
  }
  expandConfig(config) {
    return {
      classPredicates: this.expandAll(config.classPredicates),
      labelPredicates: this.expandAll(config.labelPredicates),
      descriptionPredicates: this.expandAll(config.descriptionPredicates)
    };
  }
  form(formConfig, focusNode = "") {
    let focusSubject = focusNode;
    let focusObject = "";
    if (focusNode == "") {
      const typeQuad = this.firstQuad(null, filterRDFType, null, null);
      if (typeQuad !== null) {
        focusSubject = typeQuad.subject.value;
        focusObject = typeQuad.object.value;
      } else {
        throw new Error("rdf:type predicate not found");
      }
    }
    const config = this.expandConfig(formConfig);
    const form = {
      config,
      class: this.getAnnotated(focusObject, config.labelPredicates),
      properties: {},
      title: this.getAnnotated(focusSubject, config.labelPredicates, config.descriptionPredicates)
    };
    return form;
  }
  //   getSubjectData(subject: string, expandedPredicateLabels:string[], expandedPredicateDescriptions:string[]) {
  //     const item:ListItem = {
  //       iri: subject,
  //       _meta: {
  //       }
  //     };
  //     const matches = this.store.getQuads(subject, null, null, null);
  //     for(const mi in matches) {
  //       const match = matches[mi];
  //       const shortName:string = this.compact(match.predicate.value);
  //       const meta:any = this.getMeta(match, expandedPredicateLabels, expandedPredicateDescriptions);
  //       console.log(mi, ' = ' + match.object.value);
  // //      if(mi == '1') {
  //         console.log("XX")
  //   //    }
  //       // recrusive form
  //       if(match.object instanceof BlankNode) {
  //         // initialise the item, ready for many sub items
  //         if(!(shortName in item)) {
  //           item[shortName] = [];
  //         }
  //         // recursive lookup...
  //         item[shortName].push(this.form(expandedPredicateLabels, expandedPredicateDescriptions, '_:' + match.object.value));
  //       } else {
  //         const valueQuads = this.store.getQuads(subject, match.predicate.value, null, null);
  //         let value:string|string[]|undefined = undefined;//match.predicate.value;
  //         valueQuads.map(valueQuad=>{
  //           const { label, description } = this.getAnnotations(valueQuad.object.value, expandedPredicateLabels, expandedPredicateDescriptions);
  //           const useValue = (label !== undefined ? label : valueQuad.object.value);
  //           if(value !== undefined) {
  //             if(!Array.isArray(value)) {
  //               value = [value];
  //             }
  //             value.push(useValue);
  //           } else {
  //             value = useValue;
  //           }          
  //         })
  //         meta.value = (value === undefined ? match.predicate.value : value);
  //         item[shortName] = meta.value;
  //       }
  //       item._meta![shortName] = meta;
  //     }
  //     return item;
  //   }
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
  // getHeader(subject:string, itemField:any):Header {
  //   const headerQuad = this.firstQuad(subject, filterRDFSLabel, null, null);
  //   const head:Header = {
  //     iri: subject,
  //     link: filterRDFSLabel.value,
  //     label: getDefaultLabelFromURIOrString(
  //       headerQuad !== null && headerQuad.object.value 
  //         ? headerQuad.object.value 
  //         : subject),
  //     description: ''
  //   }
  //   console.log('HEAD=', head, 'ITEM=', itemField)
  //   return head;
  // }
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const rdfStore = useRDFStore();
    storeToRefs(rdfStore);
    ref(1);
    const form = ref(void 0);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--> OUTPUT: <pre>${ssrInterpolate(unref(form))}</pre><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-a0e6f645.mjs.map
