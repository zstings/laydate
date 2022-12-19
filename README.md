
## 概要
一款被广泛使用的高级 Web 日历组件，颜值与功能兼备，足以应对日期相关的各种业务场景。其中主要以：年选择器、年月选择器、日期选择器、时间选择器、日期时间选择五种类型的选择方式为基本核心，并且均支持范围选择（即双控件）。内置强劲的自定义日期格式解析和合法校正机制，含中文版和国际版，主题简约却又不失灵活多样。内部采用是零依赖的原生 JavaScript 编写，可作为独立组件使用。

## 官网
[http://www.layui.com/laydate/](http://www.layui.com/laydate/)

## 相关
[文档](http://www.layui.com/doc/modules/laydate.html)

# 增补部分 5.4.0

```js
{
  // 对特定日期禁用
  disabled: ['2022-12-19', '2022-12-20'],
  // 禁用周末（周六日）
  weekend: 'disabled',
  // 自定义配置时分秒
  timesOption: [
      [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      [0, 30]
  ],
}
```