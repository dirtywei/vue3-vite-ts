//接口共用参数
export const commonParameters = () => {
  let os_type: number | string = ''
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    os_type = 2
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    os_type = 1
  } else {
    os_type = 3
  }
  const parameters = {
    source_mod: 'bbs', //社区
    os_type: os_type, //客户端系统类型 1安卓 2ios 3win系统
    sdk_ver: '1.0.0', //客户端版本号:1.0.0
    dev_str: navigator.platform //设备标示
  }
  return parameters
}
