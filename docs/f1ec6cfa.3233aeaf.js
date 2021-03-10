(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{294:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(314)),c=r(316),i={title:"Plot / Interval / Stacked / Grouped",keywords:["interval","plot","stacked"]},s={unversionedId:"examples/plot-interval-stacked-grouped",id:"examples/plot-interval-stacked-grouped",isDocsHomePage:!1,title:"Plot / Interval / Stacked / Grouped",description:"Make a column plot with both stacked and grouped bars.",source:"@site/docs/examples/plot-interval-stacked-grouped.md",slug:"/examples/plot-interval-stacked-grouped",permalink:"/wave/docs/examples/plot-interval-stacked-grouped",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-stacked-grouped.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Stacked / Transpose",permalink:"/wave/docs/examples/plot-interval-stacked-transpose"},next:{title:"Plot / Interval / Stacked / Grouped / Transpose",permalink:"/wave/docs/examples/plot-interval-stacked-grouped-transpose"}},u=[],l={rightToc:u};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a column plot with both stacked and grouped bars."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(489).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeMultiCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 5\nk = 5\nf1 = FakeMultiCategoricalSeries(groups=k)\nf2 = FakeMultiCategoricalSeries(groups=k)\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Intervals, stacked and dodged',\n    data=data('category country product price', n * k * 2),\n    plot=ui.plot([\n        ui.mark(type='interval', x='=product', y='=price', color='=country', stack='auto', dodge='=category', y_min=0)])\n))\n\ndata1 = [('A', g, t, x) for x in [f1.next() for _ in range(n)] for g, t, x, _ in x]\ndata2 = [('B', g, t, x) for x in [f2.next() for _ in range(n)] for g, t, x, _ in x]\nv.data = data1 + data2\n\npage.save()\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#interval")},"interval")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#plot")},"plot")," \u2002",Object(o.b)("a",{href:Object(c.a)("docs/examples/tags#stacked")},"stacked")))}p.isMDXComponent=!0},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(b,i(i({ref:t},u),{},{components:r})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},315:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},316:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(315),a=r(317);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const c=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+c:c}(t,e,r,n)}}function c(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},317:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},489:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-interval-stacked-grouped-678de98e675478e364cab127af4c07bb.png"}}]);