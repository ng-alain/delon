---
title: stringTemplateOutlet
subtitle: 字符串模板占位符
type: Template
---

简化字符串与嵌入式视图模板的使用方式。

## 示例

构建一个 `page-title` 组件，并提供 `title` 属性，比如：

```html
<page-title title="星巴克"></page-title>

<page-title [title]="ptTitleTpl">
  <ng-template #ptTitleTpl>
    <a class="text-success" href="https://www.starbucks.com/" target="_blank">星巴克</a>
  </ng-template>
</page-title>
```

利用 `stringTemplateOutlet` 可以简化实现 `page-title` 组件的 `title` 属性。

```ts
@Component({
  selector: 'page-title',
  template: `
  <ng-template *stringTemplateOutlet="title">{{title}}</ng-template>
  `
})
export class PageTitleComponent {
  @Input() title: string | TemplateRef<void>;
}
```

