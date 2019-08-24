# 前端性能监控

> 简介：前端性能监控，实时上报用户浏览站点性能数据；监控的数据有 **准备新页面时间耗时、DNS查询耗时、TCP链接耗时、Request请求耗时、解析dom树耗时、页面白屏时间、domready时间、onload执行完成时间时间**；可以持续监控、评估、上报数据，及时发现瓶颈，从而优化。

* 目的：解决前端性能监控、评估、预警页面性能的状况、发现瓶颈、从而指导优化工作。
* 功能：记录**前端**性能信息。
* 范围：任何前端应用
* 使用：两行代码搞定，使用的复杂度几乎降低到了零

## 为什么要做监控页面性能？
* 1、一个页面性能差的话会影响到很多方面。在公司层面，页面性能会影响公司收益，如用户打开页面等待的太久，用户可能会直接关掉页面，或者下次不再打开了，特别是在移动端用户对页面响应延迟容忍度很低。

* 2、除此之外，页面的加载速度还将直接影响页面的SEO，网页加载速度太慢，用户会直接关掉，这直接增加页面的跳出率，当搜索引擎发现页面跳出率高，搜索引擎会认为该网站对用户的价值不高，从而降低排名。2018年7月谷歌公司新规定，页面访问时间比较长，谷歌公司将会降低该页面的搜索排名。

* 3、虽然性能很重要，但在开发迭代中，开发会有所忽略，性能会随着版本迭代而有所衰减，所以我们需要一个性能监控系统，持续监控，评估，预警页面性能的状况，发现瓶颈，从而指导优化工作。

* 4、页面性能的评估与监控有很多成熟优秀的工具 ，比如gtmetrix 网站，他可以同时查多个分析工具的的结果，会提供许多的建议。

* 5、 但这种方式与真实情况偏离，无法反馈某个地区的整体速度，慢速用户多少，无法反映性能的波动情况，另外除了白屏之类的，我们还有一些功能性的测速，比如页面可点击时间，广告展示的时间等等，这些都是无法模拟监控的。

* 6、为了持续监控不同网络环境下用户访问情况与页面各功能可用情况，我们选择在页面上植入JS来监控线上真实用户数据。具体做法就是用一段代码将用户的数据上报到我们的服务器，通过一个系统将数据汇总，处理，最后图形化数据，方便我们查看各个页面等性能。

## 特点
* 可拔插
* 代码侵入量小
* 使用灵活方便

## 快速启动

``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
npm run dev
```
此时，浏览器打开，输入网址http://localhost:10300, 进入 **性能监控测试页面**。

### 使用
```
import PerformanceMonitor from './plugins/performanceMonitor';

Vue.use(PerformanceMonitor, {
    reportUrl: "http://localhost:10300/performanceMonitor",
    appId: "performanceMonitor-1559318109525",
    appName: "performanceMonitor",
    env: "dev"
});
```

## 配置参数 options

属性|说明|类型|默认值|是否可以为空
--|:--:|--:|--:|--:
reportUrl|性能上报地址|String|http://localhost:10300/performanceMonitor|N|
env|环境：dev、test、uat、pro|String|dev|Y
appId|项目ID|String||Y
appName|项目名称|String||Y
timeSpan|发送数据时的时间戳|Number|每次取当前的时间戳|Y|
userAgent|userAgent|String|userAgent|Y|
isSendBeacon|是否使用高级浏览器支持的 navigator.sendBeacon方法，这个方法可以用来发送一些小量数据，该方法是异步的，且在浏览器关闭请求也照样能发送请求，特别适合上报统计的场景。不支持时使用img的方式上报|Boolean|false|N|


## 警告
* 本项目仅用于学习练习
* 本项目还不完善，仍处在开发中，不承担任何使用后果
* 本项目代码开源[MIT](https://github.com/sky9102/performance-monitor/blob/master/LICENSE)，项目文档采用 [署名-禁止演绎 4.0 国际协议许可](https://creativecommons.org/licenses/by-nd/4.0/deed.zh)


## 问题
* 开发者有问题或者好的建议可以用[Issues](https://github.com/sky9102/performance-monitor/issues)反馈交流，请给出详细信息。
* 如果有问题需要提问，请在提问前先完成以下过程：
    * 请仔细阅读本项目文档，查看能否解决；
    * 请提问前尽可能做一些DEBUG或者思考分析，然后提问时给出详细的错误相关信息以及个人对问题的理解。

## License
[MIT](https://github.com/sky9102/performance-monitor/blob/master/LICENSE) Copyright (c) 2019 [sky9102](https://github.com/sky9102)
