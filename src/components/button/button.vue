<template>
  <el-button
    :loading="loading"
    :class="[
      'button',
      round ? 'round' : '',
      'dp-fc',
      'button' + cssType,
      disabled ? ['disabled', 'disabled' + distype] : '',
    ]"
    :style="{
      width: width ? width + 'px' : '',
      height: height ? height + 'px' : '',
    }"
    @click="click"
    :link="link"
    :type="type"
  >
    <svg-icon size="16px" v-if="icon" :icon-class="icon"></svg-icon>
    <span v-if="!titleis">{{ title }}</span>
    <slot></slot>
  </el-button>
</template>

<script>
import { defineComponent } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
export default defineComponent({
  props: {
    round: {
      type: [String, Boolean],
      default: false,
    },
    //loading 显示
    loading: {
      type: Boolean,
      default: false,
    },
    // css 类型
    cssType: {
      type: [Number, String],
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 禁用时的样式
    distype: {
      type: Number,
      default: 1,
    },
    //  :debouncedis=true
    // 是否为防点击按钮 fasle为普通按钮  true为防抖按钮
    debouncedis: {
      type: Boolean,
      default: false,
    },
    // 防抖触发间隔
    delay: {
      type: Number,
      default: 500,
    },
    width: {
      type: [Number, String],
      // default: 100
    },
    height: {
      type: [Number, String],
      // default: 100
    },
    title: {
      type: String,
      default: "",
    },
    // 标题是否隐藏
    titleis: {
      type: Boolean,
      default: true,
    },
    // 图片名称
    icon: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    imgmarginRight: {
      type: Number,
      default: 12,
    },
    link: {
      type: [String, Boolean],
      default: false,
    },
  },
  setup(props, context) {
    let click = () => {
      if (!props.disabled) {
        //判断是否为禁用状态
        if (props.loading === true) {
          return;
        } //loading显示阻止执行
        if (props.debouncedis) {
          //触发防抖交验
          debounceclick();
        } else {
          context.emit("bClick");
        }
      }
    };
    const debounceclick = debounce(() => {
      context.emit("bClick");
    });
    // 防抖函数
    function debounce(fn) {
      let timer;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
        }, props.delay);
      };
    }
    return {
      click,
    };
  },
});
</script>
<style lang="scss" scoped>
.button {
  cursor: pointer;
  transition: all 0.5s;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  border-radius: 4px;
}
.round {
  border-radius: 24px !important;
}
.disabled {
  cursor: auto;
  background: rgba(219, 0, 26, 0.3) !important;
  color: #ffffff !important;
}

.disabled2 {
  background-color: rgba(219, 0, 26, 0.05) !important;
}
.svg-icon {
  margin-right: 10px;
}
.button1 {
  color: #fff;
  background-color: #1890ff;
}

.button2 {
  color: #000000;
  background-color: #fff;
}
.button3 {
  background-color: rgba(24, 144, 255, 0.1);
  border: 1px solid #1890ff;
  color: #1890ff;
}
.button4 {
  background-color: rgba(255, 61, 103, 0.1);
  border: 1px solid #ff3d67;
  color: #ff3d67;
}
.button5 {
  background-color: #ff3d67;
  color: #fff;
}
</style>
