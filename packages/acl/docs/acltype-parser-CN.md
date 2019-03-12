---
order: 4
title: 权限配置转换
type: Documents
---

## 写在前面
权限规则`ACLCanType` 到 `ACLType` 的转换，是由接口`IACLTypeParser`负责的，默认定义了如下规则
- `string`, `string[]` 视为角色，转换为 `{role: string/string[]}`
- `number`, `number[]` 视为权限点，转换为 `{ability: number|number[]}`
- `ACLType` 类型 `{role: string/Array<string>, ability: number|string/Array<number|string>, mode: allOf|oneOf}` 直接使用

实现代码如下：
```ts
export class DefaultACLTypeParser implements IACLTypeParser {

  /** 将 ACLCanType 转换到 ACLType */
  parse(canType: ACLCanType): ACLType {

    if (typeof canType === 'number') {
      return {ability: [canType]} as ACLType;
    }
    if (Array.isArray(canType) && canType.length > 0 && typeof canType[0] === 'number') {
      return {ability: canType as number[]} as ACLType;
    }

    if (typeof canType !== 'string' && !Array.isArray(canType)) {
      return canType as ACLType;
    }

    if (Array.isArray(canType)) {
      return {role: canType as string[]} as ACLType;
    }

    return {role: [canType]} as ACLType;
  }
}

```

## 自定义权限规则

如果需要自定义权限规则，可以通过如下步骤进行
1. 继承接口`IACLTypeParser`，实现自己的权限规则转换类
```ts
export class CustomACLTypeParser implements IACLTypeParser {
  
  parse(canType: ACLCanType): ACLType {

    // 实现自己的权限转换规则

  }

}
```

2. 在 `app.module.ts` 或 `delon.module.ts` 改变 `ACLTYPE_PARSER_TOKEN` 的注入类型

```ts

providers: [
  {provide: ACLTYPE_PARSER_TOKEN, useClass: CustomACLTypeParser}
]

```