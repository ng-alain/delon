---
order: 1
title: Getting Started
type: Documents
---

ACL (Access Control List) is a very simple role-based permission control method, you can use in any Angular projects, a online [DEMO](//ng-alain.github.io/ng-alain/#/logics/acl)

## About ACLService

The `ACLService` service class contains a set of methods based on role permissions. For a better coding experience ng-alain has multiple components or modules that depend on it, such as `st`, `MenuService` etc.. So, when you encounter the `acl` attribute, it means the parameter value of the [can](#ACLCanType) method.

## Usage

Install `@delon/acl`:

```bash
yarn add @delon/acl
```

Import `DelonACLModule` module:

```typescript
import { DelonACLModule } from '@delon/acl';

@NgModule({
  imports: [
    DelonACLModule.forRoot()
  ]
})
export class AppModule { }
```

## API

### Parameters

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[guard_url]` | `string` | Router URL when guard fail | `/403` | ✅ |
| `[preCan]` | `(roleOrAbility: ACLCanType) => ACLType` | `can` before execution callback | - | ✅ |

> You can override them via [Global Configuration](/docs/global-config).

### ACLService

| Name | Description |
|------|-------------|
| `[change]` | Listen for ACL change notifications |
| `[data]` | Get all ACL data |
| `setFull(val: boolean)` | Whether to super administrator |
| `set(value: ACLType)` | Set current user role or permission (automatic override) |
| `setRole(roles: string[])` | Set current user role (automatic override) |
| `setAbility(abilities: (number | string)[])` | Set current user permission (automatic override) |
| `add(value: ACLType)` | Add role or permission to the current user |
| `attachRole(roles: string[])` | Attach a role to the current user |
| `attachAbility(abilities: (number | string)[])` | Attach a permission to the current user |
| `removeRole(roles: string[])` | Remove the role for the current user |
| `removeAbility(abilities: (number | string)[])` | Remove the permission for the current user |
| `can(roleOrAbility: ACLCanType)` | Whether the current user has a role |
| `canAbility(ability: ACLCanType)` | Whether the current user has a permission |

### ACLCanType

```ts
type ACLCanType = number | number[] | string | string[] | ACLType
```

### ACLType

| Name | Type | Summary | Default |
|------|------|---------|---------|
| `[role]` | `string[]` | List of role | - |
| `[ability]` | `number[], string[]` | List of permission | - |
| `[mode]` | `allOf, oneOf` | `allOf` Must be valid against all of the given permission.<br>`oneOf` Must be valid against exactly one of the given permission. | `oneOf` |
| `[except]` | `boolean` | Whether it's except, when the result is `true`, it means unauthorized | `false` |
