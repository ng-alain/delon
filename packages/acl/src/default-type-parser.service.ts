import { ACLCanType, ACLType } from './acl.type';
import { IACLTypeParser } from './interface';

export function ACLTYPE_PARSER_TOKEN_FACTORY(): IACLTypeParser {
  return new DefaultACLTypeParser();
}

/** 默认的权限数据规则转换器，string/string[]为角色，number/number[]为功能点，{role, ability, mode} 直接为ACLType */
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
