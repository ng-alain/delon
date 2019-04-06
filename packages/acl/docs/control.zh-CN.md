---
order: 3
title: 粒度控制
type: Documents
---

## 写在前面

很多时候需要对某个按钮进行权限控制，`@delon/acl` 提供一个 `acl` 指令，可以利用角色或权限点对某个按钮、表格、列表等元素进行权限控制。

## 示例

### 角色

按钮必须拥有 user 角色显示。

```html
<button [acl]="'user'"></button>
```

按钮必须拥有 user 或 manage 角色显示。

```html
<button [acl]="['user', 'manage']"></button>
```

按钮必须拥有 user 和 manage 角色显示。

```html
<button [acl]="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
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