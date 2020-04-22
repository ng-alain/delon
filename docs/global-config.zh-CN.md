---
order: 90
title:
  en-US: Global Configuration
  zh-CN: 全局配置项
type: Dev
---

我们给众多组件添加了**全局配置**功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。

## 如何使用

想要为某些组件提供默认配置项，请在根注入器中根据注入令牌 `ALAIN_CONFIG` 提供一个符合 `AlainConfig` 接口的对象，例如：

```typescript
// delon.module.ts
import { AlainConfig, ALAIN_CONFIG } from '@delon/theme';

const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

@NgModule({
  providers: [
    { provide: ALAIN_CONFIG, useValue: alainConfig },
  ],
})
export class DelonModule {}
```

这些全局配置项将会被注入 `AlainConfigService` 当中并保存。

### 提供模板

一些组件支持传递模板 `TemplateRef<T>` 作为默认参数，我们来了解一下如何做到这一点。

最简单的方式是在应用的根组件中调用 `AlainConfigService` 的相关方法：

```typescript
export class AppComponent implements OnInit {
  @ViewChild('nzIndicatorTpl', { static: true }) nzIndicator!: TemplateRef<void>;

  constructor(private readonly alainConfigService: AlainConfigService) {}

  ngOnInit(): void {
    this.alainConfigService.set('st', { ps: 3 });
  }
}
```

然而这种方式可能会让你的 AppComponent 相当臃肿，并违反关注分离原则。

因此，当你的项目比较大时，我们建议你使用一个 `FactoryProvider`，如下所示：
