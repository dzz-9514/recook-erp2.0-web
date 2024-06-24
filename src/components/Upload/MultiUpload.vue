<!--
  多图上传组件
  @author: youlaitech
  @date 2022/11/20
-->

<template>
  <el-upload :class="{ hide: disabled }" v-model:file-list="fileList" list-type="picture-card" :before-upload="handleBeforeUpload" :http-request="handleUpload"
    :on-remove="handleRemove" :disabled="disabled" :on-preview="previewImg" :limit="props.limit">
    <i-ep-plus />
  </el-upload>

</template>

<script setup lang="ts">
import {getCurrentInstance,onMounted,onActivated} from 'vue'
import {
  UploadRawFile,
  UploadRequestOptions,
  UploadUserFile,
  UploadFile,
  UploadProps,
} from "element-plus";
import { uploadFileApi, deleteFileApi } from "@/api/file";
const { proxy } = getCurrentInstance()
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  /**
   * 文件路径集合
   */
  modelValue: {
    type: [Array<string>,String],
    default: [] as Array<string>,
  },
  /**
   * 文件上传数量限制
   */
  limit: {
    type: Number,
    default: 10,
  },
  type: {
    type: String,
    default: "image",
  },
  disabled:{
    type:[Boolean,String],
  }
});
const previewImgUrl = ref("");
const dialogVisible = ref(false);

const fileList = ref([] as UploadUserFile[]);
watch(
  () => props.modelValue,
  (newVal: string[]) => {
    if (newVal) {
      const filePaths = fileList.value.map((file) => file.url);
      // 监听modelValue文件集合值未变化时，跳过赋值
      if (
        filePaths.length > 0 &&
        filePaths.length === newVal.length &&
        filePaths.every((x) => newVal.some((y) => y === x)) &&
        newVal.every((y) => filePaths.some((x) => x === y))
      ) {
        return;
      }

      fileList.value = newVal.map((filePath:any) => {
        return {  ...filePath } as UploadUserFile;
      });
    }else{
      fileList.value = []
    }
  },
  { immediate: true,deep:true }
);

/**
 * 自定义图片上传
 *
 * @param params
 */
async function handleUpload(options: UploadRequestOptions): Promise<any> {
  // 上传API调用
  const { data: fileInfo } = await uploadFileApi(options.file, props.type);

  // 上传成功需手动替换文件路径为远程URL，否则图片地址为预览地址 blob:http://
  const fileIndex = fileList.value.findIndex(
    (file) => file.uid == (options.file as any).uid
  );
  console.log('fileIndex',fileIndex)
  fileList.value.splice(fileIndex, 1, {
    ...fileInfo
  } as UploadUserFile);
  emit("update:modelValue", fileList.value);
}

/**
 * 删除图片
 */
function handleRemove(removeFile: UploadFile) {
  const filePath = removeFile.url;

  // if (filePath) {
  //   deleteFileApi(filePath).then(() => {
  //     // 删除成功回调
      emit(
        "update:modelValue",
        fileList.value
      );
  //   });
  // }
}

/**
 * 限制用户上传文件的格式和大小
 */
function handleBeforeUpload(file: UploadRawFile) {
  // if (file.size > 2 * 1048 * 1048) {
  //   ElMessage.warning("上传图片不能大于2M");
  //   return false;
  // }
  return true;
}

/**
 * 预览图片
 */
const previewImg: UploadProps["onPreview"] = (uploadFile:any) => {
  previewImgUrl.value = uploadFile.url!;
  let url = previewImgUrl.value
  proxy.$hevueImgPreview({clickMaskCLose:true,url,multiple:false})
};
</script>

<style lang="scss" scoped>
.hide{
  ::v-deep .el-upload--picture-card{
    display: none
  }
}
</style>
