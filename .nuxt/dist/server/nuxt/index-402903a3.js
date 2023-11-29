import { c as config, _ as __nuxt_component_0 } from "./config-a8038391.js";
import { _ as _sfc_main$1 } from "./Form-bda09d41.js";
import { e as useRoute } from "../server.mjs";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { t as tpl } from "./str-5a6680f8.js";
import "./nuxt-link-52e762fb.js";
import "ufo";
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
import "destr";
import "defu";
import "klona";
import "@vue/devtools-api";
import "devalue";
import "mustache";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = ref(route.params.id);
    const collectionId = ref(route.params.collectionId);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBreadcrumbs = __nuxt_component_0;
      const _component_ContainersForm = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonBreadcrumbs, {
        items: [
          { title: unref(tpl)("{{!bc}}Home"), to: "/" },
          { title: unref(tpl)("{{!bc}}Catalogs"), to: "/catalogs" },
          { title: `${id.value}`, to: `/catalogs/${id.value}` },
          { title: unref(tpl)("{{!bc}}Collections"), to: `/catalogs/${id.value}/collections` },
          { title: `${collectionId.value}`, to: unref(route).path, disabled: true }
        ]
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContainersForm, {
        "header-title": unref(tpl)("{{ header.label }} resource"),
        "form-title": "{{ fields.skos:prefLabel }}",
        "data-url": unref(config).API_BASE_URL + unref(route).path
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalogs/[id]/collections/[collectionId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-402903a3.js.map
