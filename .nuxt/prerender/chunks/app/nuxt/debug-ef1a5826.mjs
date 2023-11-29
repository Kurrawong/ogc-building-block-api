import { ref, unref, useSSRContext } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/index.mjs';
import { ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/server-renderer/index.mjs';
import { u as useRDFStore } from './rdf-bf33a04b.mjs';
import { s as storeToRefs } from '../server.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/n3/lib/index.js';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/axios/index.js';
import './str-5a6680f8.mjs';
import 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/mustache/mustache.mjs';
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

const _sfc_main = {
  __name: "debug",
  __ssrInlineRender: true,
  setup(__props) {
    const rdfStore = useRDFStore();
    const { loading, success, error, prefixes, prez } = storeToRefs(rdfStore);
    const matchall = ref([]);
    const subject = ref("");
    const predicate = ref("");
    const object = ref("");
    const url = ref("https://api.gswa.dev.kurrawong.ai/v/vocab/df:vertical-depth-reference-systems");
    const countRef = ref(0);
    const dataRef = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div>COUNT = ${ssrInterpolate(unref(countRef))}</div><div>DATA = ${ssrInterpolate(unref(dataRef))}</div><div><h1>Vocab listing</h1><form method="post"><div><input placeholder="url" name="url"${ssrRenderAttr("value", unref(url))} style="${ssrRenderStyle({ "width": "500px" })}"><button type="button">Reload</button></div><div><input placeholder="subject" name="subject"${ssrRenderAttr("value", unref(subject))}><input placeholder="predicate" name="predict"${ssrRenderAttr("value", unref(predicate))}><input placeholder="object" name="object"${ssrRenderAttr("value", unref(object))}></div><div><button type="submit">Refresh</button></div></form> ${ssrInterpolate(unref(subject))} - ${ssrInterpolate(unref(predicate))} - ${ssrInterpolate(unref(object))} <div><div>Loading = ${ssrInterpolate(unref(loading))}</div><div>Error = ${ssrInterpolate(unref(error))}</div><div>Success = ${ssrInterpolate(unref(success))}</div></div><h2>Prefixes</h2> ${ssrInterpolate(unref(prefixes))} <h2>Match All</h2><table><thead><tr><th>subject</th><th>predicate</th><th>object</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(matchall), (m, idx) => {
        _push(`<tr><td>${ssrInterpolate(idx)}# ${ssrInterpolate(m.subject.value)}</td><td>${ssrInterpolate(m.predicate.value)}</td><td>${ssrInterpolate(m.object.value)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/debug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=debug-ef1a5826.mjs.map
