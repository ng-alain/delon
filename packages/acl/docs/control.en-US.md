---
order: 3
title: Granular permissions
type: Documents
---

## Foreword

Many times you need to control the permissions of a button. `@delon/acl` provides an `acl` directive that allows you to control the permissions of a button, table, list, etc.

## Principle

`[acl]` adds a `acl__hide` style to the target element by default, and hides the unauthorized element with `display: none`, which is a simple and efficient way.

The corresponding `*aclIf` is a structured directive similar to `ngIf` which does not render the element when it is not authorized. **Note:** In order to keep it simple, it does not support `acl-ability` permission point configuration.

## DEMO

### Role

Displayed when the button must have a user role.

```html
<button [acl]="'user'"></button>
<button *aclIf="'user'"></button>
```

Displayed when the button must have a user or manage role.

```html
<button [acl]="['user', 'manage']"></button>
<button *aclIf="['user', 'manage']"></button>
```

Displayed when the button must have a user and manage role.

```html
<button [acl]="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
<button *aclIf="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
```

Displayed when the input muse have a user role, displayed text when it's not authorized.

```html
<input nz-input *aclIf="'user'; else unauthorized">
<ng-template #unauthorized>{{user}}</ng-template>
```

Use `except` reverse control to displayed when it's not authorized.

```html
<ng-template [aclIf]="role" except>
  <input nz-input>
</ng-template>
```

### Permission

Displayed when the button must have a 10 value permisseion.

```html
<button [acl]="10"></button>
```

In order for the acl instruction to be a role or a permission, so the value of the parameter value is `string` which mean the role, `number` which mean the permission. Use the `acl-ability` parameter if the permission is a string.

```html
<button acl [acl-ability]="'USER-EDIT'"></button>
```

- `oneOf` Must be valid against exactly one of the given permission (default).
- `allOf` Must be valid against all of the given permission

Displayed when the button must have a `10` and `USER-EDIT` permission.

```html
<button [acl]="{ ability: [10, 'USER-EDIT'], mode: 'allOf' }"></button>
```

**String permission**

The check permission is via the `can` method, and through [Global Configuration](/docs/global-config) `acl.preCan` method, which can be used to implement a string to distinguish roles or permissions.

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  acl: {
    preCan: (roleOrAbility) => {
      const str = roleOrAbility.toString();
      return str.startsWith('ability.') ? { ability: [ str ] } : null;
    }
  }
};
```

Therefore, passing a string with the beginning of `ability.` will be considered a permission point, for example:

```html
<button acl="ability.user.edit"></button>
```

## API

### *aclIf

Property  | Description    | Type     | Default
----------|----------------|----------|-------
`[aclIf]`  | `can` method parameter   | `ACLCanType` | -
`[aclIfThen]` | Display template when authorized | `TemplateRef<void> | null` | -
`[aclIfElse]` | Display template when not authorized | `TemplateRef<void> | null` | -
`[except]` | Permissions denied to display | `boolean` | `false`
