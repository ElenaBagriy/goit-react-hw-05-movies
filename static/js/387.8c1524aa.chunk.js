"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{197:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return g},Mc:function(){return d},_k:function(){return o},uV:function(){return l}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org";var i="a3ea6037e929c907cd6335d101a9b094";function o(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/trending/movie/day?api_key=".concat(i,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,u,c,i,o=e(5861),s=e(9439),p=e(4687),f=e.n(p),d=e(2791),h=e(7689),l=e(197),x=e(168),g=e(6444),v=g.ZP.section(r||(r=(0,x.Z)(["\n  max-width: 1200px;\n  padding: 20px 0;\n  margin: 0 auto;\n"]))),Z=g.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),m=g.ZP.li(u||(u=(0,x.Z)(["\npadding: 12px 8px;\n  border: 1px solid gray;\n  border-radius: 5px;\n"]))),y=(g.ZP.div(c||(c=(0,x.Z)(["\n    padding: 20px 12px;\n    text-align: center;\n"]))),g.ZP.h3(i||(i=(0,x.Z)(["\n    margin-bottom: 12px;\n"])))),w=e(184),k=function(){var n=(0,h.UO)().id,t=(0,d.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){function t(){return t=(0,o.Z)(f().mark((function n(t){var e,r,u;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.Hx)(t);case 2:e=n.sent,r=e.results,u=r.map((function(n){return{id:n.id,author:n.author,content:n.content}})),a(u);case 6:case"end":return n.stop()}}),n)}))),t.apply(this,arguments)}!function(n){t.apply(this,arguments)}(n)}),[n]),(0,w.jsx)(v,{children:0!==r.length?(0,w.jsx)(Z,{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,w.jsxs)(m,{children:[(0,w.jsxs)(y,{children:["Author: ",e]}),(0,w.jsx)("p",{children:r})]},t)}))}):(0,w.jsx)("p",{children:"We don't have any reviews on this movie."})})}}}]);
//# sourceMappingURL=387.8c1524aa.chunk.js.map