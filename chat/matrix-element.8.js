(window["matrixElement_jsonp"] = window["matrixElement_jsonp"] || []).push([[8],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/chatSettings/topheader/index.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  methods: {}\n});\n\n//# sourceURL=webpack:///./src/components/chatSettings/topheader/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/chatSettings.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_chatSettings_topheader_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/components/chatSettings/topheader/index.vue\");\n/* harmony import */ var _components_chatSettings_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/components/chatSettings/index.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'chatSettings',\n  data: function () {\n    return {};\n  },\n  components: {\n    topheader: _components_chatSettings_topheader_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    settings: _components_chatSettings_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  computed: {\n    chat() {\n      return this.$store.state.chatsMap[this.$route.query.id.replace('%', '!')];\n    }\n\n  },\n  methods: {}\n});\n\n//# sourceURL=webpack:///./src/views/chatSettings.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./src/components/chatSettings/index.js?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _components_chats_assets_icon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/components/chats/assets/icon.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: () => ({\n    pubChat: Object,\n    topicTxt: '',\n    topic: false\n  }),\n  props: {\n    chat: Object,\n    saveClicked: false\n  },\n  components: {\n    chatIcon: _components_chats_assets_icon_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapState\"])({\n    pocketnet: state => state.pocketnet,\n    minimized: state => state.minimized,\n    active: state => state.active,\n    auth: state => state.auth,\n    m_chat: function () {\n      return this.core.mtrx.client.getRoom(this.chat.roomId);\n    },\n    shareRoomLink: function () {\n      return `https://${this.core.domain}/publicPreview/welcome?connect=${this.chat.roomId.replace('!', '%')}`;\n    }\n  }),\n\n  mounted() {\n    if (this.m_chat.getJoinRule() === 'public') {\n      this.getPublicRoom();\n      this.topic = true;\n    }\n  },\n\n  methods: {\n    saveEdited() {\n      this.core.mtrx.client.setRoomName(this.m_chat.roomId, '@' + this.m_chat.name.replace(/[@]*/g, \"\"));\n      this.core.mtrx.client.setRoomTopic(this.chat.roomId, this.topicTxt.replace(/ /g, '_')).then(r => {\n        return r;\n      });\n    },\n\n    getPublicRoom() {\n      this.core.mtrx.client.publicRooms().then(r => {\n        this.pubChat = r.chunk.filter(room => room.room_id === this.chat.roomId)[0];\n\n        if (this.pubChat['topic']) {\n          this.topicTxt = this.pubChat['topic'].replace(/_/g, ' ');\n        }\n      });\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/components/chatSettings?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"11fb7574-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/chatSettings/index.vue?vue&type=template&id=7538e06e&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      class: { minimized: _vm.minimized, active: _vm.active },\n      attrs: { id: \"chatSettings\" },\n    },\n    [\n      _c(\"div\", { staticClass: \"chatSettingAbout\" }, [\n        _c(\n          \"div\",\n          { class: { chatIconWrapper: \"chatIconWrapper\", noSwipe: true } },\n          [\n            _c(\"chatIcon\", {\n              attrs: {\n                slidesPerView: 4,\n                dontuseslides: _vm.minimized && !_vm.active,\n                chat: _vm.chat,\n                m_chat: _vm.m_chat,\n                hideunseen: true,\n              },\n            }),\n          ],\n          1\n        ),\n        _c(\"div\", { staticClass: \"chatNameEdit\" }, [\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.m_chat.name,\n                expression: \"m_chat.name\",\n              },\n            ],\n            attrs: { type: \"text\", placeholder: \"Name\" },\n            domProps: { value: _vm.m_chat.name },\n            on: {\n              input: function ($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(_vm.m_chat, \"name\", $event.target.value)\n              },\n            },\n          }),\n        ]),\n        _vm.topic\n          ? _c(\"div\", { staticClass: \"chatDescription\" }, [\n              _c(\"textarea\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.topicTxt,\n                    expression: \"topicTxt\",\n                  },\n                ],\n                attrs: {\n                  type: \"text\",\n                  placeholder: \"Description\",\n                  maxlength: \"74\",\n                },\n                domProps: { value: _vm.topicTxt },\n                on: {\n                  input: function ($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.topicTxt = $event.target.value\n                  },\n                },\n              }),\n            ])\n          : _vm._e(),\n        _c(\n          \"button\",\n          {\n            staticClass: \"button small rounded inSettings\",\n            on: {\n              click: function ($event) {\n                return _vm.saveEdited()\n              },\n            },\n          },\n          [_vm._v(\" \" + _vm._s(_vm.$t(\"button.save\")) + \" \")]\n        ),\n      ]),\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/chatSettings/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2211fb7574-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"11fb7574-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/chatSettings/topheader/index.vue?vue&type=template&id=8c1d847e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"chatTopheader\" } },\n    [\n      _c(\"topheader\", {\n        scopedSlots: _vm._u([\n          {\n            key: \"left\",\n            fn: function () {\n              return [_c(\"backButton\", { attrs: { action: \"back\" } })]\n            },\n            proxy: true,\n          },\n          {\n            key: \"info\",\n            fn: function () {\n              return [_c(\"span\", [_vm._v(_vm._s(_vm.$t(\"caption.settings\")))])]\n            },\n            proxy: true,\n          },\n          {\n            key: \"right\",\n            fn: function () {\n              return undefined\n            },\n            proxy: true,\n          },\n        ]),\n      }),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/chatSettings/topheader/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2211fb7574-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"11fb7574-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/chatSettings.vue?vue&type=template&id=eaa97996&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.chat\n    ? _c(\n        \"div\",\n        { staticClass: \"page \" },\n        [\n          _c(\"topheader\", { staticClass: \"topheader\" }),\n          _c(\"maincontent\", {\n            scopedSlots: _vm._u(\n              [\n                {\n                  key: \"content\",\n                  fn: function () {\n                    return [_c(\"settings\", { attrs: { chat: _vm.chat } })]\n                  },\n                  proxy: true,\n                },\n              ],\n              null,\n              false,\n              32150248\n            ),\n          }),\n        ],\n        1\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/chatSettings.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2211fb7574-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/chatSettings/index.sass?vue&type=style&index=0&id=7538e06e&scoped=true&lang=sass&":
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(\"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".inSettings[data-v-7538e06e] {\\n  margin: 30px auto;\\n  display: block;\\n}\\n.chatIconWrapper[data-v-7538e06e] {\\n  width: 120px;\\n  margin: 0 auto;\\n}\\n.linkPlace[data-v-7538e06e] {\\n  margin-top: 30px;\\n  padding: 0.5em 0;\\n  cursor: pointer;\\n  border-top: 1px solid rgb(var(--background-main));\\n}\\n.linkPlace span[data-v-7538e06e] {\\n    font-size: 1em;\\n    display: block;\\n    text-align: left;\\n    max-width: 400px;\\n    overflow: hidden;\\n    white-space: nowrap;\\n    text-overflow: ellipsis;\\n}\\n.linkPlace .shareLink[data-v-7538e06e]:hover {\\n    color: rgb(var(--color-txt-ac));\\n}\\n.chatSettingAbout[data-v-7538e06e] {\\n  padding: 1em 0;\\n}\\n.chatSettingAbout .chatNameEdit[data-v-7538e06e] {\\n    margin-top: 1em;\\n}\\n.chatSettingAbout .chatNameEdit input[data-v-7538e06e] {\\n      padding: 1em;\\n      display: block;\\n      width: 100%;\\n      border-bottom: 1px solid rgb(var(--neutral-grad-1));\\n      border-top: 1px solid rgb(var(--neutral-grad-1));\\n}\\n.chatSettingAbout .chatNameEdit input[data-v-7538e06e]:focus {\\n        border-bottom: 1px solid rgb(var(--neutral-grad-1));\\n        border-top: 1px solid rgb(var(--neutral-grad-1));\\n}\\n.chatSettingAbout .chatDescription textarea[data-v-7538e06e] {\\n    font-size: 0.9em;\\n    display: block;\\n    width: 100%;\\n    resize: none;\\n    padding: 1em;\\n}\\n.chatIconWrapper[data-v-7538e06e] {\\n  width: 90%;\\n  margin: 0 auto;\\n  padding: 0.5em 0;\\n}\\n.chatIconWrapper[data-v-7538e06e] .swiperWrapperFlex .imageSwiper {\\n    width: 100px;\\n    height: 100px;\\n    line-height: 100px;\\n}\\n.chatIconWrapper[data-v-7538e06e] .swiperWrapperFlex {\\n    padding-bottom: 1em;\\n}\\n.chatIconWrapper[data-v-7538e06e] .threeAvatars,\\n  .chatIconWrapper[data-v-7538e06e] .fourAvatars,\\n  .chatIconWrapper[data-v-7538e06e] .twoAvatars {\\n    width: 50%;\\n    padding-bottom: 50%;\\n    box-shadow: 0 5px 7px -5px rgba(var(--color-shadow-base), 0.7);\\n    background: rgba(var(--background-total-theme), 0.3);\\n}\\n.chatIconWrapper[data-v-7538e06e] .oneuser {\\n    width: 50%;\\n    margin: 0 auto;\\n}\\n.chatIconWrapper[data-v-7538e06e] .bgimage {\\n    box-shadow: 0 5px 7px -5px rgba(var(--color-shadow-base), 0.7);\\n}\\n.minimized:not(.active) .chatDescription[data-v-7538e06e],\\n.minimized:not(.active) .chatNameEdit[data-v-7538e06e] {\\n  display: none;\\n}\\n.minimized[data-v-7538e06e]:not(.active) .chatIconWrapper {\\n  width: 52px;\\n  margin: 0;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/chatSettings/index.sass?./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--10-oneOf-1-3");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/chatSettings/index.sass?vue&type=style&index=0&id=7538e06e&scoped=true&lang=sass&":
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(\"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/chatSettings/index.sass?vue&type=style&index=0&id=7538e06e&scoped=true&lang=sass&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add CSS to Shadow Root\nvar add = __webpack_require__(\"./node_modules/vue-style-loader/lib/addStylesShadow.js\").default\nmodule.exports.__inject__ = function (shadowRoot) {\n  add(\"33472466\", content, shadowRoot)\n};\n\n//# sourceURL=webpack:///./src/components/chatSettings/index.sass?./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--10-oneOf-1-3");

/***/ }),

