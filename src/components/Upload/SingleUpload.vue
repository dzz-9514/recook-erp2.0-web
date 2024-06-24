<template>
  <!-- 上传组件 -->
  <div style="position: relative;" class="upload df-c">
    <el-upload ref="uploaderRef" class="single-uploader" :show-file-list="false" list-type="picture-card"
      :before-upload="handleBeforeUpload" :drag="drag" :disabled="disabled" :http-request="uploadFile" :style="{width:width+'px',height:height+'px'}">
      <el-image v-if="modelValue&&modelValue.url" fit='contain' :src="modelValue.url" class="single"  />
      <template v-else>
        <img style="width:30px;height:30px" src="@/assets/index/upload.png" />
        <svg-icon v-if="drag" ></svg-icon>
        <el-icon v-else class="single-uploader-icon"><i-ep-plus /></el-icon>
        <p>
          <span v-if="drag">文件拖到此处，或</span> <span class="c-1890FF">点击上传</span>
        </p>
      </template>
    </el-upload>
    <div class="mask" v-if="modelValue&&modelValue.url" :style="{width:width+'px',height:height+'px'}">
      <svg-icon size="14" v-if="!disabled" icon-class="add" @click="uploaderHandl"></svg-icon>
      <svg-icon size="14" icon-class="big" @click="previewHandl(modelValue.url)"></svg-icon>
      <svg-icon size="14" v-if="!disabled" @click="deleteHandl" icon-class="delete" color="#fff"></svg-icon>
    </div>
  </div>

</template>

<script setup lang="ts">
import { UploadRawFile, UploadRequestOptions } from "element-plus";
import { uploadFileApi } from "@/api/file";
import {getCurrentInstance} from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
const { proxy } = getCurrentInstance()
const props = defineProps({
  modelValue: {
    type: Object,
    default() {
      return {};
    },
  },
  type: {
    type: String,
    default: "image",
  },
  width: {
    type: [Number,String],
    default: "178",
  },
  height: {
    type: [Number,String],
    default: "178",
  },
  disabled:{
    type:[Boolean,String],
  },
  drag:[Boolean,String]
});

const emit = defineEmits(["update:modelValue"]);
// const imgUrl = useVModel(props, "modelValue",emit);
let uploaderRef = ref()
/**
 * 自定义图片上传
 *
 * @param options
 */
async function uploadFile(options: UploadRequestOptions): Promise<any> {
  const { data: fileInfo } = await uploadFileApi(options.file, props.type);
  emit("update:modelValue", fileInfo);
}

/**
 * 限制用户上传文件的格式和大小
 */
function handleBeforeUpload(file: UploadRawFile) {
  if (file.size > 10 * 1048 * 1048) {
    ElMessage.warning("上传图片不能大于2M");
    return false;
  }
  return true;
}
const uploaderHandl=()=>{
  uploaderRef.value.$el.querySelector('input').click()
}
const previewHandl =(url:any)=>{
  proxy.$hevueImgPreview({clickMaskCLose:true,url,multiple:false})
}
const deleteHandl = ()=>{
  uploaderRef.value.clearFiles()
  emit("update:modelValue", null);
}
</script>

<style scoped lang="scss">
.single-uploader .single {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.mask {
  display: none;
  background-color: var(--el-overlay-color-lighter);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 6px;
  transform: translate(-50%,-50%);
}
.upload {
  &:hover {
    .mask {
      display: flex;
    }
  }
}
::v-deep .el-upload-dragger{
  height: 100%;
  padding: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.svg-icon {
  cursor: pointer;
}
.c-1890FF{
  color: #1890FF;
}
</style>

<style>
.single-uploader .el-upload {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  transition: var(--el-transition-duration-fast);
  width: 100%;
  height: 100%;
}

.single-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.single-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
.df-c{
  display: flex;
  justify-content: center;
}
</style>
