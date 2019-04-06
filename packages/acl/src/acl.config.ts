import { Injectable } from '@angular/core';
import { ACLCanType, ACLType } from './acl.type';

@Injectable({ providedIn: 'root' })
export class DelonACLConfig {
  /**
   * 路由守卫失败后跳转，默认：`/403`
   */
  guard_url?: string = '/403';

  /**
   * `can` 执行前回调
   */
  preCan?: (roleOrAbility: ACLCanType) => ACLType;
}
