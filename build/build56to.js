!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Vue.component("component-test",{template:"<p>this is created by component</p>"});var n=new Vue({data:{title:"this is vm1's title"}});new Vue({el:"#app2",data:{title:"this is vm2's title "},methods:{onChange:function(){n.title=this.$refs.app2Title.innerText+", changed by vm2"}}}),new Vue({el:"#app3",data:{title:"vue lifecycle test"},beforeCreate:function(){console.log("beforeCreate()")},created:function(){console.log("created()")},beforeMount:function(){console.log("beforeMount()")},mounted:function(){console.log("mounted")},beforeUpdate:function(){console.log("beforeUpdate")},updated:function(){console.log("updated()")},beforeDestroy:function(){console.log("beforeDestroy()")},destroyed:function(){console.log("destroyed()")},methods:{destroy:function(){this.$destroy()}}});n.$mount("#app1"),setTimeout(function(){n.title="the title has been changed by timer"},1e3)}]);