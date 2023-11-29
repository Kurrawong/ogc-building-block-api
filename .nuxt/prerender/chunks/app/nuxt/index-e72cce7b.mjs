import { c as config, _ as __nuxt_component_0 } from './config-a8038391.mjs';
import { _ as _sfc_main$1 } from './Form-bda09d41.mjs';
import { e as useRoute } from '../server.mjs';
import { ref, unref, useSSRContext } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/server-renderer/index.mjs';
import { t as tpl } from './str-5a6680f8.mjs';
import './nuxt-link-52e762fb.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/ufo/dist/index.mjs';
import './rdf-bf33a04b.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/n3/lib/index.js';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/axios/index.js';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/hookable/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unctx/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/unhead/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/h3/dist/index.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = ref(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBreadcrumbs = __nuxt_component_0;
      const _component_ContainersForm = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonBreadcrumbs, {
        items: [
          { title: unref(tpl)("{{!bc}}Home"), to: "/" },
          { title: unref(tpl)("{{!bc}}Catalogs"), to: "/catalogs" },
          { title: `${id.value}`, to: `/catalogs/${id.value}`, disabled: true }
        ]
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContainersForm, {
        "header-title": unref(tpl)("{{ header.label }} resource"),
        "form-title": "{{ fields.dcterms:title }}",
        "data-url": unref(config).API_BASE_URL + unref(route).path
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalogs/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e72cce7b.mjs.map
