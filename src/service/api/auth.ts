import { request } from '../http'

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(data: any) {
  return request.post('/auth/login', data)
}
