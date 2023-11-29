import { defineComponent, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_breadcrumbs = resolveComponent("v-breadcrumbs");
      _push(ssrRenderComponent(_component_v_breadcrumbs, mergeProps({ items: _ctx.items }, _attrs), null, _parent));
    };
  }
});
const Breadcrumbs_vue_vue_type_style_index_0_scoped_4736a2b8_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Breadcrumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4736a2b8"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Loading",
  __ssrInlineRender: true,
  props: {
    loading: { type: Boolean },
    error: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_v_alert = resolveComponent("v-alert");
      _push(`<!--[-->`);
      if (_ctx.loading) {
        _push(ssrRenderComponent(_component_v_progress_circular, {
          size: 50,
          color: "primary",
          indeterminate: ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.error) {
        _push(ssrRenderComponent(_component_v_alert, {
          text: _ctx.error
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const API_BASE_URL = "https://ogcprez.sgraljii8d3km.ap-southeast-2.cs.amazonlightsail.com";
const CATALOG_LIST_URL = "catalogs";
const config = {
  API_BASE_URL,
  CATALOG_LIST_URL
};
export {
  __nuxt_component_0 as _,
  _sfc_main as a,
  config as c
};
//# sourceMappingURL=config-a8038391.js.map
