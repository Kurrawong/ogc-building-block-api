import { ref, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { u as useRDFStore } from "./rdf-bf33a04b.js";
import { s as storeToRefs } from "../server.mjs";
import "n3";
import "axios";
import "./str-5a6680f8.js";
import "mustache";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=debug-ef1a5826.js.map
