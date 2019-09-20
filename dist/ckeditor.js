/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CKEditor=e():t.CKEditor=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},r=n(0),o="object"==typeof self&&self&&self.Object===Object&&self,u=r.a||o||Function("return this")(),a=function(){return u.Date.now()},c=u.Symbol,f=Object.prototype,s=f.hasOwnProperty,l=f.toString,d=c?c.toStringTag:void 0;var p=function(t){var e=s.call(t,d),n=t[d];try{t[d]=void 0;var i=!0}catch(t){}var r=l.call(t);return i&&(e?t[d]=n:delete t[d]),r},v=Object.prototype.toString;var y=function(t){return v.call(t)},b="[object Null]",h="[object Undefined]",m=c?c.toStringTag:void 0;var g=function(t){return null==t?void 0===t?h:b:m&&m in Object(t)?p(t):y(t)};var j=function(t){return null!=t&&"object"==typeof t},O="[object Symbol]";var w=function(t){return"symbol"==typeof t||j(t)&&g(t)==O},x=NaN,$=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,T=/^0o[0-7]+$/i,_=parseInt;var D=function(t){if("number"==typeof t)return t;if(w(t))return x;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace($,"");var n=E.test(t);return n||T.test(t)?_(t.slice(2),n?2:8):S.test(t)?x:+t},M="Expected a function",P=Math.max,N=Math.min;var F=function(t,e,n){var r,o,u,c,f,s,l=0,d=!1,p=!1,v=!0;if("function"!=typeof t)throw new TypeError(M);function y(e){var n=r,i=o;return r=o=void 0,l=e,c=t.apply(i,n)}function b(t){var n=t-s;return void 0===s||n>=e||n<0||p&&t-l>=u}function h(){var t=a();if(b(t))return m(t);f=setTimeout(h,function(t){var n=e-(t-s);return p?N(n,u-(t-l)):n}(t))}function m(t){return f=void 0,v&&r?y(t):(r=o=void 0,c)}function g(){var t=a(),n=b(t);if(r=arguments,o=this,s=t,n){if(void 0===f)return function(t){return l=t,f=setTimeout(h,e),d?y(t):c}(s);if(p)return clearTimeout(f),f=setTimeout(h,e),y(s)}return void 0===f&&(f=setTimeout(h,e)),c}return e=D(e)||0,i(n)&&(d=!!n.leading,u=(p="maxWait"in n)?P(D(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),g.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=s=o=f=void 0},g.flush=function(){return void 0===f?c:m(a())},g};var U={name:"ckeditor",render(t){return t(this.tagName)},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,$_lastEditorData:{type:String,default:""}}),mounted(){this.value&&Object.assign(this.config,{initialData:this.value}),this.editor.create(this.$el,this.config).then(t=>{this.instance=t,t.isReadOnly=this.disabled,this.$_setUpEditorEvents(),this.$emit("ready",t)}).catch(t=>{console.error(t)})},beforeDestroy(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{value(t,e){t!==e&&t!==this.$_lastEditorData&&this.instance.setData(t)},disabled(t){this.instance.isReadOnly=t}},methods:{$_setUpEditorEvents(){const t=this.instance;t.model.document.on("change:data",F(e=>{const n=this.$_lastEditorData=t.getData();this.$emit("input",n,e,t)},300)),t.editing.view.document.on("focus",e=>{this.$emit("focus",e,t)}),t.editing.view.document.on("blur",e=>{this.$emit("blur",e,t)})}}};const k={install(t){t.component("ckeditor",U)},component:U};e.default=k}]).default});
//# sourceMappingURL=ckeditor.js.map