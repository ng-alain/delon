import { InjectionToken } from '@angular/core';
import { ACLCanType, ACLType } from './acl.type';
import { ACLTYPE_PARSER_TOKEN_FACTORY } from './default-type-parser.service';

export const ACLTYPE_PARSER_TOKEN: InjectionToken<IACLTypeParser> = new InjectionToken<IACLTypeParser>('ACL_TYPEPARSER_TOKEN', {
  providedIn: 'root',
  factory: ACLTYPE_PARSER_TOKEN_FACTORY,
});

/** 定义 ACLCanType 转换到 ACLType 的转换规则，以可使用自定义的权限数据规则 */
export interface IACLTypeParser {

  /** 将 ACLCanType 转换到 ACLType */
  parse(canType: ACLCanType): ACLType;
}