/***/ "./src/components/chatSettings/index.js?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./src/components/chatSettings/index.js?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/chatSettings?");

/***/ }),

/***/ "./src/components/chatSettings/index.sass?vue&type=style&index=0&id=7538e06e&scoped=true&lang=sass&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_index_sass_vue_type_style_index_0_id_7538e06e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/chatSettings/index.sass?vue&type=style&index=0&id=7538e06e&scoped=true&lang=sass&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_index_sass_vue_type_style_index_0_id_7538e06e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_index_sass_vue_type_style_index_0_id_7538e06e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_index_sass_vue_type_style_index_0_id_7538e06e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_index_sass_vue_type_style_index_0_id_7538e06e_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/chatSettings/index.sass?");

/***/ }),

/***/ "./src/components/chatSettings/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index_vue_vue_type_template_id_7538e06e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/components/chatSettings/index.vue?vue&type=template&id=7538e06e&scoped=true&\");\n/* harmony import */ var _index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/components/chatSettings/index.js?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\nvar disposed = false\n\nfunction injectStyles (context) {\n  if (disposed) return\n  var style0 = __webpack_require__(\"./src/components/chatSettings/index.sass?vue&type=style&index=0&id=7538e06e&scoped=true&lang=sass&\")\nif (style0.__inject__) style0.__inject__(context)\n\n}\n\n\n  module.hot && false\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_7538e06e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_7538e06e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  injectStyles,\n  \"7538e06e\",\n  null\n  ,true\n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/chatSettings/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(\"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/chatSettings/index.vue?");

