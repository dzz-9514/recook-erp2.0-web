import{an as T,d as U,aq as N,as as $,k as a,a5 as b,f as j,A as z,o as q,g as A,B as e,w as o,aD as h,ai as v,a as n,R as d,aj as H,aI as L}from"./index-bac4b5f3.js";import{E as O}from"./el-drawer-19532dd9.js";import{E as C,a as G}from"./el-form-6558df57.js";import"./el-form-item-4ed993c7.js";import{_ as J,p as K,E as P,a as Q}from"./content.vue_vue_type_script_setup_true_lang-3d041eb3.js";import"./el-scrollbar-681f88c4.js";import{t as W}from"./tableMain-700598ba.js";import{c as X}from"./index-50509d71.js";import"./use-dialog-e94933bd.js";import"./_Uint8Array-8a953de1.js";import"./el-card-4dc5830c.js";import"./debounce-b578790f.js";import"./el-switch-828efcde.js";import"./el-image-viewer-6fe93acf.js";import"./el-tooltip-4ed993c7.js";const w=function(u="此操作无法进行!",m="warning",p=!1){T({message:u,type:m,showClose:p})},Y={class:"app-container"},Z={class:"p-all-20 bg-fff br-10 mt-20"},ee={class:"c-8C8C8C"},be=U({__name:"index",setup(u){const m=N(),{toClipboard:p}=X(),k=$();let E=a([{label:"注册账号",align:"center",slot:"name"},{label:"注册时间",align:"center",prop:"name_en"},{label:"手机号",align:"center",prop:"pdf"},{label:"认证状态",align:"center",slot:"image"},{label:"联系人姓名",align:"center",slot:"order"},{label:"收益总额(元)",align:"center",prop:"order"},{label:"操作",align:"center",slot:"action",width:90}]),y=a("新增"),s=a(!1),r=a({});b({name:"",name_en:"",pdf:"",image:{url:""},product_image:[],order:"1",id:void 0});let _=a(`https://ep.zjdelhr.com/#/register/basicInfo?type=1&id=${m.userId}`),V=a(null);a(C),b({});let S=a([]);a(!1);const R=i=>{k.push({name:"myInviteDetails",params:{id:"12121"}})};j(()=>y.value!=="详情");const I=async()=>{try{await p(_.value),w("复制成功","success")}catch{w("复制失败")}},x=i=>{S.value=i};return(i,l)=>{const f=z("akbutton"),c=L,g=P,D=Q,B=G,F=C,M=O;return q(),A("div",Y,[e(K,null,{headRight:o(()=>[e(f,{height:"48",icon:"invite",onClick:l[0]||(l[0]=t=>h(s)?s.value=!0:s=!0)},{default:o(()=>[v("邀请企业")]),_:1})]),sreach:o(()=>[e(c,{placeholder:"请输入注册账号"}),e(J,{size:"large",type:"datetimerange",modelValue:n(r).start_time,"onUpdate:modelValue":l[1]||(l[1]=t=>n(r).start_time=t),end_time:n(r).end_time,"onUpdate:end_time":l[2]||(l[2]=t=>n(r).end_time=t)},null,8,["modelValue","end_time"]),e(c,{placeholder:"请输入手机号",class:"ml-20"}),e(D,{placeholder:"请选择认证状态"},{default:o(()=>[e(g,{label:"未认证",value:0}),e(g,{label:"已认证",value:1})]),_:1}),e(c,{placeholder:"请输入联系人姓名"})]),_:1}),d("div",Z,[e(W,{ref_key:"tableRef",ref:V,params:n(r),onHandleSelectionChange:x,columns:n(E),sortShow:"",selection:"",data:[{name:"21212"}]},{action:o(({row:t})=>[e(f,{cssType:"3",onClick:te=>R(t)},{default:o(()=>[v("查看")]),_:2},1032,["onClick"])]),_:1},8,["params","columns"])]),e(M,{modelValue:n(s),"onUpdate:modelValue":l[3]||(l[3]=t=>h(s)?s.value=t:s=t),title:"邀请企业","label-position":"top"},{default:o(()=>[e(F,{"label-position":"top"},{default:o(()=>[e(B,{label:"邀请链接"},{default:o(()=>[d("span",ee,H(n(_)),1),d("a",{class:"ml-30 c-1890FF",onClick:I},"点击复制")]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});export{be as default};
