(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{293:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpb25pY29uIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPlNlYXJjaDwvdGl0bGU+PHBhdGggZD0iTTIyMS4wOSA2NGExNTcuMDkgMTU3LjA5IDAgMTAxNTcuMDkgMTU3LjA5QTE1Ny4xIDE1Ny4xIDAgMDAyMjEuMDkgNjR6IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMyIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMyIiBkPSJNMzM4LjI5IDMzOC4yOUw0NDggNDQ4Ii8+PC9zdmc+"},294:function(t,e,n){"use strict";n.r(e);n(30),n(39),n(9),n(24),n(38),n(23),n(29),n(40),n(41),n(26);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={props:{document:{required:!0,type:Object}},data:function(){return{anchors:[],activeAnchor:null,showNav:!1}},mounted:function(){var t,e=r(this.document.body.children);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(n.tag&&n.children&&"h"===n.tag[0]){var title=null;n.children.forEach((function(t){"text"===t.type&&(title=t.value)})),this.anchors.push({id:n.props.id,title:title,depth:parseInt(n.tag[1],10)})}}}catch(t){e.e(t)}finally{e.f()}},methods:{jumpTo:function(t){this.activeAnchor=t,this.showNav&&(this.showNav=!1)}}},c=n(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"mt-0 md:-mt-16 max-w-prose mx-auto"},[r("h1",{staticClass:"mb-12 text-center text-5xl md:text-8xl text-green-800 font-normal font-sans"},[t._v("\n        "+t._s(t.document.title)+"\n    ")]),t._v(" "),t.showNav&&t.anchors.length>0?r("div",{staticClass:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10",on:{click:function(e){t.showNav=!1}}}):t._e(),t._v(" "),r("div",{staticClass:"block xl:hidden fixed mr-10 mb-10 bottom-0 right-0 z-30"},[r("button",{staticClass:"rounded-full bg-green-300 focus:bg-green-400 p-4 shadow",on:{click:function(e){t.showNav=!t.showNav}}},[r("img",{staticClass:"h-5 w-5",attrs:{src:n(293),alt:"Navigation"}})])]),t._v(" "),r("div",{staticClass:"flex xl:-ml-nav"},[t.anchors.length>0?r("div",{staticClass:"z-20 max-h-full w-full xl:w-nav mt-0 xl:-mt-4",class:{"fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 xl:top-auto z-10 top-0":t.showNav,"hidden xl:block pr-4":!t.showNav}},[r("div",{staticClass:"relative xl:sticky overflow-y-auto pt-0 xl:pt-4 top-0 px-8 xl:px-0"},[r("div",{staticClass:"p-4 mr-0 xl:mr-4 w-full bg-green-200"},[r("div",{staticClass:"mb-2 pb-2 text-2xl font-medium border-b-2 border-green-300"},[t._v("\n                        Inhalte\n                    ")]),t._v(" "),t._l(t.anchors,(function(e){return r("div",{key:e.id,staticClass:"truncate",style:{paddingLeft:10*(e.depth-1)+"px"}},[r("a",{staticClass:"text-black hover:text-green-700 no-underline!important truncate",class:{"text-sm":e.depth>1},attrs:{href:"#"+e.id},on:{click:function(n){return t.jumpTo(e)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])})),t._v(" "),r("a",{staticClass:"block text-black hover:text-green-700 no-underline!important truncate mt-2 pt-2 border-t-2 border-green-300",attrs:{href:"#top"}},[t._v("\n                        Nach oben\n                    ")])],2)])]):t._e(),t._v(" "),r("div",{ref:"sticky-guard",staticClass:"prose prose-green max-w-none mx-auto overflow-x-auto"},[r("nuxt-content",{ref:"content",attrs:{document:t.document}})],1)])])}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(44),{layout:"content",data:function(){return{page:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("ernaehrung").fetch();case 2:t.page=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){var title="Ernährung - Get Better",t="Für unseren Nährstoffbedarf besteht absolut keine Notwendigkeit, tierische Produkte zu konsumieren. Des Weiteren zeigen Untersuchungen, dass die vegane Ernährungsweise im Vergleich zur Omnivoren Ernährung mit besseren gesundheitlichen Effekten einhergeht. Zum Beispiel mit einem geringeren Risiko für Herz-Kreislauf-Erkrankungen, für einige Krebsarten, Übergewicht, Hypertonie (Bluthochdruck), Typ-2 Diabetes und allgemein einer geringen Sterblichkeit.";return{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",property:"og:description",content:t},{hid:"twitter:description",name:"twitter:description",content:t}]}}}),l=n(14),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page?n("Content",{attrs:{document:t.page}}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Content:n(294).default})}}]);