import{p as B,B as w,C as R,g as k,u as P,c as n,H as D,I as z,J as F,K as O,L as Y,M as N,N as q,O as J,P as K,Q,R as W,S,f as i,T as X,U as Z,W as I,X as p,Y as j,r as E,Z as G,$ as C,a0 as ee,a1 as ae,a2 as te,a3 as le,a4 as oe,a5 as ne,a as H,a6 as se,a7 as re}from"./index-d4a8f114.js";import{u as M}from"./VContainer-7078b7a0.js";const L=B({text:String,...w(),...R()},"VToolbarTitle"),U=k()({name:"VToolbarTitle",props:L(),setup(e,c){let{slots:a}=c;return P(()=>{const u=!!(a.default||a.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[u&&n("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),ue=[null,"prominent","default","comfortable","compact"],$=B({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ue.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...D(),...w(),...z(),...F(),...R({tag:"header"}),...O()},"VToolbar"),A=k()({name:"VToolbar",props:$(),setup(e,c){var s;let{slots:a}=c;const{backgroundColorClasses:u,backgroundColorStyles:l}=Y(N(e,"color")),{borderClasses:t}=q(e),{elevationClasses:v}=J(e),{roundedClasses:m}=K(e),{themeClasses:g}=Q(e),{rtlClasses:h}=W(),r=S(!!(e.extended||(s=a.extension)!=null&&s.call(a))),f=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=i(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return X({VBtn:{variant:"text"}}),P(()=>{var o;const b=!!(e.title||a.title),T=!!(a.image||e.image),_=(o=a.extension)==null?void 0:o.call(a);return r.value=!!(e.extended||_),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,t.value,v.value,m.value,g.value,h.value,e.class],style:[l.value,e.style]},{default:()=>[T&&n("div",{key:"image",class:"v-toolbar__image"},[a.image?n(I,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(Z,{key:"image-img",cover:!0,src:e.image},null)]),n(I,{defaults:{VTabs:{height:p(f.value)}}},{default:()=>{var y,V,x;return[n("div",{class:"v-toolbar__content",style:{height:p(f.value)}},[a.prepend&&n("div",{class:"v-toolbar__prepend"},[(y=a.prepend)==null?void 0:y.call(a)]),b&&n(U,{key:"title",text:e.title},{text:a.title}),(V=a.default)==null?void 0:V.call(a),a.append&&n("div",{class:"v-toolbar__append"},[(x=a.append)==null?void 0:x.call(a)])])]}}),n(I,{defaults:{VTabs:{height:p(d.value)}}},{default:()=>[n(j,null,{default:()=>[r.value&&n("div",{class:"v-toolbar__extension",style:{height:p(d.value)}},[_])]})]})]})}),{contentHeight:f,extensionHeight:d}}}),ie=B({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ce(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=c;let u=0;const l=E(null),t=S(0),v=S(0),m=S(0),g=S(!1),h=S(!1),r=i(()=>Number(e.scrollThreshold)),f=i(()=>G((r.value-t.value)/r.value||0)),d=()=>{const s=l.value;!s||a&&!a.value||(u=t.value,t.value="window"in s?s.pageYOffset:s.scrollTop,h.value=t.value<u,m.value=Math.abs(t.value-r.value))};return C(h,()=>{v.value=v.value||t.value}),C(g,()=>{v.value=0}),ee(()=>{C(()=>e.scrollTarget,s=>{var T;const b=s?document.querySelector(s):window;b&&b!==l.value&&((T=l.value)==null||T.removeEventListener("scroll",d),l.value=b,l.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),ae(()=>{var s;(s=l.value)==null||s.removeEventListener("scroll",d)}),a&&C(a,d,{immediate:!0}),{scrollThreshold:r,currentScroll:t,currentThreshold:m,isScrollActive:g,scrollRatio:f,isScrollingUp:h,savedScroll:v}}const ve=B({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...$(),...te(),...ie(),height:{type:[Number,String],default:64}},"VAppBar"),he=k()({name:"VAppBar",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:a}=c;const u=E(),l=le(e,"modelValue"),t=i(()=>{var y;const o=new Set(((y=e.scrollBehavior)==null?void 0:y.split(" "))??[]);return{hide:o.has("hide"),inverted:o.has("inverted"),collapse:o.has("collapse"),elevate:o.has("elevate"),fadeImage:o.has("fade-image")}}),v=i(()=>{const o=t.value;return o.hide||o.inverted||o.collapse||o.elevate||o.fadeImage||!l.value}),{currentScroll:m,scrollThreshold:g,isScrollingUp:h,scrollRatio:r}=ce(e,{canScroll:v}),f=i(()=>e.collapse||t.value.collapse&&(t.value.inverted?r.value>0:r.value===0)),d=i(()=>e.flat||t.value.elevate&&(t.value.inverted?m.value>0:m.value===0)),s=i(()=>t.value.fadeImage?t.value.inverted?1-r.value:r.value:void 0),b=i(()=>{var V,x;if(t.value.hide&&t.value.inverted)return 0;const o=((V=u.value)==null?void 0:V.contentHeight)??0,y=((x=u.value)==null?void 0:x.extensionHeight)??0;return o+y});oe(i(()=>!!e.scrollBehavior),()=>{se(()=>{t.value.hide?t.value.inverted?l.value=m.value>g.value:l.value=h.value||m.value<g.value:l.value=!0})});const{ssrBootStyles:T}=M(),{layoutItemStyles:_}=ne({id:e.name,order:i(()=>parseInt(e.order,10)),position:N(e,"location"),layoutSize:b,elementSize:S(void 0),active:l,absolute:N(e,"absolute")});return P(()=>{const o=A.filterProps(e);return n(A,H({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":s.value,height:void 0,...T.value},e.style]},o,{collapse:f.value,flat:d.value}),a)}),{}}}),fe=k()({name:"VAppBarTitle",props:L(),setup(e,c){let{slots:a}=c;return P(()=>n(U,H(e,{class:"v-app-bar-title"}),a)),{}}});const de=B({scrollable:Boolean,...w(),...R({tag:"main"})},"VMain"),be=k()({name:"VMain",props:de(),setup(e,c){let{slots:a}=c;const{mainStyles:u}=re(),{ssrBootStyles:l}=M();return P(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,l.value,e.style]},{default:()=>{var t,v;return[e.scrollable?n("div",{class:"v-main__scroller"},[(t=a.default)==null?void 0:t.call(a)]):(v=a.default)==null?void 0:v.call(a)]}})),{}}});export{he as V,be as a,fe as b};
