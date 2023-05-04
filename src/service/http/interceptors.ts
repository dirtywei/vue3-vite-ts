import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { AxiosRejectError, resolveResError } from './helpers'
// import type { RequestConfig } from '~/typings/axios'

/** 请求拦截 */
export function reqResolve(config: InternalAxiosRequestConfig) {
  /**
   * * 加上 token
   * ! 认证方案: JWT Bearer
   */
  const token = 'token'
  token && config.headers && (config.headers.Authorization = `Bearer ${token}`)

  //处理sign
  // let params = { ...config.params, ...commonParameters() }
  // const secret = import.meta.env.VITE_BASEURL_SIGN_KEY
  // delete params.sign
  // params.sign = sign(params, secret)
  // config.params = params

  return config
}

/** 请求错误拦截 */
export function reqReject(error: AxiosError) {
  console.error(error)
  return Promise.reject(error)
}

/** 响应拦截 */
export function resResolve(response: AxiosResponse) {
  // TODO: 处理不同的 response.headers
  const { data, status, statusText } = response
  if (data?.code !== 0) {
    const code = data?.code ?? status

    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, data?.message ?? statusText)
    window.alert(message)
    return Promise.reject(new AxiosRejectError({ code, message, data: data || response }))
  }
  return Promise.resolve(data)
}

/** 响应错误拦截 */
export function resReject(error: AxiosError) {
  if (!error || !error.response) {
    const code = error?.code
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, error.message)
    window.alert(message)
    return Promise.reject(new AxiosRejectError({ code, message, data: error }))
  }
  const { data, status } = error.response
  let { code, message } = data as AxiosRejectError
  code = code ?? status
  message = message ?? error.message
  message = resolveResError(code, message)
  window.alert(message)
  return Promise.reject(new AxiosRejectError({ code, message, data: error.response?.data || error.response }))
}
