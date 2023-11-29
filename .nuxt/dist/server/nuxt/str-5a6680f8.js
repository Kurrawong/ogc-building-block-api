import mustache from "mustache";
const constants = [
  "{{!bc}}Home",
  "{{!bc}}Catalogs",
  "{{!bc}}Collections",
  "{{!bc}}Items",
  "Home Page",
  "View Members",
  "{{ header.label }} collection",
  "{{ header.label }} resource"
];
const overrides = {
  "{{!bc}}Home": "Home"
};
function getDefaultLabelFromURIOrString(uriOrStr) {
  return uriOrStr;
}
function parseLinkHeader(headerString) {
  const headersArray = [];
  if (typeof headerString != "string") {
    return [];
  }
  headerString.split(",").forEach((header) => {
    const [uri, ...components] = header.split(";").map((item) => item.trim());
    const headerObject = { iri: uri.replace(/[<>]/g, "") };
    components.forEach((component) => {
      const [key, value] = component.split("=");
      const trimmedKey = key.trim();
      const trimmedValue = value.replace(/["<>]/g, "").trim();
      headerObject[trimmedKey] = trimmedValue;
    });
    headersArray.push(headerObject);
  });
  return headersArray;
}
const template = (templateString, obj) => {
  const replacedTemplate = templateString.replace(/{{(.*?)}}/g, (match, p1) => {
    const replaced = p1.replace(/:/g, "__");
    return `{{${replaced}}}`;
  });
  return mustache.render(replacedTemplate, transformKeysForMustache(obj));
};
const transformKeysForMustache = (obj) => {
  const transformedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== null && typeof value === "object") {
        transformedObj[key.replace(/:/g, "__")] = transformKeysForMustache(value);
      } else {
        transformedObj[key.replace(/:/g, "__")] = value;
      }
    }
  }
  transformedObj._debug = Object.keys(transformedObj).map((key) => key.replace("__", ":"));
  return transformedObj;
};
function tpl(key, data) {
  const str = constants.includes(key) ? key in overrides ? overrides[key] : key : `"${key}" not found`;
  return data !== void 0 ? template(str, data) : str.replace(/{{\!.+}}/g, "");
}
export {
  template as a,
  getDefaultLabelFromURIOrString as g,
  parseLinkHeader as p,
  tpl as t
};
//# sourceMappingURL=str-5a6680f8.js.map
