<!--  -->
<template>
  <div class="tag">
    <div class="tag-content" :class="{'small':size == 'small'}" :style="{color:color,background:bgcolor,fontSize:textSize+'px',borderColor:borderColor}">
      {{text}}
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps } from 'vue'
const props = defineProps({
  color: { type: String },
  bgcolor: { type: String },
  textSize: { type: [Number, String] },
  text: { type: String, default: "标题" },
  borderColor: { type: String },
  size:{type:String,default:'default'}
})
</script>
<style scoped lang='scss'>
.tag {
  display: flex;
  justify-content: center;
  &-content {
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px 20px;
  }
  .small{
    padding: 3px 10px;
  }
}
</style>