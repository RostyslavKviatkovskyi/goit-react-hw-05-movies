(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{4607:function(e,t,n){"use strict";n.d(t,{Hb:function(){return s},Hx:function(){return f},kc:function(){return l},mv:function(){return v},uV:function(){return p}});var r=n(5861),c=n(7757),a=n.n(c),o=n(1243),u="https://api.themoviedb.org/3/",i="248c7debf175a4fcfc603a67fcb6bb7a",s=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log("The request was failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("The request was failed. Add the correct ID");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("The request was failed. Add the correct ID");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("The request was failed. Add the correct ID");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("The request was failed. Add the correct movie title");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},5093:function(e,t,n){"use strict";n.d(t,{O:function(){return f}});var r,c=n(1087),a=n(7689),o=n(2007),u=n.n(o),i=n(168),s=n(6444).ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n"]))),p=n(184),f=function(e){var t=e.movies,n=(0,a.TH)();return(0,p.jsx)(p.Fragment,{children:t.length>0&&(0,p.jsx)(s,{children:t.map((function(e){var t,r=e.id,a=e.title;return(0,p.jsx)("li",{children:(0,p.jsx)(c.rU,{to:"/movies/".concat(r),state:{from:"".concat(n.pathname).concat(null!==(t=n.search)&&void 0!==t?t:"")},children:a})},r)}))})})};f.prototype={movies:u().array.isRequired}},2828:function(e,t,n){"use strict";n.r(t),n.d(t,{Movies:function(){return l}});var r=n(9439),c=n(4607),a=n(5093),o=n(2007),u=n.n(o),i=n(184),s=function(e){var t=e.onChange,n=e.value;return(0,i.jsx)("input",{type:"text",name:"query",value:n,onChange:function(e){return t(e.target.value)}})};s.prototype={onChange:u().func.isRequired,value:u().string.isRequired};var p=n(2791),f=n(1087),l=function(){var e,t=(0,p.useState)([]),n=(0,r.Z)(t,2),o=n[0],u=n[1],l=(0,f.lr)(),v=(0,r.Z)(l,2),h=v[0],d=v[1],m=null!==(e=h.get("query"))&&void 0!==e?e:"";return(0,p.useEffect)((function(){(0,c.mv)(m).then((function(e){u(e.data.results),console.log(e.data)}))}),[m,d]),(0,i.jsxs)("div",{children:[(0,i.jsx)(s,{value:m,onChange:function(e){d(""!==e?{query:e}:{})}}),(0,i.jsx)(a.O,{movies:o})]})}},888:function(e,t,n){"use strict";var r=n(9047);function c(){}function a(){}a.resetWarningCache=c,e.exports=function(){function e(e,t,n,c,a,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:c};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=828.735e7e89.chunk.js.map