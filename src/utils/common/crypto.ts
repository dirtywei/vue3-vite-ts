import CryptoJS from 'crypto-js'

const CryptoSecret = import.meta.env.VITE_SECRET_KEY || '_DirtyWei'

/**
 * 加密数据
 * @param data - 数据
 */
export function enCrypto(data: any, secret: string = CryptoSecret) {
  const newData = JSON.stringify(data)
  return CryptoJS.AES.encrypt(newData, secret).toString()
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function deCrypto(cipherText: string, secret: string = CryptoSecret) {
  const bytes = CryptoJS.AES.decrypt(cipherText, secret)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  if (originalText) return JSON.parse(originalText)

  return null
}
