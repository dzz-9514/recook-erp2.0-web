<!--  线  -->
<template>
  <div>
    <div :id="id" :class="className" :style="{ height, width }" />
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "barChart",
  },
  className: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "200px",
    // required: true,
  },
  height: {
    type: String,
    default: "200px",
    // required: true,
  },
  chartTimes: {
    type: Array,
    default() {
      return [];
    },
  },
  chartNums: {
    type: Array,
    default() {
      return [];
    },
  },
});

const options = reactive({
  tooltip: {
    trigger: "axis",
    valueFormatter: (item: any) => {
      return item + "万";
    },
  },
  grid: { left: "33px", right: "33px", bottom: "3%", containLabel: true },
  xAxis: {
    type: "category",
    data: props.chartTimes,
    boundaryGap: false,
    axisLabel: {
      interval: 1, // 显示全部刻度
    },
  },
  yAxis: {
    type: "value",
    data: [0, 10, 20, 40, 50, 60, 70],
    axisLabel: {
      show: true,
      formatter: "{value}万",
    },
  },
  series: [
    {
      name: "发佣数量",
      data: props.chartNums,
      type: "line",
    },
  ],
});
const chart = ref<any>("");
onMounted(() => {
  // 图表初始化
  chart.value = markRaw(
    echarts.init(document.getElementById(props.id) as HTMLDivElement)
  );

  chart.value.setOption(options);

  // 大小自适应
  window.addEventListener("resize", () => {
    chart.value.resize();
  });
});
const downloadEchart = () => {
  // 获取画布图表地址信息
  const img = new Image();
  img.src = chart.value.getDataURL({
    type: "png",
    pixelRatio: 1,
    backgroundColor: "#fff",
  });
  // 当图片加载完成后，生成 URL 并下载
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const link = document.createElement("a");
      link.download = `业绩柱状图.png`;
      link.href = canvas.toDataURL("image/png", 0.9);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };
};
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  .download {
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
}
</style>
