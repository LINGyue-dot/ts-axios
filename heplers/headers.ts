import { isPlainObject } from './util'

/************* 请求头构建 *****************/
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) return

  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) { // 规范 header 属性名
      headers[normalizedName] = headers[name]
      delete headers[name]
    }

  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

/************* 请求头构建 *****************/
/************* 响应头构建 *****************/
/**
 * 正则表达式解析字符串响应头使其为 object
 * @param headers
 */
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')

    key = key.trim().toLowerCase()
    if (!key) {
      return
    }

    if (val) {
      val = val.trim()
    }
    parsed[key] = val

  })
  return parsed
}


/************* 响应头构建 *****************/
