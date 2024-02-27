import{y as G,p as x,z as O,A as te,B as ne,g as T,C as oe,D as se,E as N,G as ie,r as E,f as h,H as X,I as V,J as ae,c as l,V as Y,u as P,K as U,L as le,M as re,N as ue,O as ce,F as B,P as de,a as I,Q as ve,R as $,S as me,T as fe,U as he,W as ge,X as we,Y as ye,Z as be,_ as ke,$ as _e,a0 as C,o as k,i as S,w as _,n as W,j as L}from"./index-48907fd5.js";import{u as Ve}from"./ssrBoot-65c018eb.js";const Be=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,i=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function Ie(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ce(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),Be(o)}function xe(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Te(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ie(t,o),touchend:t=>Ce(t,o),touchmove:t=>xe(t,o)}}function Pe(e,o){var d;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},i=(d=o.instance)==null?void 0:d.$.uid;if(!n||!i)return;const s=Te(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[i]=s,G(s).forEach(r=>{n.addEventListener(r,s[r],a)})}function Se(e,o){var i,s;const t=(i=o.value)!=null&&i.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];G(a).forEach(d=>{t.removeEventListener(d,a[d])}),delete t._touchHandlers[n]}const q={mounted:Pe,unmounted:Se},J=Symbol.for("vuetify:v-window"),K=Symbol.for("vuetify:v-window-group"),Q=x({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...O(),...te(),...ne()},"VWindow"),A=T()({name:"VWindow",directives:{Touch:q},props:Q(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=oe(e),{isRtl:a}=se(),{t:i}=N(),s=ie(e,K),d=E(),r=h(()=>a.value?!e.reverse:e.reverse),v=X(!1),y=h(()=>{const c=e.direction==="vertical"?"y":"x",w=(r.value?!v.value:v.value)?"-reverse":"";return`v-window-${c}${w}-transition`}),f=X(0),g=E(void 0),b=h(()=>s.items.value.findIndex(c=>s.selected.value.includes(c.id)));V(b,(c,m)=>{const w=s.items.value.length,R=w-1;w<=2?v.value=c<m:c===R&&m===0?v.value=!0:c===0&&m===R?v.value=!1:v.value=c<m}),ae(J,{transition:y,isReversed:v,transitionCount:f,transitionHeight:g,rootRef:d});const u=h(()=>e.continuous||b.value!==0),j=h(()=>e.continuous||b.value!==s.items.value.length-1);function H(){u.value&&s.prev()}function D(){j.value&&s.next()}const p=h(()=>{const c=[],m={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,"aria-label":i("$vuetify.carousel.prev")};c.push(u.value?t.prev?t.prev({props:m}):l(Y,m,null):l("div",null,null));const w={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,"aria-label":i("$vuetify.carousel.next")};return c.push(j.value?t.next?t.next({props:w}):l(Y,w,null):l("div",null,null)),c}),ee=h(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?H():D()},right:()=>{r.value?D():H()},start:m=>{let{originalEvent:w}=m;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return P(()=>U(l(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var c,m;return[l("div",{class:"v-window__container",style:{height:g.value}},[(c=t.default)==null?void 0:c.call(t,{group:s}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[p.value])]),(m=t.additional)==null?void 0:m.call(t,{group:s})]}}),[[le("touch"),ee.value]])),{group:s}}}),Ee=x({color:String,cycle:Boolean,delimiterIcon:{type:re,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Q({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),M=T()({name:"VCarousel",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=ue(e,"modelValue"),{t:a}=N(),i=E();let s=-1;V(n,r),V(()=>e.interval,r),V(()=>e.cycle,v=>{v?r():window.clearTimeout(s)}),ce(d);function d(){!e.cycle||!i.value||(s=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(s),window.requestAnimationFrame(d)}return P(()=>{const v=A.filterProps(e);return l(A,I({ref:i},v,{modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:$(e.height)},e.style]}),{default:t.default,additional:y=>{let{group:f}=y;return l(B,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[f.items.value.length>0&&l(de,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[f.items.value.map((g,b)=>{const u={id:`carousel-item-${g.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",b+1,f.items.value.length),class:["v-carousel__controls__item",f.isSelected(g.id)&&"v-btn--active"],onClick:()=>f.select(g.id,!0)};return t.item?t.item({props:u,item:g}):l(Y,I(g,u),null)})]})]),e.progress&&l(ve,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(f.getItemIndex(n.value)+1)/f.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),Z=x({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...O(),...me(),...fe()},"VWindowItem"),z=T()({name:"VWindowItem",directives:{Touch:q},props:Z(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=he(J),a=ge(e,K),{isBooted:i}=Ve();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=X(!1),d=h(()=>i.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function v(){var u;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=$((u=n.rootRef.value)==null?void 0:u.clientHeight)),n.transitionCount.value+=1)}function y(){r()}function f(u){s.value&&ke(()=>{!d.value||!s.value||!n||(n.transitionHeight.value=$(u.clientHeight))})}const g=h(()=>{const u=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof u!="string"?n.transition.value:u,onBeforeEnter:v,onAfterEnter:r,onEnterCancelled:y,onBeforeLeave:v,onAfterLeave:r,onLeaveCancelled:y,onEnter:f}:!1}),{hasContent:b}=we(e,a.isSelected);return P(()=>l(be,{transition:g.value,disabled:!i.value},{default:()=>{var u;return[U(l("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[b.value&&((u=t.default)==null?void 0:u.call(t))]),[[ye,a.isSelected.value]])]}})),{groupItem:a}}}),Xe=x({..._e(),...Z()},"VCarouselItem"),F=T()({name:"VCarouselItem",inheritAttrs:!1,props:Xe(),setup(e,o){let{slots:t,attrs:n}=o;P(()=>{const a=C.filterProps(e),i=z.filterProps(e);return l(z,I({class:"v-carousel-item"},i),{default:()=>[l(C,I(n,a),t)]})})}}),je={__name:"HomeView",setup(e){const o=h(()=>[{title:"dunk-green",to:"/products/nike",src:"https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nike/dunk-green.jpg"},{title:"dunk-pink",to:"/products/nike",src:"https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nike/dunk-pink.jpg"},{title:"zoom-vomero5",to:"/products/nike",src:"https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nike/zoom-vomero-5.jpg"}]),t=h(()=>[{title:"990nb3",to:"/products/newBalance",src:"https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nb/990nb3.webp"},{title:"990nv6",to:"/products/newBalance",src:"https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nb/990nv6.webp"},{title:"990tg4",to:"/products/newBalance",src:"https://raw.githubusercontent.com/homeroom83/project-front/main/src/assets/nb/990tg4.webp"}]);return(n,a)=>(k(),S(B,null,[l(M,{"hide-delimiter-background":"",cycle:"","show-arrows":"hover",interval:"3000"},{default:_(()=>[(k(!0),S(B,null,W(o.value,i=>(k(),L(F,{key:i.src},{default:_(()=>[l(C,{src:i.src},null,8,["src"])]),_:2},1024))),128))]),_:1}),l(M,{"hide-delimiter-background":"",cycle:"","show-arrows":"hover",interval:"3000"},{default:_(()=>[(k(!0),S(B,null,W(t.value,i=>(k(),L(F,{key:i.src},{default:_(()=>[l(C,{src:i.src},null,8,["src"])]),_:2},1024))),128))]),_:1})],64))}};export{je as default};
