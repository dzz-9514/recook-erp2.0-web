import{d as w,as as C,k as a,a5 as m,A as x,o as E,g as R,B as e,w as t,ai as d,R as _,a as l,aI as V}from"./index-bac4b5f3.js";import{_ as y,p as B,E as S,a as q}from"./content.vue_vue_type_script_setup_true_lang-3d041eb3.js";import"./el-scrollbar-681f88c4.js";import{t as N}from"./tableMain-700598ba.js";import{E as H}from"./el-form-6558df57.js";import"./el-card-4dc5830c.js";import"./_Uint8Array-8a953de1.js";import"./debounce-b578790f.js";import"./el-switch-828efcde.js";import"./el-image-viewer-6fe93acf.js";import"./el-tooltip-4ed993c7.js";const I={class:"app-container"},M={class:"mr-20"},T={class:"p-all-20 bg-fff br-10 mt-20"},Q=w({__name:"index",setup(U){C();let u=a([{label:"交易类型",align:"center",slot:"name"},{label:"交易金额",align:"center",prop:"name_en"},{label:"交易时间",align:"center",slot:"pdf",width:200},{label:"交易渠道",align:"center",slot:"image"},{label:"目标户名",align:"center",slot:"order"},{label:"目标账号",align:"center",prop:"order"},{label:"流水号",align:"center",prop:"order"},{label:"操作",align:"center",slot:"action",width:180}]);a(!1);let o=a({});m({name:"",name_en:"",pdf:"",image:{url:""},product_image:[],order:"1",id:void 0}),a("jwqdgqyhdq2917362736");let f=a(null);a(H),m({});let g=a([]);a(!1);const h=i=>{g.value=i},b=()=>{},v=i=>{};return(i,r)=>{const p=x("akbutton"),c=S,k=q,s=V;return E(),R("div",I,[e(B,null,{headRight:t(()=>[e(p,{height:"48",icon:"export",onClick:b},{default:t(()=>[d("数据导出")]),_:1})]),sreach:t(()=>[e(k,{placeholder:"请选择交易类型"},{default:t(()=>[e(c,{label:"提现",value:1}),e(c,{label:"收益",value:2})]),_:1}),_("div",M,[e(y,{size:"large",type:"datetimerange",modelValue:l(o).start_time,"onUpdate:modelValue":r[0]||(r[0]=n=>l(o).start_time=n),end_time:l(o).end_time,"onUpdate:end_time":r[1]||(r[1]=n=>l(o).end_time=n)},null,8,["modelValue","end_time"])]),e(s,{placeholder:"请输入交易渠道"}),e(s,{placeholder:"请输入目标户名"}),e(s,{placeholder:"请输入目标账号"}),e(s,{placeholder:"请输入流水号"})]),_:1}),_("div",T,[e(N,{ref_key:"tableRef",ref:f,params:l(o),onHandleSelectionChange:h,columns:l(u),sortShow:"",data:[{name:"21212"}]},{action:t(({row:n})=>[e(p,{cssType:"3",onClick:$=>v(n)},{default:t(()=>[d("下载银行回单")]),_:2},1032,["onClick"])]),_:1},8,["params","columns"])])])}}});export{Q as default};