(()=>{"use strict";var n={299:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"#about-container {\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    /* animation: fade-down 0.5s; */\n}\n\n@keyframes hue {\n    from {\n      -webkit-filter: hue-rotate(0deg);\n    }\n    to {\n      -webkit-filter: hue-rotate(-360deg);\n    }\n}\n\n#about-container a {\n    text-decoration: none;\n    font-weight: 700;\n    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);\n\tbackground-clip: text;\n\t-webkit-text-fill-color: transparent;\n\tanimation: hue 4s infinite linear;\n}\n\n#about-container p {\n    padding: 1rem;\n    width: 75%;\n    text-align: center;\n    font-size: 1.5rem;\n}\n\n#about-container p:nth-of-type(2) {\n    /* border: 1px solid green; */\n    font-size: 1rem;\n    width: 50%;\n    padding-bottom: 9rem;\n\n}\n\n#source-code {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    bottom: 0;\n    padding: 1rem;\n    font-size: 0.75rem;\n}\n\nimg {\n    width: 28px;\n}\n",""]);const s=i},544:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"#home-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    /* border: 1px solid palegoldenrod; */\n    flex-grow: 1;\n}\n\n#home-container img {\n    width: 384px;\n    transition: all 200ms ease-in-out;\n}\n\n#home-container img:hover {\n    transform: scale(1.05);\n    -webkit-filter: drop-shadow(5px 5px 5px rgba(128, 128, 128, 0.6));\n    filter: drop-shadow(5px 5px 5px rgba(128, 128, 128, 0.6));\n}\n\n#banner {\n    width: 40%;\n    /* border: 1px solid palegreen; */\n}\n\n#banner h1 {\n    font-family: 'Cafe';\n    font-size: 3.75rem;\n}\n\n#banner button {\n    border: 2px solid var(--amber);\n    background-color: var(--amber);\n    color: var(--neutral-dark);\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    font-weight: 600;\n    border-radius: 0.375rem;\n    margin-top: 1.5rem;\n    cursor: pointer;\n    transition-duration: 500ms;\n}\n\n#banner button:hover {\n    background-color: transparent;\n    color: var(--amber);\n}\n\n@media (max-width: 1024px) {\n    #home-container {\n        justify-content: center;\n    }\n    #home-container img {\n        display: none;\n    }\n}",""]);const s=i},452:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(500),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"#menu-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    gap: 2rem;\n    padding: 1rem;\n}\n\n.item-container {\n    justify-self: center;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    width: 384px;\n    border-radius: 1rem;\n    background-color: rgba(38, 38, 38, 0.8);\n    transition: all 300ms ease-in-out;\n    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));\n    /* border: 1px solid yellow; */\n}\n\n.item-container:hover {\n    background-color: rgba(64, 64, 64, 0.8);\n    transform: scale(1.05);\n    filter: drop-shadow(0 25px 25px rgb(128 128 128 / 0.15));\n}\n\n.item-container div {\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1;\n    align-items: center;\n    padding: 1rem;\n}\n\n.item-container div:first-child {\n    gap: 0.875rem;\n}\n\n.item-container div:last-child {\n    font-size: 1.125rem;\n}\n\n.item-container div:last-child h2 {\n    font-family: 'Cafe';\n    color: var(--amber);\n}\n\n.item-container img {\n    width: 208px;\n    -webkit-filter: drop-shadow(5px 5px 5px #222);\n    filter: drop-shadow(5px 5px 5px #222);\n}",""]);const s=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{t.p;var n=t(596),e=t.n(n),r=t(520),o=t.n(r),a=t(176),i=t.n(a),s=t(120),c=t.n(s),d=t(808),l=t.n(d),p=t(936),u=t.n(p),f=t(544),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.c,m),f.c&&f.c.locals&&f.c.locals,t.p,t.p,t.p,t.p,t.p,t.p;var h=t(452),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(h.c,g),h.c&&h.c.locals&&h.c.locals;const b=t.p+"4d066fdc2c02d2a2f06d.png";var v=t(299),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),e()(v.c,x),v.c&&v.c.locals&&v.c.locals,console.log("here"),document.querySelector("#content").appendChild(function(){const n=document.createElement("div");n.setAttribute("id","about-container");const e=document.createElement("p");e.innerHTML='This webpage serves as a project assignment submission for the <a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page">Restaurant Page of The Odin Project\'s JavaScript course</a>. The purpose of the creation this webpage is to exercise writing organized code utilizing ES6 modules and Webpack.',n.appendChild(e);const t=document.createElement("p");t.textContent=" Please note that this website is not real and was created solely for educational purposes. All images used on the webpage are not mine and are credited to their respective owners.",n.appendChild(t);const r=document.createElement("a");r.setAttribute("id","source-code"),r.text="jnssvdl",r.href="https://github.com/jnssvdl/restaurant-page",n.appendChild(r);const o=new Image;return o.src=b,r.appendChild(o),n}())})()})();