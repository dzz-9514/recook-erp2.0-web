<!--  -->
<template>
  <div id="table-box" class="pos-r" :style="{height:tableHeight+'px'}">
    <el-table ref="table" :data="tableData" v-loading="loading" :height="height?height:tableHeight" style="width: 100%" @selection-change="handleSelectionChange"
      :header-cell-style="headerStyle" row-key="id" default-expand-all>
      <el-table-column v-if="selection" type="selection" align="center" :resizable="false" />
      <el-table-column v-if="sortShow" width="60" label="序号" align="center" :resizable="false">
        <template #default="{$index}">
          {{($index +1)+(tableParm.page-1)*tableParm.size}}
        </template>
      </el-table-column>
      <el-table-column v-for="(el,ind) in props.columns" :key="ind" :prop="el.prop" :width="el.width" :align="el.align" :label="el.label" :fixed="el.fixed" :resizable="false">
        <template v-if="el.slot" #default="scope">
          <slot :name="el.slot" :row='scope.row' :index="scope.$index">
            <div class="hm-e">{{scope.row[el.slot]}}</div>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="paging">
    <pagination :small="small" layout="total,prev, pager, next,sizes, jumper" v-model:total="tableParm.total" v-model:page="tableParm.page"
      v-model:limit="tableParm.size" :background='true' @pagination="handleQuery" />
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, defineEmits, onMounted, defineExpose, nextTick,onBeforeUnmount } from 'vue'
import axios from '@/utils/request';
// import elementResizeDetectorMaker from 'element-resize-detector';
// var erd = elementResizeDetectorMaker(); //创建实例
const props = defineProps({
  data: {
    type: Array
  },
  height: Number,
  selection: [Boolean,String],
  sortShow: [Boolean,String],
  columns: {
    type: Array,
    default() {
      return []
    }
  },
  apiUrl: String,
  params: Object,
  computerHeight: {
    type: Number,
    default: 100
  },
  small: String
})
let tableParm = reactive({
  page: 1,
  size: 10,
  total: 10,
})
let tableData = ref([])
let tableHeight = ref(0)
let loading = ref(false)
const headerStyle = ((data) => {
  return { background: '#F8F8F8', textAlign: "center" };
})
onMounted(() => {
  //监听id为box的元素
  // erd.listenTo(document.getElementById("table-box"), (element) => {
  //   let pageHeight = document.getElementById('app').offsetHeight
  //   tableHeight.value = pageHeight - getTopHeight(element) - props.computerHeight
  //   console.log('tableHeight', tableHeight.value)
  // });
  // nextTick(() => {
    let pageHeight = document.getElementById('app').offsetHeight
    tableHeight.value = pageHeight - getTopHeight(document.getElementById("table-box")) - props.computerHeight
  // })
  window.onresize = (() => {
    // console.log('getTopHeight(document.getElementById("table-box"))',getTopHeight(document.getElementById("table-box")))
    let pageHeight = document.getElementById('app').offsetHeight
    tableHeight.value = pageHeight - getTopHeight(document.getElementById("table-box")) - props.computerHeight
  })
})
onBeforeUnmount(()=>{
  window.onresize = null;
  // console.log('onBeforeUnmount')
})
//递归计算表格至页面顶部的距离
const getTopHeight = (dom, distance = 0,height=document.getElementById("table-box").offsetHeight) => {
  distance = distance || 0
  //可以使用dom.style.positin 但style只能获取到行内属性会出现获取不到属性值返回空字符串
  //getComputedStyle会输出最终应用于该element上的最终样式  IE9+支持
  //currentStyle  IE老版本支持
  if (['relative', 'absolute', 'fixed'].includes(getComputedStyle(dom).position)) {
  //   console.log('dom.offsetHeight',dom.offsetHeight)
  // console.log('height',height)
    // height = dom.offsetHeight - height
    // distance += height
    // console.log('distance',distance)
    distance += dom.offsetTop
  }
  if (dom.parentElement.nodeName === 'BODY' || !dom.parentElement) {
    return distance
  }
  return getTopHeight(dom.parentElement, distance,height)
}
const emits = defineEmits(['handleSelectionChange'])
const handleSelectionChange = (rows) => {
  emits('handleSelectionChange', rows)
}
const getTableData = async () => {
  loading.value = true
  try {
    if (props.apiUrl) {
      let res = await axios.get(props.apiUrl, { params: { ...tableParm, ...props.params } })
      if (res.code == 200) {
        tableData.value = res.data.list
        tableParm.page = res.data.page
        tableParm.total = res.data.total
        tableParm.size = res.data.size
      }
      loading.value = false
    } else {
      tableData.value = props.data
      loading.value = false
    }
  } catch (error) {
    console.log('error', error)
    loading.value = false
  }
}
const handleQuery = ({ page }) => {
  // tableParm.page = page
  getTableData()
}
getTableData()
defineExpose({ 'getTableData': getTableData ,handleQuery:handleQuery})
</script>
<style scoped lang='scss'>
// .paging {
//   position: relative;
//   display: flex;
//   justify-content: flex-end;
// }
::v-deep .el-pagination__sizes {
  .is-focus.el-input__wrapper {
    // border: none;
    // box-shadow: none !important;
  }
  .el-input {
    width: 100px !important;
  }
  .el-input__wrapper {
    // box-shadow: none;
  }
}
// ::v-deep .is-first {
//   position: absolute;
//   left: 0;
// }
::v-deep .btn-prev,
::v-deep .btn-next {
  background-color: #fff !important;
}
::v-deep .el-pager {
  .number {
    background-color: #fff !important;
    border: 1px solid #1890FF;
  }
  .is-active {
    background-color: #fff !important;
    color: #1890FF !important;
  }
}
</style>