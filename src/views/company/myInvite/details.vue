<!-- 查看明细 -->
<template>
  <div class="app-container">
    <pageMain>
      <template #headRight>
      </template>
      <template #sreach>
        <el-input placeholder="输入结算单号"></el-input>
        <div>
          <formContent
            size="large"
            type="datetimerange"
            v-model="params.start_time"
            v-model:end_time="params.end_time"
          />
        </div>
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
const { toClipboard } = clipboard3();
let columns = ref([
  { label: "结算单号", align: "center", slot: "name" },
  { label: "结算时间", align: "center", slot: "name_en" },
  { label: "结算金额(元)", align: "center", prop: "pdf" },
  { label: "收益金额(元)", align: "center", prop: "image" },
]);
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
const sreach = () => {
  tableRef.value.handleQuery({ page: 1 });
};
const copyToCilp = async () => {
  try {
    await toClipboard(inviteLink.value);
    handleMessage("复制成功", "success");
  } catch (error) {
    handleMessage("复制失败");
  }
};
const handleSelectionChange = (rows: any) => {
  selectRows.value = rows;
};
</script>
<style scoped lang="scss"></style>
