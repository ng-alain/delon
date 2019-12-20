import { Injectable } from '@angular/core';
import { ACLCanType, ACLType } from './acl.type';

@Injectable({ providedIn: 'root' })
export class DelonACLConfig {
  /**
   * Router URL when guard fail, default: `/403`
   */
  guard_url?: string = '/403';

  /**
   * `can` before execution callback
   */
  preCan?: ((roleOrAbility: ACLCanType) => ACLType | null) | null;
}
