<!--  -->
<template>
  <template v-if="edit">
    <el-input v-if="type === 'ipt'" :size="size" :placeholder="placeholder || '请输入'" v-model="storeValue"></el-input>
    <el-select v-else-if="type === 'select'" :size="size" :placeholder="placeholder||'请选择'" @change="selectChange" v-model="storeValue">
      <el-option v-for="(i,v) in options" :key="v" :label="i[optionKeys[0]]" :value="i[optionKeys[1]]" />
    </el-select>
    <SingleUpload v-else-if="type === 'image'" v-model="storeValue"></SingleUpload>
    <MultiUpload v-else-if="type === 'images'" v-model="storeValue"></MultiUpload>
    <el-input-number v-else-if="type === 'number'" :precision="precision" :value-on-clear="0" :size="size" :placeholder="placeholder||'请输入'" v-model="storeValue" controls-position="right" />
    <el-radio-group v-else-if="type === 'radio'" :size="size" v-model="storeValue" class="ml-4">
      <el-radio v-for="(i,v) in options" :key="v" :label="i[optionKeys[1]]">{{i[optionKeys[0]]}}</el-radio>
    </el-radio-group>
    <el-cascader ref="cascader" v-model="storeValue" :size="size" :placeholder="placeholder||'请选择'" v-else-if="type === 'cascader'" @change="selectChange" :options="options" :props="cascaderProps"
      clearable></el-cascader>
    <el-switch inline-prompt v-else-if="type === 'switch'" :size="size" v-model="storeValue" style="--el-switch-on-color: #DB001A; --el-switch-off-color: #E2E2E2"
      :active-text="options[0]" :inactive-text="options[1]">
    </el-switch>
    <el-date-picker
      v-else-if="type === 'datetimerange'"
      v-model="storeValue"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      value-format="YYYY-MM-DD HH:mm:ss"
      format="YYYY-MM-DD HH:mm:ss"
      :size="size"
      :placeholder="placeholder"
    />
  </template>
  <template v-else>
    <div v-if="type === 'select' || type === 'radio'">{{getSelectValue(storeValue)}}</div>
    <div v-else-if="type === 'image'">
      <SingleUpload disabled v-model="storeValue"></SingleUpload>
    </div>
    <div v-else-if="type === 'images'">
      <MultiUpload disabled v-model="storeValue"></MultiUpload>
    </div>
    <div v-else>{{storeValue}}</div>
  </template>
</template>

<script setup lang="ts">
import SingleUpload from "@/components/Upload/SingleUpload.vue";
import MultiUpload from "@/components/Upload/MultiUpload.vue";
import {
  reactive,
  ref,
  defineProps,
  defineEmits,
  watchEffect,
  watch,
  computed,
  onMounted,
  toRefs,
} from "vue";
const props: any = defineProps({
  type: {
    type: String,
    default: "ipt",
  },
  placeholder: {
    type: String,
  },
  modelValue: {
    type: [String, Object, Array, Number,Boolean],
    default: "",
  },
  edit: {
    type: [String, Boolean],
    default: true,
  },
  options: {
    type: Array,
    default() {
      return [];
    },
  },
  optionKeys: {
    type: Array,
    default() {
      return ["name", "id"];
    },
  },
  checkStrictly: {
    type: [String, Boolean],
    default: true,
  },
  end_time: {
    type: [String, Object, Array, Number, Boolean],
    default: '',
  },
  size:{
    type: String,
    default: 'default',
  },
  precision:{
    type: Number,
    default: 0,
  }
});
let storeValue:any = ref(null);
let cascader: any = ref(null);
let cascaderProps = reactive({
  checkStrictly: props.checkStrictly,
  value: props.optionKeys[1],
  label: props.optionKeys[0],
});
const getSelectValue = (val: any) => {
  let key = "";
  for (let i in props.options) {
    if (props.options[i][props.optionKeys[1]] == val) {
      key = props.options[i][props.optionKeys[0]];
      break;
    }
  }
  return key;
};
const selectChange = (val: any, options = props.options) => {
  let data = {};
  if (props.type === "select") {
    for (let i in options) {
      if (options[i][props.optionKeys[1]] == val) {
        data = options[i];
        break;
      }
    }
  } else if (
    props.type === "cascader" &&
    cascader.value.getCheckedNodes().length
  ) {
    data = cascader.value.getCheckedNodes()[0].data;
  }
  emits("selectChange", data);
};
let emits = defineEmits(["update:modelValue", "selectChange","update:end_time",]);
watch(
  () => props.modelValue,
  (val, old) => {
    if(props.type == 'datetimerange'&&val){
      storeValue.value = []
      storeValue.value[0] = val;
      storeValue.value[1] = props.end_time;
    }else{
      storeValue.value = val;
    }
  },
  { immediate: true }
);
watch(
  () => storeValue.value,
  (newValue:any) => {
    if (typeof newValue == 'object'&&newValue) {
      emits("update:modelValue",newValue[0]);
      emits("update:end_time",newValue[1]);
    } else {
      emits("update:modelValue", newValue);
      emits("update:end_time",undefined);
    }
  }
);
</script>
<style scoped lang='scss'>
</style>