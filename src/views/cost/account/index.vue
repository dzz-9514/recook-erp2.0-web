<!-- 账户信息 -->
<template>
  <div class="app-container">
    <pageMain> </pageMain>
    <div class="p-all-20 bg-fff br-10 mt-20 formBox">
      <template v-for="(v, i) in accountInfo" :key="i">
        <div class="box">
          <div class="dp-f ai-c jc-sb">
            <div class="dp-f ai-c">
              <SvgIcon size="25" icon-class="avatar" class="mr-12" />
              {{ v.name }}
            </div>
            <akbutton cssType="3" width="48" height="26">{{ v.post }}</akbutton>
          </div>
          <div class="fs-16 c-8C8C8C mt-20 mb-12">账户余额（元）</div>
          <div class="c-1890FF fs-30">
            {{ v.money }}
          </div>
          <div class="dp-f ai-c mt-20">
            <SvgIcon size="16" icon-class="time" class="mr-12" />
            {{ v.time }}
          </div>
          <div class="dp-f mt-20 pb-20 b-dashed">
            <akbutton @bClick="withdrawHandl">提现</akbutton>
            <akbutton cssType="2" @bClick="toChangeDetails">余额变动明细</akbutton>
          </div>
          <div class="dp-f jc-sb ai-c pt-20">
            <div class="c-8C8C8C">服务公司名称</div>
            {{ v.serveName }}
          </div>
        </div>
      </template>
    </div>
    <el-drawer v-model="detailShow" title="提现" label-position="top">
      <el-form
        label-position="right"
        :model="saveForm"
        :rules="rules"
        ref="saveFormRef"
      >
        <el-form-item label="提现银行：" prop="">
          <el-input :disabled="true" placeholder="暂无" />
        </el-form-item>
        <el-form-item label="提现账户：" prop="">
          <el-input :disabled="true" placeholder="暂无" >
            <template #suffix>
              <a class="c-1890FF">添加银行卡</a>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="提现金额：" prop="name">
          <div class="w100">
            <formContent
              type="number"
              v-model="saveForm.name"
              :precision="2"
              placeholder="请输入提现金额"
            />
          </div>
          <div class="c-8C8C8C">*本次提现手续费：</div>
          1.23元
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dp-f h-40">
          <akbutton @click="confirmClick">确定</akbutton>
          <akbutton cssType="2" @click="cancelClick">取消</akbutton>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, nextTick } from "vue";
import tableMain from "@/components/tableTemp/tableMain.vue";
import pageMain from "@/components/pageTemp/index.vue";
import {
  addProduct,
  getProductForm,
  editProduct,
  deleteProduct,
} from "@/api/product/index";
import { handleMessage, handleCofirm } from "@/utils/confirm";
import type { FormInstance } from "element-plus";
import SingleUpload from "@/components/Upload/SingleUpload.vue";
import formContent from "@/components/form/content.vue";
import clipboard3 from "vue-clipboard3";
import { useRouter } from "vue-router";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { statistics } from "@/api/home/index.ts";
import { formatStamp } from "@/utils/timeTool.js";

const { toClipboard } = clipboard3(); // 引入复制插件
const getAccount = ()=>{
  statistics().then((res:any) => {
    if(res.code == 200){
      accountInfo.value[0].name = res.data.contacts
      accountInfo.value[0].serveName = res.data.operating_name
      accountInfo.value[0].money = res.data.amount
      accountInfo.value[0].time = formatStamp(new Date())
    }
  });
}
getAccount()
const router = useRouter();
let detailShow = ref(false);
let params: any = ref({});
let saveForm = reactive({
  name: "",
  name_en: "",
  pdf: "",
  image: { url: "" },
  product_image: [],
  order: "1",
  id: undefined,
});
let tableRef: any = ref(null);
const saveFormRef = ref(ElForm);
const accountInfo:any = ref([
  {
    // name: "宁波阿库技术-测试账号",
    post: "共管",
    // money: "2.23",
    // time: "2023-07-09 12:12:31",
    // serveName: "广西某某公司",
  },
]);
const rules = reactive({
  name: [
    { required: true, message: "请输入提现金额", trigger: "change" },
    { validator(rule:any, value:any, callback:any) {
      if(value=='0.00'){
        return callback(new Error('提现金额不能为0.00'))
      }else{
        callback()
      }
    } },
  ],
});
let selectRows = ref([]);
let loading = ref(false);
const sreach = () => {
  tableRef.value.handleQuery({ page: 1 });
};
const handleSelectionChange = (rows: any) => {
  selectRows.value = rows;
};
const withdrawHandl = () => {
  detailShow.value = true;
};
const confirmClick = () => {
  saveFormRef.value.validate((valid: any) => {
    if (valid) {
      cancelClick();
    } else {
    }
  });
};
const cancelClick = () => {
  saveFormRef.value.resetFields();
  nextTick(() => {
    detailShow.value = false;
  });
};
const toChangeDetails =()=>{
  router.push({
    name:'accountDetails'
  })
}
</script>
<style scoped lang="scss">
.box {
  border-radius: 10px;
  border: 1px solid #1890ff;
  width: 600px;
  padding: 20px;
}
.b-dashed {
  border-bottom: 1px dashed #1890ff;
}
.formBox {
  height: calc(100vh - 220px);
  min-height: 600px;
}
</style>
