(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1OyB":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},JX7q:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},Ji7U:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},grO0:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("w/X4")}])},md7G:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}n.d(e,"a",(function(){return u}));var i=n("JX7q");function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(i.a)(t):e}},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},vuIU:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},"w/X4":function(t,e,n){"use strict";n.r(e);var o=n("1OyB"),r=n("vuIU"),i=n("JX7q"),u=n("md7G"),c=n("foSv"),a=n("Ji7U"),s=n("rePB"),l=n("q1tI"),f=n.n(l).a.createElement;function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var d=function(t){Object(a.a)(l,t);var e,n=(e=l,function(){var t,n=Object(c.a)(e);if(p()){var o=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function l(){var t;Object(o.a)(this,l);for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];return t=n.call.apply(n,[this].concat(r)),Object(s.a)(Object(i.a)(t),"state",{days:"",hours:"",minutes:"",seconds:""}),Object(s.a)(Object(i.a)(t),"commingSoonTime",(function(){var e=new Date("August 23, 2022 17:00:00 PDT"),n=Date.parse(e)/1e3,o=new Date,r=n-Date.parse(o)/1e3,i=Math.floor(r/86400),u=Math.floor((r-86400*i)/3600),c=Math.floor((r-86400*i-3600*u)/60),a=Math.floor(r-86400*i-3600*u-60*c);u<"10"&&(u="0"+u),c<"10"&&(c="0"+c),a<"10"&&(a="0"+a),t.setState({days:i,hours:u,minutes:c,seconds:a})})),Object(s.a)(Object(i.a)(t),"onSubmit",(function(t){t.preventDefault()})),t}return Object(r.a)(l,[{key:"componentDidMount",value:function(){var t=this;this.myInterval=setInterval((function(){t.commingSoonTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return f("div",{className:"coming-soon-area"},f("div",{className:"d-table"},f("div",{className:"d-table-cell"},f("div",{className:"container"},f("div",{className:"coming-soon-content"},f("h1",null,"Coming Soon"),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."),f("div",{id:"timer"},f("div",{id:"days"},this.state.days," ",f("span",null,"Days")),f("div",{id:"hours"},this.state.hours," ",f("span",null,"Hours")),f("div",{id:"minutes"},this.state.minutes," ",f("span",null,"Minutes")),f("div",{id:"seconds"},this.state.seconds," ",f("span",null,"Seconds"))),f("form",{className:"newsletter-form"},f("input",{type:"email",className:"input-newsletter",placeholder:"Enter email address",name:"email",required:!0}),f("button",{type:"submit",className:"default-btn"},"Notify Me")))))))}}]),l}(l.Component);e.default=d}},[["grO0",0,1]]]);