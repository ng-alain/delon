---
title: error-collect
subtitle: 表单异常消息采集器
order: 90
cols: 1
module: AdErrorCollectModule
---

一个简单的表单异常消息采集器，点击图标自然跳转相应的位置；必须是一个标准的表单，例如：

```html
<form [formGroup]="form">
    <div nz-form-control [nzValidateStatus]="name">
        <nz-input formControlName="name" [nzPlaceHolder]="'required'" [nzSize]="'large'"></nz-input>
    </div>
    <error-collect></error-collect>
</form>
```
