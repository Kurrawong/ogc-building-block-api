import { c as config, _ as __nuxt_component_0 } from "./config-a8038391.js";
import { _ as _sfc_main$1 } from "./List-4d6990f3.js";
import { e as useRoute } from "../server.mjs";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { t as tpl } from "./str-5a6680f8.js";
import "./rdf-bf33a04b.js";
import "n3";
import "axios";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
import "mustache";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBreadcrumbs = __nuxt_component_0;
      const _component_ContainersList = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonBreadcrumbs, {
        items: [{ title: unref(tpl)("{{!bc}}Home"), to: "/" }, { title: unref(tpl)("{{!bc}}Catalogs"), to: "/catalogs", disabled: true }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContainersList, {
        "header-title": unref(tpl)("{{ header.label }} collection"),
        "data-url": unref(config).API_BASE_URL + unref(route).path,
        fields: ["dcterms:title", "dcterms:identifier", "iri"]
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-3efb165b.js.map
