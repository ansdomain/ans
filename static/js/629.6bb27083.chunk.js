"use strict";(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[629],{27627:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(70885),i=t(30168),r=t(62409),o=(t(72791),t(84376)),s=t(2079),c=t(42982),l=(t(87757),t(76909)),u=(t(2594),t(2686),t(6875),t(31899),t(66723),t(80184)),d=(0,r.Z)("svg",{target:"ega1tsj0"})("vertical-align:middle;path{fill:",(function(e){return e.active?"#C7D3E3":"none"}),";stroke:",(function(e){return e.active?"#C7D3E3":"E7E7E7"}),";transition:0.2s ease-in;}&:hover{path{fill:#c7d3e3;stroke:#c7d3e3;}}"),v=function(e){var n=e.active,t=e.className;return(0,u.jsx)(d,{width:"25",height:"24",className:t,active:n,children:(0,u.jsx)("path",{d:"M10.555 2.695C8.47.436 5.123.437 3.038 2.695l-.2.216c-2.45 2.654-2.45 6.991-.001 9.644l9.62 10.42c.03.034.054.034.086 0l9.619-10.42c2.451-2.654 2.45-6.988-.002-9.644l-.2-.216c-2.086-2.26-5.43-2.26-7.517 0l-.817.884a1.525 1.525 0 0 1-2.253 0l-.818-.884z",stroke:"#E7E7E7",strokeWidth:"2",fill:"none",fillRule:"evenodd"})})};var f,m,p,h,x=(0,r.Z)("svg",{target:"eyzzej0"})({name:"clf9oj",styles:"vertical-align:middle;path{fill:#0b93d8;stroke:#0b93d8;transition:0.2s ease-out;}&:hover{path{fill:none;stroke:#e7e7e7;}}"}),g=function(e){var n=e.active,t=e.className;return(0,u.jsx)(x,{width:"25",height:"24",active:n,className:t,children:(0,u.jsx)("path",{d:"M10.555 2.695C8.47.436 5.123.437 3.038 2.695l-.2.216c-2.45 2.654-2.45 6.991-.001 9.644l9.62 10.42c.03.034.054.034.086 0l9.619-10.42c2.451-2.654 2.45-6.988-.002-9.644l-.2-.216c-2.086-2.26-5.43-2.26-7.517 0l-.817.884a1.525 1.525 0 0 1-2.253 0l-.818-.884z",stroke:"#E7E7E7",strokeWidth:"2",fill:"none",fillRule:"evenodd"})})};var w=(0,r.Z)(g,{target:"epvce7y0"})({name:"1p3qk0r",styles:"&:hover{cursor:pointer;}"}),j=(0,r.Z)(v,{target:"epvce7y1"})({name:"1p3qk0r",styles:"&:hover{cursor:pointer;}"}),D=(0,s.Ps)(f||(f=(0,i.Z)(["\n  mutation AddFavouriteMutation($domain: Domain) {\n    addFavourite(domain: $domain) @client\n  }\n"]))),y=(0,s.Ps)(m||(m=(0,i.Z)(["\n  mutation AddSubDomainFavourite($domain: Domain) {\n    addSubDomainFavourite(domain: $domain) @client\n  }\n"]))),Z=(0,s.Ps)(p||(p=(0,i.Z)(["\n  mutation DeleteFavouriteMutation($domain: Domain) {\n    deleteFavourite(domain: $domain) @client\n  }\n"]))),k=(0,s.Ps)(h||(h=(0,i.Z)(["\n  mutation DeleteSubDomainFavourite($domain: Domain) {\n    deleteSubDomainFavourite(domain: $domain) @client\n  }\n"]))),b=(0,r.Z)("div",{target:"epvce7y2"})({name:"1g360fb",styles:"padding:5px;"}),N=function(e){var n=e.domain,t=e.isFavourite,i=e.isSubDomain,r=(0,o.D)(t?k:y,{variables:{domain:{name:n.name}}}),s=(0,a.Z)(r,1)[0],d=(0,o.D)(t?Z:D,{variables:{domain:{name:n.name}}}),v=(0,a.Z)(d,1)[0];return i?(0,u.jsx)(b,{"data-testid":"add-favorite",onClick:function(e){e.preventDefault(),t?function(e){var n=(0,l.jm)().filter((function(n){return n.name!==e.name}));window.localStorage.setItem("ensSubDomainFavourites",JSON.stringify(n))}(n):function(e){var n=[].concat((0,c.Z)((0,l.jm)()),[e]);window.localStorage.setItem("ensSubDomainFavourites",JSON.stringify(n)),(0,l.jm)(n)}(n),s()},children:t?(0,u.jsx)(w,{}):(0,u.jsx)(j,{})}):(0,u.jsx)(b,{"data-testid":"add-favorite",onClick:function(e){e.preventDefault(),t?function(e){var n=(0,l.dD)().filter((function(n){return n.name!==e.name}));window.localStorage.setItem("ensFavourites",JSON.stringify(n)),(0,l.dD)(n)}(n):function(e){var n=[].concat((0,c.Z)((0,l.dD)()),[e]);window.localStorage.setItem("ensFavourites",JSON.stringify(n)),(0,l.dD)(n)}(n),v()},children:t?(0,u.jsx)(w,{}):(0,u.jsx)(j,{})})}},7928:function(e,n,t){var a=t(62409),i=(t(72791),t(22020)),r=t(17711),o=t(80184),s=(0,a.Z)("p",{target:"erk1q1g0"})("font-size:18px;font-weight:100;color:",(function(e){return e.isExpiredSoon?"red":"#fff"}),";");n.Z=function(e){var n,t,a,c,l,u,d,v=e.expiryDate,f=(e.domain,e.name),m=(0,i.$)().t,p=new Date;return v?(n=(0,r.on)(v),t=p>new Date(parseInt(1e3*v)),a=new Date(1e3*(parseInt(v)+r.Nu)),u=new Date(1e3*(parseInt(v)+r.Nu+r.Ru)),t?(c=!(l=p<a)&&p<u,l?d="".concat(m("singleName.expiry.gracePeriodEnds")," ").concat((0,r.p6)(a)):c&&(d=m("singleName.expiry.isUnderPremiumSale"))):d="".concat(m("c.expires")," ").concat((0,r.p6)(parseInt(1e3*v))),(0,o.jsx)(s,{"data-testid":"expiry-date-".concat(f),isExpiredSoon:n,children:d})):(0,o.jsx)("span",{children:"\xa0"})}},86013:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(70885),i=t(62409),r=t(72791),o=t(80184),s=function(e){return e.active?"#5284FF":"#B0BECF"},c=(0,i.Z)("div",{target:"e1qon68v0"})("display:flex;justify-content:center;align-items:center;height:23px;width:23px;border-radius:5px;border:2px solid ",s,";"),l=(0,i.Z)("div",{target:"e1qon68v1"})("display:flex;justify-content:center;align-items:center;height:20px;width:20px;border-radius:3px;box-shadow:0 0 0 2px ",s,",-5px -5px 0 0 white,-5px -5px 0 2px ",s,";"),u=(0,i.Z)("svg",{target:"e1qon68v2"})("margin-top:2px;path{fill:",s,";opacity:",(function(e){return e.active||e.hover?"1":"0"}),";}"),d=function(e){var n=e.active,t=e.className,a=e.hover;return(0,o.jsx)(c,{className:t,active:n,children:(0,o.jsx)(u,{width:"11",height:"8",xmlns:"http://www.w3.org/2000/svg",active:n,hover:a,children:(0,o.jsx)("path",{d:"M9.63 0L4.537 5.202 1.37 1.967 0 3.367 4.537 8 11 1.399z",fillRule:"evenodd"})})})},v=function(e){var n=e.active,t=e.className,a=e.hover;return(0,o.jsx)(l,{className:t,active:n,children:(0,o.jsx)(u,{width:"11",height:"8",xmlns:"http://www.w3.org/2000/svg",active:n,hover:a,children:(0,o.jsx)("path",{d:"M9.63 0L4.537 5.202 1.37 1.967 0 3.367 4.537 8 11 1.399z",fillRule:"evenodd"})})})};var f=(0,i.Z)("div",{target:"ejg6m870"})({name:"1kdw2nx",styles:"align-self:center;input{display:none;}label{font-size:22px;font-weight:200;color:#5f5f5f;text-transform:capitalize;display:flex;justify-content:flex-start;align-items:center;&:hover{cursor:pointer;}}"});var m=function(e){var n=e.className,t=e.onClick,i=e.checked,s=e.name,c=e.children,l=e.testid,u=e.type,m=void 0===u?"normal":u,p=(0,r.useState)(!1),h=(0,a.Z)(p,2),x=h[0],g=h[1];return(0,o.jsxs)(f,{"data-testid":l,className:n,onClick:t,children:[(0,o.jsxs)("label",{htmlFor:s,onMouseOver:function(){return g(!0)},onMouseOut:function(){return g(!1)},children:["double"===m?(0,o.jsx)(v,{active:!!i,hover:x}):(0,o.jsx)(d,{active:!!i,hover:x}),(0,o.jsx)("span",{children:c})]}),(0,o.jsx)("input",{type:"checkbox",name:s,checked:i,readOnly:!0})]})}},42642:function(e,n,t){t.d(n,{m:function(){return s}});var a,i=t(30168),r=t(52336),o=(0,t(2079).Ps)(a||(a=(0,i.Z)(["\n  query getAccounts @client {\n    accounts\n  }\n"])));function s(){var e=(0,r.a)(o).data.accounts;return e?e[0]:"0x0000000000000000000000000000000000000000"}},17711:function(e,n,t){t.d(n,{Nu:function(){return r},Ru:function(){return o},dM:function(){return l},o6:function(){return u},on:function(){return c},p6:function(){return s}});var a=t(72426),i=t.n(a),r=7776e3,o=1814400;function s(e,n){var t=i()(e).format("YYYY.MM.DD");return n||(t=t+" at "+i()(e).format("HH:mm (UTCZ)")),t}function c(e){if(!e)return e;var n=(new Date).getTime();return(new Date(1e3*e).getTime()-n)/864e5<30}var l=31556952;function u(e){return parseInt(parseFloat(e)*l)}}}]);
//# sourceMappingURL=629.6bb27083.chunk.js.map