import{b as Z,ca as x,H as F,e as ee,a_ as P,a$ as S,a7 as k,aW as V,bQ as _,c4 as D,d as L,L as ae,bM as te,O as ie,u as oe,bO as ne,bL as le,f as c,k as I,N as se,y as E,bo as re,q as ce,o as l,g as d,R as T,a,n as r,aK as ue,c as v,w as g,S as N,J as C,h as u,aj as B,B as de,bz as ve,i as U,U as fe,_ as pe,a2 as he,G as me,b$ as A,a3 as be,j as ye}from"./index-bac4b5f3.js";const ge=Z({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:x},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:F},inactiveIcon:{type:F},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:ee(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1}}),Ce={[P]:s=>S(s)||k(s)||V(s),[_]:s=>S(s)||k(s)||V(s),[D]:s=>S(s)||k(s)||V(s)},Se=["onClick"],we=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ke=["aria-hidden"],Ve=["aria-hidden"],Ie=["aria-hidden"],z="ElSwitch",Ee=L({name:z}),Te=L({...Ee,props:ge,emits:Ce,setup(s,{expose:j,emit:f}){const t=s,G=ae(),{formItem:h}=te(),H=ie(),i=oe("switch");(e=>{e.forEach(o=>{he({from:o[0],replacement:o[1],scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},c(()=>{var y;return!!((y=G.vnode.props)!=null&&y[o[2]])}))})})([['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]]);const{inputId:R}=ne(t,{formItemContext:h}),m=le(c(()=>t.loading)),w=I(t.modelValue!==!1),p=I(),W=I(),$=c(()=>[i.b(),i.m(H.value),i.is("disabled",m.value),i.is("checked",n.value)]),q=c(()=>[i.e("label"),i.em("label","left"),i.is("active",!n.value)]),J=c(()=>[i.e("label"),i.em("label","right"),i.is("active",n.value)]),Q=c(()=>({width:se(t.width)}));E(()=>t.modelValue,()=>{w.value=!0}),E(()=>t.value,()=>{w.value=!1});const K=c(()=>w.value?t.modelValue:t.value),n=c(()=>K.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(K.value)||(f(P,t.inactiveValue),f(_,t.inactiveValue),f(D,t.inactiveValue)),E(n,e=>{var o;p.value.checked=e,t.validateEvent&&((o=h==null?void 0:h.validate)==null||o.call(h,"change").catch(y=>re()))});const b=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(P,e),f(_,e),f(D,e),me(()=>{p.value.checked=n.value})},O=()=>{if(m.value)return;const{beforeChange:e}=t;if(!e){b();return}const o=e();[A(o),S(o)].includes(!0)||be(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),A(o)?o.then(M=>{M&&b()}).catch(M=>{}):o&&b()},X=c(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),Y=()=>{var e,o;(o=(e=p.value)==null?void 0:e.focus)==null||o.call(e)};return ce(()=>{p.value.checked=n.value}),j({focus:Y,checked:n}),(e,o)=>(l(),d("div",{class:r(a($)),style:U(a(X)),onClick:fe(O,["prevent"])},[T("input",{id:a(R),ref_key:"input",ref:p,class:r(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(m),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(m),tabindex:e.tabindex,onChange:b,onKeydown:ue(O,["enter"])},null,42,we),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(l(),d("span",{key:0,class:r(a(q))},[e.inactiveIcon?(l(),v(a(C),{key:0},{default:g(()=>[(l(),v(N(e.inactiveIcon)))]),_:1})):u("v-if",!0),!e.inactiveIcon&&e.inactiveText?(l(),d("span",{key:1,"aria-hidden":a(n)},B(e.inactiveText),9,ke)):u("v-if",!0)],2)):u("v-if",!0),T("span",{ref_key:"core",ref:W,class:r(a(i).e("core")),style:U(a(Q))},[e.inlinePrompt?(l(),d("div",{key:0,class:r(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(l(),v(a(C),{key:0,class:r(a(i).is("icon"))},{default:g(()=>[(l(),v(N(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(l(),d("span",{key:1,class:r(a(i).is("text")),"aria-hidden":!a(n)},B(a(n)?e.activeText:e.inactiveText),11,Ve)):u("v-if",!0)],2)):u("v-if",!0),T("div",{class:r(a(i).e("action"))},[e.loading?(l(),v(a(C),{key:0,class:r(a(i).is("loading"))},{default:g(()=>[de(a(ve))]),_:1},8,["class"])):u("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(l(),d("span",{key:1,class:r(a(J))},[e.activeIcon?(l(),v(a(C),{key:0},{default:g(()=>[(l(),v(N(e.activeIcon)))]),_:1})):u("v-if",!0),!e.activeIcon&&e.activeText?(l(),d("span",{key:1,"aria-hidden":!a(n)},B(e.activeText),9,Ie)):u("v-if",!0)],2)):u("v-if",!0)],14,Se))}});var Ne=pe(Te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const _e=ye(Ne);export{_e as E};