/***/ }),

/***/ "./src/components/chatSettings/index.vue?vue&type=template&id=7538e06e&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7538e06e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"11fb7574-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/chatSettings/index.vue?vue&type=template&id=7538e06e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7538e06e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7538e06e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/chatSettings/index.vue?");

/***/ }),

/***/ "./src/components/chatSettings/topheader/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_8c1d847e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/components/chatSettings/topheader/index.vue?vue&type=template&id=8c1d847e&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/components/chatSettings/topheader/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_8c1d847e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_8c1d847e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  ,true\n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/chatSettings/topheader/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/chatSettings/topheader/index.vue?");

/***/ }),

/***/ "./src/components/chatSettings/topheader/index.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/chatSettings/topheader/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/chatSettings/topheader/index.vue?");

/***/ }),

/***/ "./src/components/chatSettings/topheader/index.vue?vue&type=template&id=8c1d847e&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8c1d847e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"11fb7574-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/chatSettings/topheader/index.vue?vue&type=template&id=8c1d847e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8c1d847e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8c1d847e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/chatSettings/topheader/index.vue?");

/***/ }),

/***/ "./src/views/chatSettings.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatSettings_vue_vue_type_template_id_eaa97996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/views/chatSettings.vue?vue&type=template&id=eaa97996&\");\n/* harmony import */ var _chatSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/views/chatSettings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chatSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chatSettings_vue_vue_type_template_id_eaa97996___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chatSettings_vue_vue_type_template_id_eaa97996___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  ,true\n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/chatSettings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/chatSettings.vue?");

/***/ }),

/***/ "./src/views/chatSettings.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/chatSettings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/chatSettings.vue?");

/***/ }),

/***/ "./src/views/chatSettings.vue?vue&type=template&id=eaa97996&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatSettings_vue_vue_type_template_id_eaa97996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"11fb7574-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/chatSettings.vue?vue&type=template&id=eaa97996&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatSettings_vue_vue_type_template_id_eaa97996___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_11fb7574_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chatSettings_vue_vue_type_template_id_eaa97996___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/chatSettings.vue?");

/***/ })

}]);