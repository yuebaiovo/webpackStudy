!function(e){function n(n){for(var t,c,u=n[0],a=n[1],s=n[3]||[],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(l&&l(n),s.forEach((function(e){if(void 0===r[e]){r[e]=null;var n=document.createElement("link");i.nc&&n.setAttribute("nonce",i.nc),n.rel="prefetch",n.as="script",n.href=o(e),document.head.appendChild(n)}}));d.length;)d.shift()()}var t={},r={0:0};function o(e){return i.p+"js/"+({1:"test"}[e]||e)+"."+{1:"8fee4c823b"}[e]+".js"}function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=c);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=o(e);var l=new Error;u=function(n){a.onerror=a.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,t[1](l)}r[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var l=u,s=i(i.s=0);n([[],{},0,[1]])}([function(e,n,t){console.log("index.js文件被加载了"),document.getElementById("btn").onclick=function(){t.e(1).then(t.bind(null,1)).then(({mul:e})=>{console.log(e(4,5))})},"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./service-worker.js").then(()=>{console.log("sw注册成功了")}).catch(()=>{console.log("sw注册失败了")})})}]);