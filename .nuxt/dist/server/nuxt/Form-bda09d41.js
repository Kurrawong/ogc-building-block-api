import { _ as __nuxt_component_0$1 } from "./nuxt-link-52e762fb.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, createVNode, resolveDynamicComponent, unref, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, watch } from "vue";
import { ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, a as useRouter, s as storeToRefs, e as useRoute } from "../server.mjs";
import { a as template } from "./str-5a6680f8.js";
import { a as _sfc_main$4 } from "./config-a8038391.js";
import { u as useRDFStore } from "./rdf-bf33a04b.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "prez:members",
  __ssrInlineRender: true,
  props: {
    info: {},
    form: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_btn, mergeProps({
        to: _ctx.info[0].fields["prez:link"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Members`);
          } else {
            return [
              createTextVNode("View Members")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const prez_members_vue_vue_type_style_index_0_scoped_c0694020_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/widgets/prez:members.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PrezMembers = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c0694020"]]);
const registry = {
  "prez:members": PrezMembers
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    fieldName: {},
    form: {},
    info: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(registry)[_ctx.fieldName]), mergeProps({
        info: _ctx.info,
        form: _ctx.form
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/widgets/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    form: {},
    formTitle: {},
    headerTitle: {},
    excludeFields: {},
    fields: {},
    info: { type: Boolean },
    links: {}
  },
  setup(__props) {
    const props = __props;
    const excludeFields = props.excludeFields ? props.excludeFields : [/^prez:./];
    const fields = (props.fields ? props.fields : Object.keys(props.form.formHeaders)).filter((field) => {
      if (!(field in props.form.formHeaders) || !(field in props.form.fields)) {
        console.warn(`${field} not found in form
(${Object.keys(props.form.formHeaders)})`);
        return false;
      }
      if (field in registry) {
        if (excludeFields.indexOf(field) >= 0) {
          return false;
        } else {
          return true;
        }
      } else {
        for (const idx in excludeFields) {
          if (field.match(excludeFields[idx])) {
            return false;
          }
        }
        return true;
      }
    });
    const isSubForm = (field) => {
      return Array.isArray(props.form.fields[field]) && typeof props.form.fields[field][0] == "object";
    };
    const isStringArray = (field) => {
      return Array.isArray(props.form.fields[field]) && typeof props.form.fields[field][0] == "string";
    };
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_CommonForm = __nuxt_component_0;
      const _component_CommonWidgets = _sfc_main$2;
      const _component_v_chip_group = resolveComponent("v-chip-group");
      if (_ctx.form && _ctx.form.count > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "form",
          style: { "position": "relative" }
        }, _attrs))} data-v-6ce81e14>`);
        if (_ctx.headerTitle && _ctx.form) {
          _push(`<div class="text-h3 mb-5 mt-2" data-v-6ce81e14>${ssrInterpolate(unref(template)(_ctx.headerTitle, _ctx.form))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.form.header.label) {
          _push(ssrRenderComponent(_component_v_chip, {
            variant: "flat",
            style: { "position": "absolute", "right": "0", "top": "0" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.form.header.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.form.header.label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.form) {
          _push(ssrRenderComponent(_component_v_table, { theme: "dark" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (_ctx.formTitle) {
                  _push2(`<thead data-v-6ce81e14${_scopeId}><tr data-v-6ce81e14${_scopeId}><th colspan="2" data-v-6ce81e14${_scopeId}>${ssrInterpolate(unref(template)(_ctx.formTitle, _ctx.form))}</th></tr></thead>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<tbody data-v-6ce81e14${_scopeId}><!--[-->`);
                ssrRenderList(unref(fields), (field) => {
                  var _a, _b;
                  _push2(`<tr data-v-6ce81e14${_scopeId}><th style="${ssrRenderStyle({ "white-space": "nowrap" })}" data-v-6ce81e14${_scopeId}>${ssrInterpolate(_ctx.form.formHeaders[field].label)}  <a${ssrRenderAttr("href", _ctx.form.formHeaders[field].iri)}${ssrRenderAttr("title", field)} data-v-6ce81e14${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_v_icon, { icon: "mdi-link" }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                  if (_ctx.info) {
                    _push2(`<div data-v-6ce81e14${_scopeId}>${ssrInterpolate(field)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</th>`);
                  if (!(field in unref(registry))) {
                    _push2(`<td class="${ssrRenderClass(isSubForm(field) ? "td-nest" : void 0)}" data-v-6ce81e14${_scopeId}>`);
                    if ((_b = (_a = _ctx.form.fields._meta) == null ? void 0 : _a[field]) == null ? void 0 : _b.type) {
                      _push2(ssrRenderComponent(_component_v_chip, { size: "x-small" }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`${ssrInterpolate(_ctx.form.fields._meta[field].type)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.form.fields._meta[field].type), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<div${ssrRenderAttr("title", field in _ctx.form.fields._meta && _ctx.form.fields[field] != _ctx.form.fields._meta[field].value ? _ctx.form.fields._meta[field].value : null)} data-v-6ce81e14${_scopeId}>`);
                    if (field == "prez:link") {
                      _push2(ssrRenderComponent(_component_nuxt_link, {
                        to: _ctx.form.fields[field]
                      }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`${ssrInterpolate(_ctx.form.fields[field])}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.form.fields[field]), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(` ${ssrInterpolate(typeof _ctx.form.fields[field] != "object" && field != "prez:link" ? _ctx.form.fields[field] : "")} ${ssrInterpolate(isStringArray(field) ? _ctx.form.fields[field].join(", ") : "")} `);
                    if (isSubForm(field)) {
                      _push2(`<!--[-->`);
                      ssrRenderList(_ctx.form.fields[field], (f) => {
                        _push2(ssrRenderComponent(_component_CommonForm, {
                          form: f,
                          "exclude-fields": unref(excludeFields)
                        }, null, _parent2, _scopeId));
                      });
                      _push2(`<!--]-->`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div></td>`);
                  } else {
                    _push2(`<td data-v-6ce81e14${_scopeId}>`);
                    if (field in unref(registry)) {
                      _push2(ssrRenderComponent(_component_CommonWidgets, {
                        form: _ctx.form,
                        info: _ctx.form.fields[field],
                        "field-name": field
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</td>`);
                  }
                  _push2(`</tr>`);
                });
                _push2(`<!--]--></tbody>`);
              } else {
                return [
                  _ctx.formTitle ? (openBlock(), createBlock("thead", { key: 0 }, [
                    createVNode("tr", null, [
                      createVNode("th", { colspan: "2" }, toDisplayString(unref(template)(_ctx.formTitle, _ctx.form)), 1)
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(fields), (field) => {
                      var _a, _b;
                      return openBlock(), createBlock("tr", null, [
                        createVNode("th", { style: { "white-space": "nowrap" } }, [
                          createTextVNode(toDisplayString(_ctx.form.formHeaders[field].label) + "  ", 1),
                          createVNode("a", {
                            href: _ctx.form.formHeaders[field].iri,
                            title: field
                          }, [
                            createVNode(_component_v_icon, { icon: "mdi-link" })
                          ], 8, ["href", "title"]),
                          _ctx.info ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(field), 1)) : createCommentVNode("", true)
                        ]),
                        !(field in unref(registry)) ? (openBlock(), createBlock("td", {
                          key: 0,
                          class: isSubForm(field) ? "td-nest" : void 0
                        }, [
                          ((_b = (_a = _ctx.form.fields._meta) == null ? void 0 : _a[field]) == null ? void 0 : _b.type) ? (openBlock(), createBlock(_component_v_chip, {
                            key: 0,
                            size: "x-small"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.form.fields._meta[field].type), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode("div", {
                            title: field in _ctx.form.fields._meta && _ctx.form.fields[field] != _ctx.form.fields._meta[field].value ? _ctx.form.fields._meta[field].value : null
                          }, [
                            field == "prez:link" ? (openBlock(), createBlock(_component_nuxt_link, {
                              key: 0,
                              to: _ctx.form.fields[field]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.form.fields[field]), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(typeof _ctx.form.fields[field] != "object" && field != "prez:link" ? _ctx.form.fields[field] : "") + " " + toDisplayString(isStringArray(field) ? _ctx.form.fields[field].join(", ") : "") + " ", 1),
                            isSubForm(field) ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.form.fields[field], (f) => {
                              return openBlock(), createBlock(_component_CommonForm, {
                                form: f,
                                "exclude-fields": unref(excludeFields)
                              }, null, 8, ["form", "exclude-fields"]);
                            }), 256)) : createCommentVNode("", true)
                          ], 8, ["title"])
                        ], 2)) : (openBlock(), createBlock("td", { key: 1 }, [
                          field in unref(registry) ? (openBlock(), createBlock(_component_CommonWidgets, {
                            key: 0,
                            form: _ctx.form,
                            info: _ctx.form.fields[field],
                            "field-name": field
                          }, null, 8, ["form", "info", "field-name"])) : createCommentVNode("", true)
                        ]))
                      ]);
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
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const Form_vue_vue_type_style_index_0_scoped_6ce81e14_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6ce81e14"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    dataUrl: {},
    formTitle: {},
    excludeFields: {},
    headerTitle: {},
    fields: {},
    info: { type: Boolean }
  },
  setup(__props) {
    const rdfStore = useRDFStore();
    const { loading, success, error, prez } = storeToRefs(rdfStore);
    ref(1);
    const form = ref(void 0);
    ref(null);
    const route = useRoute();
    const query = ref(route.query);
    watch(() => query.value = route.query, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonForm = __nuxt_component_0;
      const _component_CommonLoading = _sfc_main$4;
      _push(`<!--[-->`);
      if (unref(form)) {
        _push(ssrRenderComponent(_component_CommonForm, {
          "header-title": _ctx.headerTitle,
          "form-title": _ctx.formTitle,
          form: unref(form),
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
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/containers/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Form-bda09d41.js.map
