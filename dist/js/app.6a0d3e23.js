(function(){"use strict";var t={4908:function(t,n,s){var i=s(9242),e=s(3396);const r=(0,e._)("div",{class:"block1"},null,-1),o=(0,e._)("div",{class:"block2"},null,-1);function a(t,n,s,i,a,c){const l=(0,e.up)("Carousel");return(0,e.wg)(),(0,e.iD)("div",null,[r,(0,e.Wm)(l),o])}var c=s(7139);const l={class:"main"},u={class:"container"},h={class:"carousel"},p=(0,e._)("div",{class:"cerved-up"},null,-1),d=["onClick"],f=["src"],v=(0,e._)("div",{class:"cerved-down"},null,-1);function m(t,n,s,i,r,o){return(0,e.wg)(),(0,e.iD)("div",l,[(0,e._)("div",u,[(0,e._)("div",h,[p,(0,e._)("div",{class:"inner",ref:"inner",style:(0,c.j5)(r.innerStyles)},[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.cards,(t=>((0,e.wg)(),(0,e.iD)("div",{class:"card",key:t,onClick:n=>o.getSrc(t)},[(0,e._)("img",{src:t,alt:"img"},null,8,f)],8,d)))),128))],4),v,(0,e._)("button",{class:"btn-prev",onClick:n[0]||(n[0]=(...t)=>o.prev&&o.prev(...t))}),(0,e._)("button",{class:"btn-next",onClick:n[1]||(n[1]=(...t)=>o.next&&o.next(...t))})])]),(0,e._)("div",{class:(0,c.C_)(r.list)},[(0,e._)("ol",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.selectedImg,(t=>((0,e.wg)(),(0,e.iD)("li",{key:t},(0,c.zw)(t),1)))),128))])],2)])}s(7658),s(541);var g={name:"CarouseL",data(){return{cards:["https://picsum.photos/id/237/640/370","https://picsum.photos/id/238/640/370","https://picsum.photos/id/239/640/370","https://picsum.photos/id/231/640/370","https://picsum.photos/id/232/640/370","https://picsum.photos/id/233/640/370","https://picsum.photos/id/234/640/370","https://picsum.photos/id/235/640/370","https://picsum.photos/id/236/640/370"],innerStyles:{},selectedImg:[],step:"",transitioning:!1,list:""}},mounted(){this.setStep(),this.resetTranslate()},methods:{setStep(){const t=this.$refs.inner.scrollWidth,n=this.cards.length;this.step=t/n+"px"},next(){this.transitioning||(this.transitioning=!0,this.moveLeft(),this.afterTransition((()=>{const t=this.cards.shift();this.cards.push(t),this.resetTranslate(),this.transitioning=!1})))},prev(){this.transitioning||(this.transitioning=!0,this.moveRight(),this.afterTransition((()=>{const t=this.cards.pop();this.cards.unshift(t),this.resetTranslate(),this.transitioning=!1})))},moveLeft(){this.innerStyles={transform:`translateX(-${this.step})\n                        translateX(-${this.step})`}},moveRight(){this.innerStyles={transform:`translateX(${this.step})\n                        translateX(-${this.step})`}},afterTransition(t){const n=()=>{t(),this.$refs.inner.removeEventListener("transitionend",n)};this.$refs.inner.addEventListener("transitionend",n)},resetTranslate(){this.innerStyles={transition:"none",transform:`translateX(-${this.step})`}},getSrc(t){this.selectedImg.push(t),this.list="list"}}},b=s(89);const w=(0,b.Z)(g,[["render",m]]);var y=w,_={name:"App",components:{Carousel:y}};const k=(0,b.Z)(_,[["render",a]]);var O=k;(0,i.ri)(O).mount("#app")}},n={};function s(i){var e=n[i];if(void 0!==e)return e.exports;var r=n[i]={exports:{}};return t[i](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(n,i,e,r){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],e=t[u][1],r=t[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(a=!1,r<o&&(o=r));if(a){t.splice(u--,1);var l=e();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,e,r]}}(),function(){s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,{a:n}),n}}(),function(){s.d=function(t,n){for(var i in n)s.o(n,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};s.O.j=function(n){return 0===t[n]};var n=function(n,i){var e,r,o=i[0],a=i[1],c=i[2],l=0;if(o.some((function(n){return 0!==t[n]}))){for(e in a)s.o(a,e)&&(s.m[e]=a[e]);if(c)var u=c(s)}for(n&&n(i);l<o.length;l++)r=o[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},i=self["webpackChunkcarousel"]=self["webpackChunkcarousel"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(4908)}));i=s.O(i)})();
//# sourceMappingURL=app.6a0d3e23.js.map