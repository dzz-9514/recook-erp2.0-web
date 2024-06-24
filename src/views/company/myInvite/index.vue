<!-- 我的邀请 -->
<template>
  <div class="app-container">
    <pageMain>
      <template #headRight>
        <akbutton height="48" icon="invite" @click="detailShow = true"
          >邀请企业</akbutton
        >
      </template>
      <template #sreach>
        <el-input placeholder="请输入注册账号"></el-input>
        <formContent
          size="large"
          type="datetimerange"
          v-model="params.start_time"
          v-model:end_time="params.end_time"
        />
        <el-input placeholder="请输入手机号" class="ml-20"></el-input>
        <el-select placeholder="请选择认证状态">
          <el-option label="未认证" :value="0" />
          <el-option label="已认证" :value="1" />
        </el-select>
        <el-input placeholder="请输入联系人姓名"></el-input>
      </template>
    </pageMain>
    <div class="p-all-20 bg-fff br-10 mt-20">
      <tableMain
        ref="tableRef"
        :params="params"
        @handleSelectionChange="handleSelectionChange"
        :columns="columns"
        sortShow
        selection
        :data="[{ name: '21212' }]"
      >
        <!-- apiUrl="v1/pc/product/product/list" -->
        <template #action="{ row }">
          <akbutton cssType="3" @click="toDetails(row)">查看</akbutton>
        </template>
      </tableMain>
    </div>
    <el-drawer v-model="detailShow" title="邀请企业" label-position="top">
      <el-form label-position="top">
        <el-form-item label="邀请链接">
          <span class="c-8C8C8C">{{ inviteLink }}</span>
          <a class="ml-30 c-1890FF" @click="copyToCilp">点击复制</a>
        </el-form-item>
      </el-form>
    </el-drawer>
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
import {useUserStore} from '@/store/modules/user'
const userStore = useUserStore()
const { toClipboard } = clipboard3(); // 引入复制插件
const router = useRouter();
let columns = ref([
  { label: "注册账号", align: "center", slot: "name" },
  { label: "注册时间", align: "center", prop: "name_en" },
  { label: "手机号", align: "center", prop: "pdf" },
  { label: "认证状态", align: "center", slot: "image" },
  { label: "联系人姓名", align: "center", slot: "order" },
  { label: "收益总额(元)", align: "center", prop: "order" },
  { label: "操作", align: "center", slot: "action", width: 90 },
]);
let detailTitle = ref("新增");
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
let inviteLink = ref(import.meta.env.VITE_APP_REGISTER_URL+`register/basicInfo?type=1&id=${userStore.userId}`);
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
const edit = computed(() => {
  return detailTitle.value !== "详情";
});
const copyToCilp = async () => {
  try {
    await toClipboard(inviteLink.value);
    handleMessage("复制成功", "success");
  } catch (error) {
    handleMessage("复制失败");
  }
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
</script>
<style scoped lang="scss"></style>
