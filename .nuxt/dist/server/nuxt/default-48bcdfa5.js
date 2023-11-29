import { _ as __nuxt_component_0$1 } from "./nuxt-link-52e762fb.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, watch, renderSlot } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc, e as useRoute } from "../server.mjs";
import "ufo";
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
const Navigation_vue_vue_type_style_index_0_scoped_d1121f0b_lang = "";
const _sfc_main$1 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_v_tab = resolveComponent("v-tab");
      _push(ssrRenderComponent(_component_v_tabs, mergeProps({
        modelValue: _ctx.tab,
        "onUpdate:modelValue": ($event) => _ctx.tab = $event,
        "align-tabs": "title"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Home`);
                      } else {
                        return [
                          createTextVNode("Home")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Home")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/catalogs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Catalogs`);
                      } else {
                        return [
                          createTextVNode("Catalogs")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("Catalogs")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/sparql" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`SPARQL`);
                      } else {
                        return [
                          createTextVNode("SPARQL")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("SPARQL")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`About`);
                      } else {
                        return [
                          createTextVNode("About")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, null, {
                      default: withCtx(() => [
                        createTextVNode("About")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_link, { to: "/" }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Home")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_nuxt_link, { to: "/catalogs" }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("Catalogs")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_nuxt_link, { to: "/sparql" }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("SPARQL")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_nuxt_link, { to: "/about" }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, null, {
                    default: withCtx(() => [
                      createTextVNode("About")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d1121f0b"]]);
const default_vue_vue_type_style_index_0_scoped_cb993a98_lang = "";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const path = ref(route.path);
    watch(() => path.value = route.path, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_CommonNavigation = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_toolbar, {
              color: "white",
              dark: "",
              fixed: "",
              app: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_app_bar_nav_icon, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img style="${ssrRenderStyle({ "width": "160px" })}" src="https://kurrawong.ai/KurrawongAI_350.png" data-v-cb993a98${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            style: { "width": "160px" },
                            src: "https://kurrawong.ai/KurrawongAI_350.png"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CommonNavigation, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_app_bar_nav_icon),
                    createVNode(_component_v_toolbar_title, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          style: { "width": "160px" },
                          src: "https://kurrawong.ai/KurrawongAI_350.png"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_spacer),
                    createVNode(_component_CommonNavigation)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_container, { fluid: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_toolbar, {
                color: "white",
                dark: "",
                fixed: "",
                app: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_app_bar_nav_icon),
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createVNode("img", {
                        style: { "width": "160px" },
                        src: "https://kurrawong.ai/KurrawongAI_350.png"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_spacer),
                  createVNode(_component_CommonNavigation)
                ]),
                _: 1
              }),
              createVNode(_component_v_container, { fluid: "" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cb993a98"]]);
export {
  _default as default
};
//# sourceMappingURL=default-48bcdfa5.js.map
