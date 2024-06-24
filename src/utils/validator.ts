// 验证手机号
export const checkMobile = (rule: any, value: any, callback: any) => {
  const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
  if (regMobile.test(value)) {
      return callback()
  }
  return callback(new Error('请输入正确的手机号'))
}