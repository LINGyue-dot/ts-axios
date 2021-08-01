# ts-axios
typescript reconstruct axios



参考 https://coding.imooc.com/class/330.html

以下文档只是本人对其的精练总结取核心思想



## 前置

axios 本质上是对 XMLHttpRequest 的一层封装



### Ajax 与 XMLHttpRequest 区别

Ajax 的核心技术是 XMLHttpRequest 对象，也是就利用该对象发送一个 Ajax 请求 。

也就是说 Ajax 是一个技术方案，利用了 html css js 与 xhr 对象

而 XMLHttpRequest 对象使得浏览器发送 http 请求与接收 http 响应





## 基础封装

由于是对 XMLHttpRequest 的再一层基础封装实际难度并不高，只是需要注意部分细节

基本总思路就是将传入的参数进行一些处理再传入 XMLRequest 对象中





### url 封装

主要针对有携带 `param` 的请求，需要将 `param` 以 url 编码格式加入到 url 中例如 `'@' ` 最终转成`/%40/g` 添加到 url 中





### 请求头

基本与总思路一致，只需注意需要自动修改 `Content-Type` 的值



### 请求数据

生成 body 里的 data 即 `new XMLHttpRequest().send(data) ` 里的 data

由于需要字符串类型所以 JSON 类型直接使用 `JSON.stringify(stringData)` 即可





### 获取响应数据

由于 axios 返回的是 Promise 所以对请求函数做 Promise 封装，同时用 XMLHttpRequest 响应回调函数 `onreadystatechange` 来接收参数



### 响应头

获取到的是字符串所以需要用正则来将其生成对象



### 响应数据

同样获取到的是字符串，所以需要将其转换为对象，但是是 JSON 格式的字符串，所以可直接使用 `JSON.parse(jsonStringData)` 直接转换





 

