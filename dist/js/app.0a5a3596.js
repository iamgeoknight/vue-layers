(function(e){function t(t){for(var n,o,i=t[0],u=t[1],l=t[2],b=0,p=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-layers/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0feb":function(e,t,a){},1793:function(e,t,a){"use strict";a("25a7")},"25a7":function(e,t,a){},"4af3":function(e){e.exports=JSON.parse('[{"name":"State City Highway","url":"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer","visible":true},{"name":"State City Rivers","url":"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer","visible":true},{"name":"Kansas Oil Gas Fields","url":"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer","visible":true},{"name":"USA Census","url":"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer","visible":true}]')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t,a,r,c,o){var i=Object(n["D"])("LayersPanel"),u=Object(n["D"])("q-drawer"),l=Object(n["D"])("Map"),s=Object(n["D"])("q-page-container"),b=Object(n["D"])("q-layout");return Object(n["w"])(),Object(n["e"])(b,{view:"lHh Lpr lFf"},{default:Object(n["I"])((function(){return[Object(n["j"])(u,{modelValue:r.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.leftDrawerOpen=e}),"show-if-above":"",bordered:"",class:"bg-grey-2"},{default:Object(n["I"])((function(){return[Object(n["j"])(i)]})),_:1},8,["modelValue"]),Object(n["j"])(s,{id:"map_container"},{default:Object(n["I"])((function(){return[Object(n["j"])(l)]})),_:1})]})),_:1})}var c=a("5530"),o=function(e){return Object(n["z"])("data-v-34b7cbaf"),e=e(),Object(n["x"])(),e},i=o((function(){return Object(n["h"])("div",{id:"map"},null,-1)}));function u(e,t,a,r,c,o){var u=Object(n["D"])("q-page");return Object(n["w"])(),Object(n["e"])(u,{class:"flex flex-center"},{default:Object(n["I"])((function(){return[i]})),_:1})}a("d81d");var l=a("5eee"),s=a("a2c7"),b=a("480c"),p=a("d0e9"),f={name:"Map",mounted:function(){this.map=new l["a"]({target:"map",layers:[new b["a"]({source:new p["a"],name:"OSM"})],view:new s["a"]({center:[-9869708.964428628,4908948.052576464],zoom:4})}),this.$store.commit("setMap",this.map)}},d=(a("d20f"),a("6b0d")),m=a.n(d),j=a("9989"),O=a("93dc"),v=a.n(O);const y=m()(f,[["render",u],["__scopeId","data-v-34b7cbaf"]]);var g=y;v()(f,"components",{QPage:j["a"]});a("fb6a");function h(e,t,a,r,c,o){var i=Object(n["D"])("q-tab"),u=Object(n["D"])("q-tabs"),l=Object(n["D"])("q-checkbox"),s=Object(n["D"])("q-item-section"),b=Object(n["D"])("q-item"),p=Object(n["D"])("q-list"),f=Object(n["E"])("ripple");return Object(n["w"])(),Object(n["g"])("div",null,[Object(n["j"])(u,{modelValue:c.tab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.tab=e}),"inline-label":"",class:"bg-green text-white"},{default:Object(n["I"])((function(){return[Object(n["j"])(i,{name:"layers",icon:"layers",label:"Layers"})]})),_:1},8,["modelValue"]),null!=o.map?(Object(n["w"])(),Object(n["e"])(p,{key:0,separator:"",bordered:""},{default:Object(n["I"])((function(){return[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(o.map.getLayers().getArray().slice().reverse(),(function(e){return Object(n["J"])((Object(n["w"])(),Object(n["e"])(b,{clickable:"",key:e.index,style:{height:"10px"}},{default:Object(n["I"])((function(){return[Object(n["j"])(s,{avatar:""},{default:Object(n["I"])((function(){return[Object(n["j"])(l,{color:"primary",modelValue:e.getProperties().visible,"onUpdate:modelValue":function(t){return e.getProperties().visible=t},onClick:function(t){return o.toggleLayer(e)}},null,8,["modelValue","onUpdate:modelValue","onClick"])]})),_:2},1024),Object(n["j"])(s,{class:"label_align"},{default:Object(n["I"])((function(){return[Object(n["i"])(Object(n["F"])(e.get("name")),1)]})),_:2},1024)]})),_:2},1024)),[[f]])})),128))]})),_:1})):Object(n["f"])("",!0)])}a("d3b7"),a("159b"),a("b0c0");var w=a("4af3"),S=a("5043"),_={name:"LayersPanel",data:function(){return{splitterModel:1,tab:"mails"}},watch:{map:{handler:function(){this.addLayers()},deep:!1}},computed:{map:function(){return this.$store.state.map}},methods:{addLayers:function(){var e=this;w.forEach((function(t){e.map.addLayer(new b["a"]({source:new S["a"]({url:t.url}),name:t.name}))}))},toggleLayer:function(e){e.setVisible(!e.getVisible())}}},I=(a("1793"),a("429b")),Q=a("7460"),D=a("1c1c"),L=a("66e5"),P=a("4074"),x=a("8f8e"),M=a("714f");const V=m()(_,[["render",h],["__scopeId","data-v-172abf06"]]);var C=V;v()(_,"components",{QTabs:I["a"],QTab:Q["a"],QList:D["a"],QItem:L["a"],QItemSection:P["a"],QCheckbox:x["a"]}),v()(_,"directives",{Ripple:M["a"]});var k=a("5502"),q={name:"LayoutDefault",components:{Map:g,LayersPanel:C},computed:Object(c["a"])({},Object(k["b"])("map",{map:"map"})),setup:function(){return{leftDrawerOpen:Object(n["B"])(!1)}}},A=(a("c6c4"),a("4d5a")),U=a("e359"),G=a("65c6"),T=a("9c40"),R=a("6ac5"),E=a("9404"),F=a("0170"),H=a("0016"),J=a("09e3");const K=m()(q,[["render",r]]);var $=K;v()(q,"components",{QLayout:A["a"],QHeader:U["a"],QToolbar:G["a"],QBtn:T["a"],QToolbarTitle:R["a"],QDrawer:E["a"],QList:D["a"],QItemLabel:F["a"],QItem:L["a"],QItemSection:P["a"],QIcon:H["a"],QPageContainer:J["a"]});var z=Object(k["a"])({state:function(){return{map:null}},mutations:{setMap:function(e,t){e.map=t}}}),B=z,N=a("b05d"),W=(a("c867"),a("e54f"),{config:{},plugins:{}}),X=Object(n["d"])($);X.config.globalProperties.$store=B,X.use(N["a"],W).mount("#app")},a754:function(e,t,a){},c6c4:function(e,t,a){"use strict";a("a754")},c867:function(e,t,a){},d20f:function(e,t,a){"use strict";a("0feb")}});
//# sourceMappingURL=app.0a5a3596.js.map