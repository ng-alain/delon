---
title: lodop
subtitle: Lodop打印
order: 130
cols: 1
module: AdLodopModule
---

Lodop 打印的基础实现，若需要商用还需要单独购买KEY。同时感谢 [lodop](http://c-lodop.com/) 为 ng-alain 免费提供正版KEY。

> 示例的**运行前提必须安装**[Lodop插件](http://c-lodop.com/download.html)。

## API

### LodopService

参数 | 说明 | 类型 | 默认值
----|------|-----|------
cog | 获取或设置配置项 | `AdLodopConfig` | -
events | 打印过程通知 | `Observable<LodopPrintResult>` | -
lodop | 获取 Lodop 对象 | `Observable<LodopResult>` | -

**受控 Lodop 对象加载成功后辅助API**

参数 | 说明 | 类型 | 默认值
----|------|-----|------
printer | 获取打印机列表  | `string[]` | -
attachCode() | 附加代码至 `lodop` 对象上  | `void` | -
design() | 打开打印设计关闭后自动返回代码 | `string[]` | -
print() | 立即打印，一般用于批量套打 | `void` | -

### LodopPrintResult

参数 | 说明 | 类型 | 默认值
----|------|-----|------
ok | 是否打印成功 | `boolean` | -
error | 错误信息 | `string` | -
code | 代码 | `string` | -
item | 动态参数上下文对象 | `any` | -
parser | 代码解析表达式 | `RegExp` | -

### LodopResult

参数 | 说明 | 类型 | 默认值
----|------|-----|------
ok | 表示是否加载成功 | `boolean` | -
status | 状态码 | `string` | -
lodop | Lodop 对象 | `Lodop` | -
error | 错误明细 | `any` | -

### AdLodopConfig

参数 | 说明 | 类型 | 默认值
----|------|-----|------
companyName | 注册单位名称 | `string` | ``
license | 主注册号 | `string` | -
licenseA | 附加注册号A | `string` | -
licenseB | 附加注册号B | `string` | -
url | Lodop 远程脚本URL地址，**注意**务必使用 `name` 属性指定变量值 | `string` | `//localhost:8443/Lodopfuncs.js`
name | Lodop 变量名 | `string` | `LODOP`
checkMaxCount | 检查次数，默认 `100`，当检查超过时视为异常，这是因为 Lodop 需要连接 WebSocket | `number` | `100`
