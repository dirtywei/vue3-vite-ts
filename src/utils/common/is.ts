/**
 * @summary 验证字段是不是手机号码
 * @param {string} str
 * @returns {Boolean}
 */
export const isPhone = (str: string) => {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(str)
}

/**
 * @summary 验证字段是不是邮箱
 * @param {string} str
 * @returns {Boolean}
 */
export const isEmail = (str: string) => {
  const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return reg.test(str)
}

export function isUndef(val: any) {
  return typeof val === 'undefined'
}

export function isNull(val: null) {
  return val === null
}

export function isNullOrUndef(val: null) {
  return isNull(val) || isUndef(val)
}
