<!--  -->
<template>
  <div class="app-container">
    <pageMain>
      <template #headRight>
        <akbutton height="48" icon="create">创建项目</akbutton>
      </template>
      <template #sreach>
        <el-input placeholder="请输入项目编号"></el-input>
        <el-input placeholder="请输入项目名称"></el-input>
        <el-select placeholder="请选择项目类别"></el-select>
        <el-select placeholder="请选择结算模式"></el-select>
        <el-input placeholder="请输入项目名称"></el-input>
        <el-select placeholder="请选择结算模式"></el-select>
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
        apiUrl="v1/pc/product/product/list"
      >
        <template #image="{ row }">
          <SingleUpload
            v-if="row.image"
            disabled
            width="50"
            height="50"
            v-model="row.image"
          ></SingleUpload>
        </template>
        <template #action="{ row }">
          <el-row justify="center">
            <akbutton
              :cssType="3"
              type="primary"
              @bClick="eidtUserHandl(row, true)"
              link
              >编辑</akbutton
            >
            <akbutton
              :cssType="3"
              type="primary"
              @bClick="eidtUserHandl(row)"
              link
              >详情</akbutton
            >
            <akbutton
              :cssType="3"
              type="danger"
              @bClick="deleteUserHandl([row])"
              link
              >删除</akbutton
            >
          </el-row>
        </template>
      </tableMain>
    </div>
    <!-- <el-card shadow="never">
      <div class="btns">
        <div class="dp-f">
          <span>关键字：</span>
          <el-input v-model="params.name" clearable @keyup.enter.native="sreach"></el-input>
          <akbutton  style="margin-left:50px" @bClick="sreach" :cssType="2">
            查询
          </akbutton>
        </div>
        <div class="dp-f">
          <akbutton icon="add" @bClick="addUserHandl()">
            新增
          </akbutton>
          <akbutton icon="delete" :disabled="!Boolean(selectRows.length)" @bClick="deleteUserHandl(selectRows)" :cssType="2">
            删除
          </akbutton>
        </div>
      </div>
      <tableMain ref="tableRef" :params="params" @handleSelectionChange="handleSelectionChange" :columns="columns" sortShow selection
        apiUrl="v1/pc/product/product/list">
        <template #image="{row}">
          <SingleUpload v-if="row.image" disabled width="50" height="50" v-model="row.image"></SingleUpload>
        </template>
        <template #action="{row}">
          <el-row justify="center">
            <akbutton :cssType="3" type="primary" @bClick="eidtUserHandl(row,true)" link>编辑</akbutton>
            <akbutton :cssType="3" type="primary" @bClick="eidtUserHandl(row)" link>详情</akbutton>
            <akbutton :cssType="3" type="danger" @bClick="deleteUserHandl([row])" link>删除</akbutton>
          </el-row>
        </template>
      </tableMain>
    </el-card> -->

    <el-dialog
      v-model="detailShow"
      :title="detailTitle"
      width="40%"
      @close="resetForm()"
    >
      <el-form
        label-width="120"
        :model="saveForm"
        ref="saveFormRef"
        :rules="rules"
      >
        <el-row justify="space-between">
          <el-col :span="12">
            <el-form-item label="产品名称" prop="name">
              <formContent :edit="edit" v-model="saveForm.name"></formContent>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="英文名称" prop="name_en">
              <formContent
                :edit="edit"
                v-model="saveForm.name_en"
              ></formContent>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="产品PDF链接" prop="pdf">
              <formContent :edit="edit" v-model="saveForm.pdf"></formContent>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="封面图" prop="image">
              <formContent
                :edit="edit"
                v-model="saveForm.image"
                type="image"
              ></formContent>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="排序" prop="order">
              <formContent
                :edit="edit"
                v-model="saveForm.order"
                type="number"
              ></formContent>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="产品详情" prop="product_image">
              <formContent
                :edit="edit"
                v-model="saveForm.product_image"
                type="images"
              ></formContent>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="产品描述" prop="describe">
              <formContent
                :edit="edit"
                v-model="saveForm.describe"
              ></formContent>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <span class="dialog-footer" v-if="edit">
          <akbutton :cssType="2" @click="resetForm()" :loading="loading"
            >关闭</akbutton
          >
          <akbutton @click="submit" :loading="loading"> 确定 </akbutton>
        </span>
      </template>
    </el-dialog>
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
let columns = ref([
  { label: "产品名称", align: "center", prop: "name" },
  { label: "英文名称", align: "center", prop: "name_en" },
  { label: "pdf地址", align: "center", prop: "pdf" },
  { label: "封面图", align: "center", slot: "image" },
  { label: "排序", align: "center", prop: "order" },
  { label: "操作", align: "center", slot: "action" },
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
let tableRef: any = ref(null);
const saveFormRef = ref(ElForm);
const rules = reactive({});
let selectRows = ref([]);
let loading = ref(false);
const addUserHandl = () => {
  detailShow.value = true;
  detailTitle.value = "新增";
};
const sreach = () => {
  tableRef.value.handleQuery({ page: 1 });
};
const edit = computed(() => {
  return detailTitle.value !== "详情";
});
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
const eidtUserHandl = async (row: any, type: Boolean) => {
  //打开弹窗执行顺序不可换
  detailTitle.value = type ? "编辑" : "详情";
  detailShow.value = true;
  let res: any = await getProductForm(row.id);
  if (res.code == 200) {
    res.data.image = res.data.image ? res.data.image : { url: "" };
    Object.assign(saveForm, res.data);
  }
};
const resetForm = () => {
  saveFormRef.value.resetFields();
  saveFormRef.value.clearValidate();
  console.log("saveForm", saveForm);
  detailShow.value = false;
  saveForm.id = undefined;
};
const submit = async () => {
  let res: any = {};
  let formData: any = { ...saveForm };
  formData.image = formData.image && formData.image.url ? formData.image : null;
  loading.value = true;
  try {
    if (formData.id) {
      res = await editProduct(formData);
    } else {
      res = await addProduct(formData);
    }
    if (res.code == 200) {
      handleMessage(res.errmsg, "success");
      tableRef.value.getTableData();
      resetForm();
    } else {
      handleMessage(res.errmsg);
    }
    loading.value = false;
  } catch (err) {
    loading.value = false;
  }
};
</script>
<style scoped lang="scss">
.btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.dp-f {
  display: flex;
  align-items: center;
  span {
    white-space: pre;
  }
}
</style>
