import { defineComponent, unref, useSSRContext } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/server-renderer/index.mjs';
import { t as tpl } from './str-5a6680f8.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/mustache/mustache.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(tpl)("Home Page"))}</h1>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bf15fc6a.mjs.map
