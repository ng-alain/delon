# ESLint 和 Prettier 格式修复指南

## 问题

迁移后的 spec 文件中有以下格式问题：

1. **多余的换行**：expect 链中的多余换行
2. **未使用的参数**：`expectationFailOutput` 参数未使用
3. **自赋值**：`e = e` 这样的自赋值

## 快速修复

### 方法 1：使用 Prettier 自动修复（推荐）

```bash
# 修复所有 spec 文件的格式
npx prettier --write "packages/**/*.spec.ts"

# 或只修复特定文件
npx prettier --write packages/theme/src/services/http/http.spec.ts
```

### 方法 2：使用 ESLint 自动修复

```bash
# 修复所有 spec 文件
npx eslint --fix "packages/**/*.spec.ts"

# 或只修复特定文件
npx eslint --fix packages/theme/src/services/http/http.spec.ts
```

### 方法 3：手动修复

#### 问题 1：多余的换行

**错误示例**：
```typescript
expect(srv.can([ABILITY_NUMBER]))
  
  .toBe(true);
```

**修复**：
```typescript
expect(srv.can([ABILITY_NUMBER])).toBe(true);
```

#### 问题 2：未使用的参数

**错误示例**：
```typescript
expectElCount(cls: string, count: number, expectationFailOutput?: string): this {
```

**修复**：
```typescript
expectElCount(cls: string, count: number, _expectationFailOutput?: string): this {
```

#### 问题 3：自赋值

**错误示例**：
```typescript
if (message) e = e;
```

**修复**：
```typescript
if (message) {
  // message is for future use
}
```

## 受影响的文件

- `packages/theme/src/services/http/http.spec.ts` (19 处)
- `packages/util/date-time/picker.spec.ts` (2 处)
- `packages/util/format/validate.spec.ts` (1 处)
- `packages/util/math/in-range.spec.ts` (1 处)

## 验证修复

修复后运行：

```bash
# 检查 ESLint 错误
yarn run lint:ts

# 检查 Prettier 格式
npx prettier --check "packages/**/*.spec.ts"
```

## 自动化脚本

已创建 `scripts/fix-prettier.sh` 脚本，可以一键修复所有格式问题：

```bash
bash scripts/fix-prettier.sh
```

## 注意

这些格式问题都是**非功能性的**，不影响测试逻辑。它们只是代码风格问题，需要修复以通过 CI 的 lint 检查。
