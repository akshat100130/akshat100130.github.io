(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jPax:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return Z}));var r,o=n("q1tI");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?h(e):t}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(r||(r={}));var b=r,E=function e(t){var n=this,r=t.expanded,o=void 0===r?[]:r,i=t.allowMultipleExpanded,c=void 0!==i&&i,d=t.allowZeroExpanded,u=void 0!==d&&d;a(this,e),l(this,"expanded",void 0),l(this,"allowMultipleExpanded",void 0),l(this,"allowZeroExpanded",void 0),l(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(g(n.expanded),[e]):[e]})})),l(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),l(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),l(this,"getPanelAttributes",(function(e){var t=n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!t:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!t||void 0}})),l(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),l(this,"getButtonAttributes",(function(e){var t=n.isItemExpanded(e),r=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":r,"aria-expanded":t,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),l(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),l(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),l(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=o,this.allowMultipleExpanded=c,this.allowZeroExpanded=u},v=Object(o.createContext)(null),x=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(o)))),"state",new E({expanded:n.props.preExpanded,allowMultipleExpanded:n.props.allowMultipleExpanded,allowZeroExpanded:n.props.allowZeroExpanded})),l(h(n),"toggleExpanded",(function(e){n.setState((function(t){return t.toggleExpanded(e)}),(function(){n.props.onChange&&n.props.onChange(n.state.expanded)}))})),l(h(n),"isItemDisabled",(function(e){return n.state.isItemDisabled(e)})),l(h(n),"isItemExpanded",(function(e){return n.state.isItemExpanded(e)})),l(h(n),"getPanelAttributes",(function(e){return n.state.getPanelAttributes(e)})),l(h(n),"getHeadingAttributes",(function(e){return n.state.getHeadingAttributes(e)})),l(h(n),"getButtonAttributes",(function(e){return n.state.getButtonAttributes(e)})),n}return u(t,e),c(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(o.createElement)(v.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(o.PureComponent);l(x,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var y=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(o)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return u(t,e),c(t,[{key:"render",value:function(){return Object(o.createElement)(v.Consumer,null,this.renderChildren)}}]),t}(o.PureComponent),w=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(i)))),"renderAccordion",(function(e){var t=n.props,r=(t.preExpanded,t.allowMultipleExpanded,t.allowZeroExpanded,t.onChange,f(t,["preExpanded","allowMultipleExpanded","allowZeroExpanded","onChange"]));return Object(o.createElement)("div",d({"data-accordion-component":"Accordion"},r))})),n}return u(t,e),c(t,[{key:"render",value:function(){return Object(o.createElement)(x,{preExpanded:this.props.preExpanded,allowMultipleExpanded:this.props.allowMultipleExpanded,allowZeroExpanded:this.props.allowZeroExpanded,onChange:this.props.onChange},Object(o.createElement)(y,null,this.renderAccordion))}}]),t}(o.Component);l(w,"defaultProps",{allowMultipleExpanded:void 0,allowZeroExpanded:void 0,onChange:void 0,className:"accordion",children:void 0}),l(w,"displayName",b.Accordion);var A=0,O=A;var I=Object(o.createContext)(null),P=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(i)))),"toggleExpanded",(function(){n.props.accordionContext.toggleExpanded(n.props.uuid)})),l(h(n),"renderChildren",(function(e){var t=n.props.uuid,r=e.isItemExpanded(t),a=e.isItemDisabled(t),i=e.getPanelAttributes(t),c=e.getHeadingAttributes(t),l=e.getButtonAttributes(t);return Object(o.createElement)(I.Provider,{value:{uuid:t,expanded:r,disabled:a,toggleExpanded:n.toggleExpanded,panelAttributes:i,headingAttributes:c,buttonAttributes:l},children:n.props.children})})),n}return u(t,e),c(t,[{key:"render",value:function(){return Object(o.createElement)(y,null,this.renderChildren)}}]),t}(o.Component),j=function(e){return Object(o.createElement)(y,null,(function(t){return Object(o.createElement)(P,d({},e,{accordionContext:t}))}))},C=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(o)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return u(t,e),c(t,[{key:"render",value:function(){return Object(o.createElement)(I.Consumer,null,this.renderChildren)}}]),t}(o.PureComponent),D=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(o)))),"instanceUuid",function(){var e=O;return O+=1,e}()),n}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.uuid,n=void 0===t?this.instanceUuid:t,r=f(e,["uuid"]);return Object(o.createElement)(j,{uuid:n},Object(o.createElement)("div",d({"data-accordion-component":"AccordionItem"},r)))}}]),t}(o.Component);function k(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}l(D,"defaultProps",{className:"accordion__item"}),l(D,"displayName",b.AccordionItem);var M={DOWN:"40",END:"35",ENTER:"13",HOME:"36",LEFT:"37",RIGHT:"39",SPACE:"32",UP:"38"},_=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(o)))),"handleKeyPress",(function(e){var t=e.which.toString();if(t!==M.ENTER&&t!==M.SPACE||(e.preventDefault(),n.props.toggleExpanded()),e.target instanceof HTMLElement)switch(t){case M.HOME:e.preventDefault(),function(e){var t=(k(e)||[])[0];t&&t.focus()}(e.target);break;case M.END:e.preventDefault(),function(e){var t=k(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case M.LEFT:case M.UP:e.preventDefault(),function(e){var t=k(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case M.RIGHT:case M.DOWN:e.preventDefault(),function(e){var t=k(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}})),n}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.toggleExpanded,n=f(e,["toggleExpanded"]);return Object(o.createElement)("div",d({},n,{onClick:t,onKeyDown:this.handleKeyPress,"data-accordion-component":"AccordionItemButton"}))}}]),t}(o.PureComponent);l(_,"defaultProps",{className:"accordion__button"});var B=function(e){return Object(o.createElement)(C,null,(function(t){var n=t.toggleExpanded,r=t.buttonAttributes;return Object(o.createElement)(_,d({toggleExpanded:n},e,r))}))};B.displayName=b.AccordionItemButton;var N=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(o)))),"ref",void 0),l(h(n),"setRef",(function(e){n.ref=e})),n}return u(t,e),c(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(o.createElement)("div",d({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),t}(o.PureComponent);l(N,"defaultProps",{className:"accordion__heading","aria-level":3});var T=function(e){return Object(o.createElement)(C,null,(function(t){var n=t.headingAttributes;return Object(o.createElement)(N,d({},e,n))}))};T.displayName=b.AccordionItemHeading;var Z=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return l(h(n=m(this,(e=p(t)).call.apply(e,[this].concat(i)))),"renderChildren",(function(e){var t=e.panelAttributes;return Object(o.createElement)("div",d({"data-accordion-component":"AccordionItemPanel"},n.props,t))})),n}return u(t,e),c(t,[{key:"render",value:function(){return Object(o.createElement)(C,null,this.renderChildren)}}]),t}(o.Component);l(Z,"defaultProps",{className:"accordion__panel"}),l(Z,"displayName",b.AccordionItemPanel);o.Component},xa8k:function(e,t){e.exports="/_next/static/images/faq-img-630f5b7079d98db3675ecb9b002bca45.png"}}]);