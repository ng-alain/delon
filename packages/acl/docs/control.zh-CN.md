---
order: 3
title: 粒度控制
type: Documents
---

## 写在前面

很多时候需要对某个按钮进行权限控制，`@delon/acl` 提供一个 `acl` 指令，可以利用角色或权限点对某个按钮、表格、列表等元素进行权限控制。

## 原理

`[acl]` 默认会在目标元素上增加一个 `acl__hide` 样式，利用 `display: none` 来隐藏未授权元素，它是一个简单、又高效的方式。

以此相对应的 `*aclIf` 是一个结构型指令，它类似 `ngIf` 在未授权时会不渲染该元素。**注：** 为了保持简洁它并不支持 `acl-ability` 权限点配置。

## 示例

### 角色

按钮必须拥有 user 角色显示。

```html
<button [acl]="'user'"></button>
<button *aclIf="'user'"></button>
```

按钮必须拥有 user 或 manage 角色显示。

```html
<button [acl]="['user', 'manage']"></button>
<button *aclIf="['user', 'manage']"></button>
```

按钮必须拥有 user 和 manage 角色显示。

```html
<button [acl]="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
<button *aclIf="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
```

当拥有 user 角色显示文本框，未授权显示文本。

```html
<input nz-input *aclIf="'user'; else unauthorized">
<ng-template #unauthorized>{{user}}</ng-template>
```

### 权限点

按钮必须拥有 10 权限点显示。

```html
<button [acl]="10"></button>
```

acl 指令为了能所传递的值是角色还是权限点，所以以 `string` 类型表示角色、`number` 类型表示权限点，若权限点为字符串，可使用以下写法。

```html
<button acl [acl-ability]="'USER-EDIT'"></button>
```

使用 `mode: 'allOf'` 表示必须同时拥有。

- `oneOf` 表示只须满足角色或权限点数组中的一项算有效（默认）
- `allOf` 表示必须满足所有角色或权限点数组算有效

按钮必须拥有 `10` 和 `USER-EDIT` 权限点时显示。

```html
<button [acl]="{ ability: [10, 'USER-EDIT'], mode: 'allOf' }"></button>
```

**字符串型权限点**

检查权限是通过 `can` 方法，`DelonACLConfig` 包含 `preCan` 方法，可以利用该方法来实现一个字符串区分角色或权限点。

```ts
export function fnDelonACLConfig(): DelonACLConfig {
  return {
    ...new DelonACLConfig(),
    ...{
      preCan: (roleOrAbility: ACLCanType) => {
        const str = roleOrAbility.toString();
        return str.startsWith('ability.') ? { ability: [ str ] } : null;
      }
    } as DelonACLConfig
  };
}
```

因此，当传递一个带有 `ability.` 开头的字符串会被认为这是一个权限点，例如：

```html
<button acl="ability.user.edit"></button>
```