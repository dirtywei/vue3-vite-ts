import axios from 'axios'
import { reqReject, reqResolve, resReject, resResolve } from './interceptors'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_BASEURL,
    timeout: 12000
    // withCredentials: true, // send cookies when cross-domain requests
  }
  const service = axios.create({
    ...defaultOptions,
    ...options
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const request = createAxios()
