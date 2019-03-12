import { InjectionToken } from '@angular/core';
import { ACLCanType, ACLType } from './acl.type';

export declare const ACLTYPE_PARSER_TOKEN: InjectionToken<IACLTypeParser>;

/** 定义 ACLCanType 转换到 ACLType 的转换规则，以可使用自定义的权限数据规则 */
export interface IACLTypeParser {

  /** 将 ACLCanType 转换到 ACLType */
  parse(canType: ACLCanType): ACLType;
}

/** 默认的权限数据规则转换器，string/string[]为角色，number/number[]为功能点，{role, ability, mode} 直接为ACLType */
export class DefaultACLTypeParser implements IACLTypeParser {

  /** 将 ACLCanType 转换到 ACLType */
  parse(canType: ACLCanType): ACLType {

    // 数值类型，认为是功能点
    if (typeof canType === 'number') {
      return {ability: [canType]};
    }
    if (Array.isArray(canType) && canType.length > 0 && typeof canType[0] === 'number') {
      return {ability: canType};
    }

    // 字符串类型，认为是角色
    if (typeof canType === 'string') {
      return {role: [canType]};
    }
    if (Array.isArray(canType) && canType.length > 0 && typeof canType[0] === 'string') {
      return {role: canType as string[]};
    }

    return canType as ACLType;
  }
}
