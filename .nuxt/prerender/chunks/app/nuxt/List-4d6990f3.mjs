import { s as storeToRefs, e as useRoute, a as useRouter$1, _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, unref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'file:///Users/hjohns/workspace/kurrawong/ogc-building-block-api/node_modules/vue/server-renderer/index.mjs';
import { a as template } from './str-5a6680f8.mjs';
import { a as _sfc_main$2 } from './config-a8038391.mjs';
import { u as useRDFStore } from './rdf-bf33a04b.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    list: {},
    headerTitle: {},
    excludeFields: {},
    fields: {},
    info: { type: Boolean },
    links: {}
  },
  setup(__props) {
    const props = __props;
    const fields = props.fields ? props.fields : Object.keys(props.list.listHeaders);
    props.excludeFields ? props.excludeFields : [/^prez:./];
    useRouter$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_chip_group = resolveComponent("v-chip-group");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "position": "relative" } }, _attrs))} data-v-f59d8ffd>`);
      if (_ctx.headerTitle && _ctx.list) {
        _push(`<div class="text-h3 mb-5 mt-2" data-v-f59d8ffd>${ssrInterpolate(unref(template)(_ctx.headerTitle, _ctx.list))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_chip, {
        variant: "flat",
        style: { "position": "absolute", "right": "0", "top": "0" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.list.header.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.list.header.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.list) {
        _push(ssrRenderComponent(_component_v_table, { theme: "dark" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<thead data-v-f59d8ffd${_scopeId}><tr data-v-f59d8ffd${_scopeId}><!--[-->`);
              ssrRenderList(unref(fields), (field) => {
                _push2(`<th style="${ssrRenderStyle({ "white-space": "nowrap" })}" data-v-f59d8ffd${_scopeId}>${ssrInterpolate(field in _ctx.list.listHeaders ? _ctx.list.listHeaders[field].label : `${field} missing`)} \xA0`);
                if (field in _ctx.list.listHeaders) {
                  _push2(`<a${ssrRenderAttr("href", _ctx.list.listHeaders[field].iri)}${ssrRenderAttr("title", field)} data-v-f59d8ffd${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_v_icon, { icon: "mdi-link" }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.info) {
                  _push2(`<div data-v-f59d8ffd${_scopeId}>${ssrInterpolate(field)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</th>`);
              });
              _push2(`<!--]--></tr></thead><tbody data-v-f59d8ffd${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.list.list, (item) => {
                _push2(`<tr data-v-f59d8ffd${_scopeId}><!--[-->`);
                ssrRenderList(unref(fields), (field) => {
                  _push2(`<td data-v-f59d8ffd${_scopeId}><div${ssrRenderAttr("title", field in item ? item[field] : null)} class="td-max" data-v-f59d8ffd${_scopeId}>${ssrInterpolate(field in item ? item[field] : `"${field}" not found`)}</div></td>`);
                });
                _push2(`<!--]--></tr>`);
              });
              _push2(`<!--]--></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                      return openBlock(), createBlock("th", { style: { "white-space": "nowrap" } }, [
                        createTextVNode(toDisplayString(field in _ctx.list.listHeaders ? _ctx.list.listHeaders[field].label : `${field} missing`) + " \xA0", 1),
                        field in _ctx.list.listHeaders ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: _ctx.list.listHeaders[field].iri,
                          title: field
                        }, [
                          createVNode(_component_v_icon, { icon: "mdi-link" })
                        ], 8, ["href", "title"])) : createCommentVNode("", true),
                        _ctx.info ? (openBlock(), createBlock("div", { key: 1 }, toDisplayString(field), 1)) : createCommentVNode("", true)
                      ]);
                    }), 256))
                  ])
                ]),
                createVNode("tbody", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.list.list, (item) => {
                    return openBlock(), createBlock("tr", {
                      onClick: ($event) => _ctx.$router.push(item["prez:link"])
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                        return openBlock(), createBlock("td", null, [
                          createVNode("div", {
                            title: field in item ? item[field] : null,
                            class: "td-max"
                          }, toDisplayString(field in item ? item[field] : `"${field}" not found`), 9, ["title"])
                        ]);
                      }), 256))
                    ], 8, ["onClick"]);
                  }), 256))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.links) {
        _push(ssrRenderComponent(_component_v_chip_group, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.links.filter((link) => link.title), (link) => {
                _push2(ssrRenderComponent(_component_v_chip, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(link.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(link.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links.filter((link) => link.title), (link) => {
                  return openBlock(), createBlock(_component_v_chip, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(link.title), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/List.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f59d8ffd"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    dataUrl: {},
    headerTitle: {},
    excludeFields: {},
    fields: {},
    info: { type: Boolean }
  },
  setup(__props) {
    const rdfStore = useRDFStore();
    const { loading, success, error, prez } = storeToRefs(rdfStore);
    const parseError = ref(null);
    ref(1);
    const list = ref(void 0);
    const route = useRoute();
    const query = ref(route.query);
    watch(() => query.value = route.query, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonList = __nuxt_component_0;
      const _component_CommonLoading = _sfc_main$2;
      _push(`<!--[-->`);
      if (unref(list)) {
        _push(ssrRenderComponent(_component_CommonList, {
          "header-title": _ctx.headerTitle,
          list: unref(list),
          fields: _ctx.fields,
          "exclude-fields": _ctx.excludeFields,
          info: _ctx.info,
          links: unref(prez).headerLinks
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CommonLoading, {
        loading: unref(loading),
        error: unref(error)
      }, null, _parent));
      _push(ssrRenderComponent(_component_CommonLoading, {
        loading: false,
        error: unref(parseError)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/containers/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=List-4d6990f3.mjs.map
