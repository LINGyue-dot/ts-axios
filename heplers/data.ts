import { isPlainObject } from './util'

/******** 处理请求数据 ************/

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/******** 处理请求数据 ************/
/******** 处理响应数据 ************/
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)

    } catch (e) {
      //
    }
  }
  return data

}


/******** 处理请求数据 ************/
