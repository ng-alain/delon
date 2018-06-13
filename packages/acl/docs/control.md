---
order: 3
title: 粒度控制
type: Documents
---

## 写在前面

很多时候需要对某个按钮进行权限控制，`@delon/acl` 提供一个 `acl` 指令，可以利用角色或权限点对某个按钮、表格、列表等元素进行权限控制。

## 示例

**角色名**

```html
按钮必须拥有 user 角色显示
<button [acl]="'user'"></button>
```

```html
按钮必须拥有 user 或 manage 角色显示
<button [acl]="['user', 'manage']"></button>
```

```html
按钮必须拥有 user 和 manage 角色显示
<button [acl]="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
```

**权限点**

```html
按钮必须拥有 10 权限点显示
<button [acl]="10"></button>
另一种写法
<button acl [acl-ability]="10"></button>
```

```html
按钮必须拥有 10 和 11 权限点时显示
<button [acl]="{ ability: [10, 11], mode: 'allOf' }"></button>
```
