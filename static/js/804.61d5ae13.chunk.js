(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[804],{76899:function(e,t,n){"use strict";n.d(t,{c:function(){return S}});var r=n(45987),a=n(71002),o=n(4942),i=n(72791),c=n(61002),s=n.n(c),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(s()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(l),o=null;null!==(o=a.exec(e));)if(o[0].trim())if(o[1]){var i=o[1].trim(),c=[i,""];i.indexOf("=")>-1&&(c=i.split("=")),t.attrs[c[0]]=c[1],a.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var u=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,f=/^\s*$/,d=Object.create(null);function m(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(m,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var h={parse:function(e,t){t||(t={}),t.components||(t.components=d);var n,r=[],a=[],o=-1,i=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(u,(function(c,s){if(i){if(c!=="</"+n.name+">")return;i=!1}var l,u="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),m=s+c.length,h=e.charAt(m);if(d){var v=p(c);return o<0?(r.push(v),r):((l=a[o]).children.push(v),r)}if(u&&(o++,"tag"===(n=p(c)).type&&t.components[n.name]&&(n.type="component",i=!0),n.voidElement||i||!h||"<"===h||n.children.push({type:"text",content:e.slice(m,e.indexOf("<",m))}),0===o&&r.push(n),(l=a[o-1])&&l.children.push(n),a[o]=n),(!u||n.voidElement)&&(o>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(o--,n=-1===o?r:a[o]),!i&&"<"!==h&&h)){l=-1===o?r:a[o].children;var y=e.indexOf("<",m),b=e.slice(m,-1===y?void 0:y);f.test(b)&&(b=" "),(y>-1&&o+l.length>=0||" "!==b)&&l.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+m("",t)}),"")}},v=h,y="".replace,b=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,g={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'};function O(e){return g[e]}var j=n(74909),E=n(81426),x=["format"],w=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function N(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function R(e){return Array.isArray(e)?e:[e]}function D(e,t){if(!e)return"";var n="",o=R(e),c=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return o.forEach((function(e,o){if("string"===typeof e)n+="".concat(e);else if(i.isValidElement(e)){var s=Object.keys(e.props).length,l=c.indexOf(e.type)>-1,p=e.props.children;if(!p&&l&&0===s)n+="<".concat(e.type,"/>");else if(p||l&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(o,"></").concat(o,">");else if(l&&1===s&&"string"===typeof p)n+="<".concat(e.type,">").concat(p,"</").concat(e.type,">");else{var u=D(p,t);n+="<".concat(o,">").concat(u,"</").concat(o,">")}else n+="<".concat(o,"></").concat(o,">")}else if(null===e)(0,E.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,a.Z)(e)){var f=e.format,d=(0,r.Z)(e,x),m=Object.keys(d);if(1===m.length){var h=f?"".concat(m[0],", ").concat(f):m[0];n+="{{".concat(h,"}}")}else(0,E.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else(0,E.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function K(e,t,n,r,o,c){if(""===t)return[];var s=r.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(s.join("|")).test(t);if(!e&&!l)return[t];var p={};!function e(t){R(t).forEach((function(t){"string"!==typeof t&&(Z(t)?e(N(t)):"object"!==(0,a.Z)(t)||i.isValidElement(t)||Object.assign(p,t))}))}(e);var u=v.parse("<0>".concat(t,"</0>")),f=P(P({},p),o);function d(e,t,n){var r=N(e),a=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return i.isValidElement(e)}))}(r)&&0===a.length?r:a}function m(e,t,n,r,a){e.dummy&&(e.children=t),n.push(i.cloneElement(e,P(P({},e.props),{},{key:r}),a?void 0:t))}function h(t,o,p){var u=R(t);return R(o).reduce((function(t,o,v){var g,j=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,f,n.language);if("tag"===o.type){var E=u[parseInt(o.name,10)];!E&&1===p.length&&p[0][o.name]&&(E=p[0][o.name]),E||(E={});var x=0!==Object.keys(o.attrs).length?function(e,t){var n=P({},t);return n.props=Object.assign(e.props,t.props),n}({props:o.attrs},E):E,w=i.isValidElement(x),k=w&&Z(o,!0)&&!o.voidElement,N=l&&"object"===(0,a.Z)(x)&&x.dummy&&!w,R="object"===(0,a.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"===typeof x){var D=n.services.interpolator.interpolate(x,f,n.language);t.push(D)}else if(Z(x)||k){m(x,d(x,o,p),t,v)}else if(N){var K=h(u,o.children,p);t.push(i.cloneElement(x,P(P({},x.props),{},{key:v}),K))}else if(Number.isNaN(parseFloat(o.name))){if(R)m(x,d(x,o,p),t,v,o.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(o.name)>-1)if(o.voidElement)t.push(i.createElement(o.name,{key:"".concat(o.name,"-").concat(v)}));else{var S=h(u,o.children,p);t.push(i.createElement(o.name,{key:"".concat(o.name,"-").concat(v)},S))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var A=h(u,o.children,p);t.push("<".concat(o.name,">").concat(A,"</").concat(o.name,">"))}}else if("object"!==(0,a.Z)(x)||w)1===o.children.length&&j?t.push(i.cloneElement(x,P(P({},x.props),{},{key:v}),j)):t.push(i.cloneElement(x,P(P({},x.props),{},{key:v})));else{var T=o.children[0]?j:null;T&&t.push(T)}}else if("text"===o.type){var V=r.transWrapTextNodes,B=c?(g=n.services.interpolator.interpolate(o.content,f,n.language),y.call(g,b,O)):n.services.interpolator.interpolate(o.content,f,n.language);V?t.push(i.createElement(V,{key:"".concat(o.name,"-").concat(v)},B)):t.push(B)}return t}),[])}return N(h([{dummy:!0,children:e||[]}],u,R(e||[]))[0])}function S(e){var t=e.children,n=e.count,a=e.parent,o=e.i18nKey,c=e.context,s=e.tOptions,l=void 0===s?{}:s,p=e.values,u=e.defaults,f=e.components,d=e.ns,m=e.i18n,h=e.t,v=e.shouldUnescape,y=(0,r.Z)(e,w),b=(0,i.useContext)(j.OO)||{},g=b.i18n,O=b.defaultNS,x=m||g||(0,j.nI)();if(!x)return(0,E.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var k=h||x.t.bind(x)||function(e){return e};c&&(l.context=c);var Z=P(P({},(0,j.JP)()),x.options&&x.options.react),N=d||k.ns||O||x.options&&x.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var R=u||D(t,Z)||Z.transEmptyNodeValue||o,S=Z.hashTransKey,A=o||(S?S(R):R),T=p?l.interpolation:{interpolation:P(P({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},V=P(P(P(P({},l),{},{count:n},p),T),{},{defaultValue:R,ns:N}),B=K(f||t,A?k(A,V):R,x,Z,V,v),H=void 0!==a?a:Z.defaultTransParent;return H?i.createElement(H,y,B):B}},86489:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(4942),a=n(70885),o=n(45987),i=n(72791),c=n(22020),s=n(81426),l=["forwardedRef"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var s=r.forwardedRef,p=(0,o.Z)(r,l),f=(0,c.$)(e,p),d=(0,a.Z)(f,3),m=d[0],h=d[1],v=d[2],y=u(u({},p),{},{t:m,i18n:h,tReady:v});return t.withRef&&s?y.ref=s:!t.withRef&&s&&(y.forwardedRef=s),i.createElement(n,y)}r.displayName="withI18nextTranslation(".concat((0,s.Gf)(n),")"),r.WrappedComponent=n;return t.withRef?i.forwardRef((function(e,t){return i.createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}},61002:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=804.61d5ae13.chunk.js.map