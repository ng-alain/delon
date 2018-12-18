---
title: stringTemplateOutlet
subtitle: String Template Outlet
type: Template
---

Simplify the use of string and embedded view template.

## DEMO

Build a `page-title` component and provide a `title` property, such as:

```html
<page-title title="Starbucks"></page-title>

<page-title [title]="ptTitleTpl">
  <ng-template #ptTitleTpl>
    <a class="text-success" href="https://www.starbucks.com/" target="_blank">Starbucks</a>
  </ng-template>
</page-title>
```

Use `stringTemplateOutlet` to simplify the `title` property of the `page-title` component.

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

