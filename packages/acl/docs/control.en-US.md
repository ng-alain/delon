---
order: 3
title: Granular permissions
type: Documents
---

## Foreword

Many times you need to control the permissions of a button. `@delon/acl` provides an `acl` directive that allows you to control the permissions of a button, table, list, etc.

## DEMO

### Role

Displayed when the button must have a user role.

```html
<button [acl]="'user'"></button>
```

Displayed when the button must have a user or manage role.

```html
<button [acl]="['user', 'manage']"></button>
```

Displayed when the button must have a user and manage role.

```html
<button [acl]="{ role: ['user', 'manage'], mode: 'allOf' }"></button>
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

The check permission is via the `can` method, and the `DelonACLConfig` contains the `preCan` method, which can be used to implement a string to distinguish roles or permissions.

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

Therefore, passing a string with the beginning of `ability.` will be considered a permission point, for example:

```html
<button acl="ability.user.edit"></button>
```
