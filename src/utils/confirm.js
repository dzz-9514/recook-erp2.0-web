import {ElMessage,ElMessageBox} from 'element-plus'
// element的弹框confirm的二次封装
export function handleCofirm(text = '此操作将永久删除该条数据, 是否继续?', type = 'warning',title="删除确认") {
  return ElMessageBox({
    title,
    message: text, //MessageBox 消息正文内容
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    // closeOnClickModal: false, //是否可通过点击遮罩关闭
    showCancelButton: true, //是否显示取消按钮
    type: type,
    // center: true
  })
}
// 提示框的二次封装
export const handleMessage = function (text = '此操作无法进行!', type = 'warning',showClose= false) {
  ElMessage({
    message: text,
    type: type,
    showClose: showClose,
  });
}