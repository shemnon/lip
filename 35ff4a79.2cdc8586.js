(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{173:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return p})),r.d(e,"default",(function(){return d}));var n=r(1),a=r(9),c=(r(24),r(19),r(20),r(77),r(0),r(195)),l=r(202),i=r(207),o={id:"all-lips",title:"All LIPs"},u={id:"all-lips",title:"All LIPs",description:"const types = Object.values(LIP_TYPE);",source:"@site/all-docs__GENERATED/all-lips.mdx",permalink:"/all-lips",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/all-lips.mdx",sidebar:"allLips"},s=Object.values(l.LIP_TYPE),p=[{value:"Draft",id:"draft",children:[]},{value:"Last Call",id:"last-call",children:[]},{value:"Accepted",id:"accepted",children:[]},{value:"Final",id:"final",children:[]},{value:"Rejected",id:"rejected",children:[]}],f={rightToc:p};function d(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(n.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"draft"},"Draft"),Object(c.b)(i.a,{status:l.LIP_STATUS.DRAFT,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"last-call"},"Last Call"),Object(c.b)(i.a,{status:l.LIP_STATUS.LAST_CALL,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"accepted"},"Accepted"),Object(c.b)(i.a,{status:l.LIP_STATUS.ACCEPTED,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"final"},"Final"),Object(c.b)(i.a,{status:l.LIP_STATUS.FINAL,types:s,mdxType:"LIPTable"}),Object(c.b)("h2",{id:"rejected"},"Rejected"),Object(c.b)(i.a,{status:l.LIP_STATUS.REJECTED,types:s,mdxType:"LIPTable"}))}d.isMDXComponent=!0},194:function(t,e,r){"use strict";var n=r(0),a=r(52);e.a=function(){return Object(n.useContext)(a.a)}},195:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));var n=r(0),a=r.n(n);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=a.a.createContext({}),s=function(t){var e=a.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i({},e,{},t)),r},p=function(t){var e=s(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var r=t.components,n=t.mdxType,c=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(r),d=n,b=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return r?a.a.createElement(b,i({ref:e},u,{components:r})):a.a.createElement(b,i({ref:e},u))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var u=2;u<c;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},196:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(199);var n=r(194);function a(t){var e=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?r+t.slice(1):r+t}},199:function(t,e,r){"use strict";var n=r(12),a=r(25),c=r(200),l="".startsWith;n(n.P+n.F*r(201)("startsWith"),"String",{startsWith:function(t){var e=c(this,t,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return l?l.call(e,n,r):e.slice(r,r+n.length)===n}})},200:function(t,e,r){var n=r(78),a=r(27);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(t))}},201:function(t,e,r){var n=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(a){}}return!0}},202:function(t,e){e.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},e.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},205:function(t,e,r){"use strict";var n=r(12),a=r(28),c=r(26),l=r(14),i=[].sort,o=[1,2,3];n(n.P+n.F*(l((function(){o.sort(void 0)}))||!l((function(){o.sort(null)}))||!r(206)(i)),"Array",{sort:function(t){return void 0===t?i.call(c(this)):i.call(c(this),a(t))}})},206:function(t,e,r){"use strict";var n=r(14);t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},207:function(t,e,r){"use strict";r(24),r(19),r(20),r(77),r(205);var n=r(0),a=r.n(n),c=r(13),l=r.n(c),i=r(194),o=r(196),u=r(208),s=r(202),p=r(131),f=r.n(p),d=function(t){var e=t.author,r=t.num,n=t.title;Object(i.a)().siteConfig.themeConfig;return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("a",{href:Object(o.a)("/lip-"+r)},r)),a.a.createElement("td",null,n),a.a.createElement("td",null,a.a.createElement("a",{href:"https://github.com/"+e,target:"_blank"},e)))},b=function(t){var e=t.status,r=(t.title,function(t,e){return e.reduce((function(e,r){return e.concat(u[r][t])}),[]).sort((function(t,e){return t.lip<e.lip?1:-1}))}(e,t.types));return a.a.createElement("table",{className:f.a.table},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Number"),a.a.createElement("th",{className:f.a.title},"Title"),a.a.createElement("th",null,"Author(s)"))),a.a.createElement("tbody",null,r.map((function(t){var e=t.lip,r=t.author,n=t.title;return a.a.createElement(d,{author:r,key:e,num:e,title:n})}))))};b.propTypes={status:l.a.oneOf(Object.values(s.LIP_STATUS)).isRequired,types:l.a.arrayOf(l.a.oneOf(Object.values(s.LIP_TYPE)))},b.defaultProps={types:Object.values(s.LIP_TYPE)},e.a=b},208:function(t){t.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[{"lip":1,"title":"Off-chain API","author":"Kevin Hurley (@kphfb), Dmitry Pimenov, George Danezis","status":"draft","type":"informational","created":"05/29/2020"},{"lip":3,"title":"Libra Upgrade Management","author":"Zekun Li (@zekun000)","status":"draft","type":"informational","created":"06/09/2020"},{"lip":4,"title":"Transaction Metadata Specification","author":"Kevin Hurley (@kphfb)","status":"draft","type":"informational","created":"06/26/2020"}],"last call":[],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","author":"libra","status":"final","type":"informational","created":"2/26/20"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')}}]);