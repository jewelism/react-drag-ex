(this["webpackJsonpreact-drag-ex"]=this["webpackJsonpreact-drag-ex"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),i=(n(10),n(1)),l=n(2);function s(e){var t=e.list,n=e.onChangeList,o=Object(a.useState)(-1),r=Object(i.a)(o,2),s=r[0],u=r[1],d=Object(a.useState)(-1),b=Object(i.a)(d,2),g=b[0],f=b[1],h=Object(a.useState)(0),m=Object(i.a)(h,2),p=m[0],v=m[1],O=Object(a.useCallback)((function(e,t){u(t)}),[]),j=Object(a.useCallback)((function(e,t){var n=e.target.getBoundingClientRect(),a=(e.clientY-n.top)/n.height;v(a<.5?0:1),f(t)}),[]),x=Object(a.useCallback)((function(e){var a=g+p;if(a>=0&&a!==s){var c=Object(l.a)(t),o=c.splice(s,1);c.splice.apply(c,[a<=s?a:a-1,0].concat(Object(l.a)(o))),n(c)}f(-1)}),[s,p,g,t,n]);return c.a.createElement("div",{id:"columns",style:{display:"flex",flexDirection:"column"}},t.map((function(e,t){var n=e.id,a=e.text;return c.a.createElement("button",{key:n,id:n,onDragStart:function(e){return O(e,t)},onDragOver:function(e){return j(e,t)},onDragEnd:x,draggable:!0,style:{height:50},className:g===t?"drag_place drop ".concat(p?"after":"before"):""},a)})))}var u=[{id:1,text:"AAA"},{id:2,text:"BBB"},{id:3,text:"CCC"},{id:4,text:"DDD"}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement((function(){var e=Object(a.useState)(u),t=Object(i.a)(e,2),n=t[0],o=t[1];return c.a.createElement(s,{list:n,onChangeList:function(e){o(e)}})}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.5070d853.chunk.js.map