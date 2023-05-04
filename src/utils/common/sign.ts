/**
 * @author DirtyWei
 * @fileoverview 签名工具函数
 * @description ACII排序=>转成字符串=>转义特殊字符=>签名
 */

import sha1 from 'crypto-js/sha1'
import Hex from 'crypto-js/enc-hex'
import { Params } from '@/types/common'

function sortByACII(target: Params) {
  const arr = []
  let num = 0
  for (const i in target) {
    arr[num] = i
    num++
  }
  const sortArr = arr.sort()
  const sortTarget: Params = {}
  for (const i in sortArr) {
    sortTarget[sortArr[i]] = target[sortArr[i]]
  }
  return sortTarget
}

function transString(target: Params): string {
  const arr = []
  for (const key in target) {
    arr.push(unifiedEncode(key) + '=' + unifiedEncode(target[key]))
  }
  return arr.join('&')
}

function unifiedEncode(str: string) {
  let escapeCode = encodeURIComponent(str)
  escapeCode = escapeCode.replace(/@/g, '%40')
  escapeCode = escapeCode.replace(/\*/g, '%2A')
  escapeCode = escapeCode.replace(/\+/g, '%2B')
  escapeCode = escapeCode.replace(/\//g, '%2F')
  escapeCode = escapeCode.replace(/!/g, '%21')
  escapeCode = escapeCode.replace(/\(/g, '%28')
  escapeCode = escapeCode.replace(/\)/g, '%29')
  escapeCode = escapeCode.replace(/'/g, '%27')
  escapeCode = escapeCode.replace(/~/g, '%7E')
  return escapeCode
}

export default function sign(params: Params, secret: string): string {
  params = sortByACII(params)
  const toString = transString(params)
  return sha1(toString + secret).toString(Hex)
}
