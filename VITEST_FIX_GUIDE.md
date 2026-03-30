# Vitest 迁移后续修复指南

## 当前状态

| 命令 | 状态 | 说明 |
|---|---|---|
| `yarn run test` | ✅ 通过 | Karma 测试运行成功 |
| `yarn run test:vi` | ⏳ 待修复 | 需要修复 TypeScript 编译错误 |
| `yarn run lint` | ✅ 通过 | ESLint 检查无错误 |

## 需要修复的 TypeScript 错误

运行 `yarn run test:vi` 时会遇到以下 TypeScript 编译错误：

### 1. `done()` 回调类型冲突（~200+ 处）

**错误**：
```
TS2349: This expression is not callable.
Type 'TestContext' has no call signatures.
```

**原因**：
- Vitest 的 `it` 函数签名与 Angular Testing 不兼容
- Vitest 的 `it` 第一个参数是 `TestContext`，不是 `done` 回调

**解决方案**：
改用 `async/await` 替代 `done()` 回调：

```typescript
// 旧代码（Jasmine）
it('should work', (done) => {
  service.getData().subscribe(() => {
    expect(true).toBe(true);
    done();
  });
});

// 新代码（Vitest）
it('should work', async () => {
  await new Promise(resolve => {
    service.getData().subscribe(() => {
      expect(true).toBe(true);
      resolve(undefined);
    });
  });
});

// 或使用 fakeAsync
it('should work', fakeAsync(() => {
  let result: any;
  service.getData().subscribe(r => result = r);
  tick();
  expect(result).toBeDefined();
}));
```

**受影响的文件**（部分列表）：
- `packages/abc/hotkey/hotkey.spec.ts`
- `packages/abc/notice-icon/notice-icon.spec.ts`
- `packages/abc/observers/observer-size.spec.ts`
- `packages/abc/st/test/st-data-source.spec.ts`
- `packages/abc/xlsx/xlsx.spec.ts`
- `packages/acl/src/acl.service.spec.ts`
- `packages/auth/src/token/*.spec.ts`
- `packages/cache/src/*.spec.ts`
- `packages/mock/src/mock.interceptor.spec.ts`
- `packages/theme/src/services/**/*.spec.ts`
- `packages/util/**/*.spec.ts`

### 2. Angular 模板编译错误（~50 处）

**错误**：
```
NG8001: 'sf' is not a known element
NG8002: Can't bind to 'ngModelEnd' since it isn't a known property
```

**原因**：
- 测试组件的 template 中引用了未导入的组件
- 缺少必要的 NgModule imports

**解决方案**：
在 `TestBed.configureTestingModule` 中添加缺失的 imports：

```typescript
// 旧代码
TestBed.configureTestingModule({
  declarations: [TestComponent],
  imports: [FormsModule]
});

// 新代码
TestBed.configureTestingModule({
  declarations: [TestComponent],
  imports: [
    FormsModule,
    SFComponent,  // 添加缺失的组件
    NO_ERRORS_SCHEMA  // 或使用 schema 跳过检查
  ]
});
```

**受影响的文件**（部分列表）：
- `packages/abc/cell/cell.spec.ts`
- `packages/abc/date-picker/range.directive.spec.ts`
- `packages/form/spec/base.spec.ts`
- `packages/theme/layout-default/*.spec.ts`

### 3. TypeScript 严格模式错误（~30 处）

**错误**：
```
TS2532: Object is possibly 'undefined'.
TS2554: Expected 0 arguments, but got 1.
```

**原因**：
- 模板中访问可能为 undefined 的属性
- 事件处理器参数类型不匹配

**解决方案**：

```typescript
// 错误 1: Object is possibly 'undefined'
template: `{{ data.result.text }}-{{ data.options.widget.data }}`
// 修复: 使用可选链或非空断言
template: `{{ data.result?.text }}-{{ data.options?.widget?.data }}`
// 或在 tsconfig 中关闭严格模式

// 错误 2: Expected 0 arguments, but got 1
(valueChange)="valueChange($event)"
// 修复: 确保组件方法接受参数
valueChange(event: any) { }
// 或修改模板
(valueChange)="valueChange()"
```

**受影响的文件**（部分列表）：
- `packages/abc/cell/cell.spec.ts`
- `packages/abc/notice-icon/notice-icon.spec.ts`
- `packages/abc/reuse-tab/reuse-tab.component.spec.ts`
- `packages/abc/se/se.spec.ts`
- `packages/theme/src/services/modal/modal.spec.ts`

### 4. 其他错误

**错误**：
```
NG2007: Class is using Angular features but is not decorated.
TS2345: Argument of type '...' is not assignable to parameter of type '...'.
```

**解决方案**：
根据具体错误逐个修复。

## 修复步骤

### 步骤 1：修复 `done()` 回调（最高优先级）

1. 创建自动化脚本：
   ```bash
   # 搜索所有使用 done() 的文件
   grep -r "done()" packages/**/*.spec.ts
   ```

2. 手动或脚本替换：
   - 优先使用 `fakeAsync` + `tick()`
   - 或改用 `async/await`

### 步骤 2：修复 Angular 模板错误

1. 在 `TestBed.configureTestingModule` 中添加缺失的 imports
2. 或使用 `NO_ERRORS_SCHEMA` 跳过检查（不推荐）

### 步骤 3：修复 TypeScript 严格模式错误

1. 使用可选链 `?.` 或非空断言 `!`
2. 确保组件方法签名正确

### 步骤 4：逐步扩大测试范围

修复一个模块后，将该模块的 spec 文件添加到 `tsconfig.spec-vi.json`：

```json
{
  "include": [
    "**/*.d.ts",
    "abc/auto-focus/auto-focus.directive.spec.ts",
    "util/format/string.spec.ts",  // 新增
    "util/other/deep.spec.ts"      // 新增
  ]
}
```

然后运行：
```bash
yarn run test:vi
```

## 自动化修复脚本

### 修复 `done()` 回调

```bash
# 查找所有使用 done() 的文件
find packages -name "*.spec.ts" -exec grep -l "done()" {} \;

# 手动修复这些文件
```

### 批量添加 imports

```bash
# 查找所有 NG8001 错误对应的组件
# 手动添加到 TestBed.configureTestingModule
```

## 验证

修复后运行：
```bash
# 运行 Vitest 测试
yarn run test:vi

# 期望结果
# ✅ 编译成功
# ✅ 测试通过
```

## 参考资源

- [Vitest 迁移指南](https://vitest.dev/guide/migration.html)
- [Angular Testing](https://angular.dev/guide/testing)
- [Jasmine to Vitest Migration](https://vitest.dev/guide/migration.html#jest-jasmine)

## 总结

修复这些预存问题需要一定时间，建议按模块逐个修复：

1. **先修复 util 包**（纯函数，无 Angular 依赖）
2. **再修复 auth/cache 包**（简单的服务测试）
3. **最后修复 abc/form/theme 包**（复杂的组件测试）

完成所有修复后，可以将 `tsconfig.spec-vi.json` 的 include 改为 `"**/*.spec.ts"`，完全迁移到 Vitest。
