(this.webpackJsonpgreensight=this.webpackJsonpgreensight||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),o=a(24),i=a(9),s=a(10),u=a(12),m=a(11),b=a(5),d=(a(31),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-container"},this.props.children)}}]),a}(n.Component)),p=a(1),v=a(21),f=a.n(v);a(32);var h=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(p.a)(r,2),i=o[0],s=o[1],u=Object(n.useState)(null),m=Object(p.a)(u,2),b=m[0],d=m[1],v=Object(n.useState)(null),h=Object(p.a)(v,2),E=h[0],g=h[1],O=Object(n.useState)(!1),j=Object(p.a)(O,2),N=j[0],y=j[1],w=Object(n.useState)(!1),S=Object(p.a)(w,2),k=S[0],C=S[1],F=Object(n.useState)(!1),_=Object(p.a)(F,2),W=_[0],x=_[1],I=Object(n.useState)(!1),z=Object(p.a)(I,2),B=z[0],L=z[1],R=[],T=Object(n.useState)(!1),$=Object(p.a)(T,2),A=$[0],D=$[1],G=Object(n.useRef)(null),J=Object(n.useState)("input"),M=Object(p.a)(J,2),H=M[0],U=M[1],q=Object(n.useState)("input"),K=Object(p.a)(q,2),P=K[0],Q=K[1],V=Object(n.useState)("input"),X=Object(p.a)(V,2),Y=X[0],Z=X[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-container"},l.a.createElement("form",null,l.a.createElement("div",{className:"div-input-left display-mobile"},l.a.createElement("label",{className:"input-label",htmlFor:"name"},"\u0424\u0418\u041e",l.a.createElement("input",{id:"name",onChange:function(e){c(e.target.value)},className:H,placeholder:"\u0422\u043e\u043b\u044c\u043a\u043e \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0430"})),N?l.a.createElement("label",{className:"label-error"},'\u0424\u0418\u041e \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, "\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447"'):null),l.a.createElement("div",{className:"div-input-right display-mobile"},l.a.createElement("label",{className:"input-label",htmlFor:"phone"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",l.a.createElement(f.a,{id:"phone",mask:["+","7","(",/[0-9]/,/[0-9]/,/[0-9]/,")"," ",/[0-9]/,/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/,"-",/[0-9]/,/[0-9]/],className:P,placeholder:"+7(___) ___-__-__",onChange:function(e){s(e.target.value)}})),k?l.a.createElement("label",{className:"label-error"},'\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0435\u0432\u0435\u0440\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, "+7(000) 000-00-00"'):null),l.a.createElement("div",{className:"div-input"},l.a.createElement("label",{className:"input-label",htmlFor:"address"},"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",l.a.createElement("input",{id:"address",onChange:function(e){d(e.target.value)},className:Y,placeholder:"\u0413\u043e\u0440\u043e\u0434, \u0443\u043b\u0438\u0446\u0430, \u0434\u043e\u043c"})),W?l.a.createElement("label",{className:"label-error"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"):null),l.a.createElement("div",{className:"div-input-last"},l.a.createElement("label",{className:"input-label",htmlFor:"comment"},"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",l.a.createElement("textarea",{id:"comment",onChange:function(e){g(e.target.value)},className:"input",rows:4})),B?l.a.createElement("label",{className:"label-error"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"):null),l.a.createElement("div",{className:"div-confirm-button div-align"},l.a.createElement("button",{onClick:function(e){R=[],null!==a&&null!==a.match(/^[\u0430-\u044f\u0410-\u042f-]+[\u0430-\u044f\u0410-\u042f\s-]+[\u0430-\u044f\u0410-\u042f-]$/)?(R.push(!0),y(!1),U("input")):(R.push(!1),y(!0),U("input-error")),null!==i&&null!==i.match(/\+7+\([0-9]{3}\)+\s+[0-9]{3}-[0-9]{2}-[0-9]{2}$/)?(R.push(!0),C(!1),Q("input")):(R.push(!1),C(!0),Q("input-error")),null!==b&&""!==b?(R.push(!0),x(!1),Z("input")):(R.push(!1),x(!0),Z("input-error")),null!==E&&""!==E?(R.push(!0),L(!1)):(R.push(!1),L(!0)),R.includes(!1)||(D(!0),G.current.style="background-color: #EDEEEF; color: #999999;",setTimeout((function(){return alert("\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!")}),1e3))},type:"button",className:"confirm-button width-button",ref:G,disabled:A},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437")))))},E=a(13);a(33);var g=function(){for(var e=2138052075270898e-20,t=15,a=[[55.981513,37.162149],[55.984904,37.152149]],c=0,r=0,o=0;o<a.length;o++)c+=a[o][0],r+=a[o][1];for(var i={center:[c/a.length,r/a.length],zoom:5},s=[];1!==t&&(a.map((function(t){(document.body.clientWidth-160)*e>Math.abs(t[1]-i.center[1])&&350*e>Math.abs(t[0]-i.center[0])?s.push(!0):s.push(!1)})),s.includes(!1));)t--,e*=2,s=[];var u=Object(n.useState)(null),m=Object(p.a)(u,2),b=m[0],d=m[1],v=Object(n.useState)(!1),f=Object(p.a)(v,2),h=f[0],g=f[1],O=Object(n.useState)(!1),j=Object(p.a)(O,2),N=j[0],y=j[1],w=Object(n.useRef)(null);i.zoom=t;var S=Object(n.useState)(!1),k=Object(p.a)(S,2);return k[0],k[1],l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-container"},l.a.createElement("form",{className:"form-radio"},l.a.createElement("div",{className:"div-input-left-radio display-mobile"},l.a.createElement("input",{onChange:function(e){d(e.target.value)},id:"point1",type:"radio",name:"pointOfOrders",value:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 1"}),l.a.createElement("label",{htmlFor:"point1",className:"label-orders display-label"},"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 1")),l.a.createElement("div",{className:"div-input-right-radio display-mobile"},l.a.createElement("input",{onChange:function(e){d(e.target.value)},id:"point2",type:"radio",name:"pointOfOrders",value:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 2"}),l.a.createElement("label",{htmlFor:"point2",className:"label-orders display-label"},"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 2")),h?l.a.createElement("label",{className:"label-error"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"):null),l.a.createElement("div",{className:"div-input-last"},l.a.createElement(E.c,null,l.a.createElement(E.a,{width:"100%",height:400,defaultState:i},a.map((function(e){return l.a.createElement(E.b,{geometry:e,properties:{hintContent:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438",iconCaption:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"},options:{iconLayout:"default#image",iconImageHref:"icon/geo.png",iconImageSize:[33,39],iconImageOffset:[-17,-39]}})}))))),l.a.createElement("div",{className:"div-confirm-button div-align"},l.a.createElement("button",{onClick:function(e){null!==b?(y(!0),g(!1),w.current.style="background-color: #EDEEEF; color: #999999;",setTimeout((function(){return alert("\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!")}),1e3)):g(!0)},className:"confirm-button width-button",ref:w,disabled:N},"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"))))};a(34);function O(){var e=Object(n.useState)("nav-buttons-active display-nav-buttons"),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("nav-buttons display-nav-buttons"),o=Object(p.a)(r,2),i=o[0],s=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"div-delivery container-padding"},l.a.createElement("div",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),l.a.createElement("div",{onClick:function(){"nav-buttons display-nav-buttons"===a&&(c("nav-buttons-active display-nav-buttons"),s("nav-buttons display-nav-buttons"))},className:a},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),l.a.createElement("div",{onClick:function(){"nav-buttons display-nav-buttons"===i&&(s("nav-buttons-active display-nav-buttons"),c("nav-buttons display-nav-buttons"))},className:i},"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"),"nav-buttons-active display-nav-buttons"===a?l.a.createElement(h,null):l.a.createElement(g,null)))}a(35);var j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d,null,l.a.createElement(b.a,{exact:!0,path:"/",component:O}))}}]),a}(n.Component);j.displayName=j.name;var N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=document.getElementsByTagName("base")[0].getAttribute("href"),S=document.getElementById("root");r.a.render(l.a.createElement(o.a,{basename:w},l.a.createElement(j,null)),S),function(){if("serviceWorker"in navigator){if(new URL("/Greensight",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Greensight","/service-worker.js");N?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.4082ca62.chunk.js.map