---
type: Theme
order: 3
title: Icon
---

自 ng-zorro-antd 1.7.x 以后图标发生破坏性变更，虽然带了诸多[优势](https://ng.ant.design/components/icon/zh#svg-%E5%9B%BE%E6%A0%87)，同时也带来几个劣势：

- 若采用动态加载会产生额外的HTTP请求
- 若静态加载需要逐一注册图标
- `st` 组件的 `format` 参数无法直接指定图标

ng-alain 默认使用静态加载的做法，毕竟后端使用图标相对于比较有限，即使将 svg 都打包进脚本相比较之前整个 styles 体积上是所有减少，但比较并不多。

而针对以上问题，ng-alain 提供几种方案。

## 使用icon插件（推荐）

**尽可能**从项目中分析并生成静态 Icon，插件会自动在 `src` 目录下生成两个文件：

- `src/style-icons.ts` 自定义部分无法解析（例如：远程菜单图标）
- `src/style-icons-auto.ts` 命令自动生成文件

> 自动排除 [ng-zorro-antd](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/nz-icon.service.ts#L6) 和 [@delon](https://github.com/ng-alain/delon/blob/master/packages/theme/src/theme.module.ts#L33) 已经加载的图标。

```bash
ng g ng-alain:plugin icon
```

同时，需要手动在 `startup.service.ts` 中导入：

```ts
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

@Injectable()
export class StartupService {
  constructor(iconSrv: NzIconService) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }
}
```

**有效语法**

```html
<i class="anticon anticon-user"></i>
<i class="anticon anticon-question-circle-o"></i>
<i class="anticon anticon-spin anticon-loading"></i>
<i nz-icon class="anticon anticon-user"></i>
<i nz-icon type="align-{{type ? 'left' : 'right'}}"></i>
<i nz-icon [type]="type ? 'menu-fold' : 'menu-unfold'" [theme]="theme ? 'outline' : 'fill'"></i>
<i nz-icon [type]="type ? 'fullscreen' : 'fullscreen-exit'"></i>
<i nz-icon type="{{ type ? 'arrow-left' : 'arrow-right' }}"></i>
<i nz-icon type="filter" theme="outline"></i>
<nz-input-group [nzAddOnBeforeIcon]="focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'"></nz-input-group>
```

## 动态加载

[动态加载](https://ng.ant.design/components/icon/zh#%E9%9D%99%E6%80%81%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD)，这是为了减少包体积而提供的方式。当 NG-ZORRO 检测用户想要渲染的图标还没有静态引入时，会发起 HTTP 请求动态引入。你只需要配置 `angular.json` 文件：

```json
{
  "assets": [
    {
      "glob": "**/*",
      "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
      "output": "/assets/"
    }
  ]
}
```

## 动态使用

不管是静态或动态加载，依然无法解决原始方法 `class="anticon anticon-"` 的便利性，毕竟字符串就是字符串并非 Angular 模板无法被解析，而针对这个问题，提供两种解决办法。

### 类样式

事实上所有 Antd 图标都可以在 [iconfont](http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402) 找得到，可以点选自己需要的图标并生成相应的 css 文件或 cdn，最后在项目中可以直接使用 `1.7.0` 之前的写法。

> **注意：** 在项目编辑里加上 `anticon anticon-` 前缀才能同之前的类名保持一致。

```
// angular.json
"styles": [
  "src/iconfont.css"
],
```

如果非cnd还需要将相应的 icon 图标文件复制到 `assets` 目录下，同时修改 `iconfont.css` 中 `@font-face` 对应的 url 路径。

### @angular/elements

动态加载的另一种方式是使用 @angular/elements，只需要 `nz-icon` 指令重新封装成组件。

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'nz-icon',
  template: `<i nz-icon [type]="type"></i>`,
})
export class IconComponent {
  @Input()
  type: string;
}
```

同时在根模块里注册它。

```ts
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  entryComponents: []
})
export class AppModule {
  constructor(injector: Injector) {
    customElements.define('nz-icon', createCustomElement(IconComponent, { injector }));
  }
}
```

最后。

```ts
@Component({
  selector: 'app-demo',
  template: `
  <div [innerHTML]="value"></div>
  `,
})
export class DemoComponent {

  constructor(private san: DomSanitizer) { }

  value = this.san.bypassSecurityTrustHtml(
    `icon: <nz-icon type="bell"></nz-icon>`,
  );
}
```
