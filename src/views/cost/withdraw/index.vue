<!-- 提现记录 -->
<template>
  <div class="app-container">
    <pageMain>
      <template #headRight>
        <akbutton height="48" icon="export" @click="exportHandl"
          >数据导出</akbutton
        >
      </template>
      <template #sreach>
        <el-input placeholder="请输入账户名称"></el-input>
        <div class="mr-20">
          <formContent
            size="large"
            type="datetimerange"
            v-model="params.start_time"
            v-model:end_time="params.end_time"
          />
        </div>
        <el-input placeholder="请输入提现银行"></el-input>
        <el-input placeholder="请输入提现账户"></el-input>
      </template>
    </pageMain>
    <div class="p-all-20 bg-fff br-10 mt-20">
      <tableMain
        ref="tableRef"
        :params="params"
        @handleSelectionChange="handleSelectionChange"
        :columns="columns"
        sortShow
        :data="[{ name: '21212' }]"
      >
        <!-- apiUrl="v1/pc/product/product/list" -->
      </tableMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
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
const router = useRouter();
let columns = ref([
  { label: "账户名称", align: "center", slot: "name" },
  { label: "提现金额", align: "center", prop: "name_en" },
  { label: "手续费", align: "center", slot: "pdf", },
  { label: "提现日期", align: "center", slot: "image" ,width: 200},
  { label: "提现银行", align: "center", slot: "order"  },
  { label: "提现账户", align: "center", prop: "order" },
  { label: "状态", align: "center", prop: "order" },
]);
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
let inviteLink = ref("jwqdgqyhdq2917362736");
let tableRef: any = ref(null);
const saveFormRef = ref(ElForm);
const rules = reactive({});
let selectRows = ref([]);
let loading = ref(false);
const toDetails = (row: any) => {
  router.push({
    name: "myInviteDetails",
    params: {
      id: "12121",
    },
  });
};
const sreach = () => {
  tableRef.value.handleQuery({ page: 1 });
};
const deleteUserHandl = (rows: any) => {
  handleCofirm("你确定要删除此条数据？").then(async () => {
    let ids = rows.map((i: any) => i.id);
    let res: any = await deleteProduct({ ids: ids });
    if (res.code == 200) {
      handleMessage(res.errmsg, "success");
      tableRef.value.getTableData();
    }
  });
};
const handleSelectionChange = (rows: any) => {
  selectRows.value = rows;
};
const exportHandl = () => {};
const downLoad = (row: any) => {};
</script>
<style scoped lang="scss"></style>
