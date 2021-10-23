/**
 * NOTE：`ACLType` 类型可能会被其他类库所引用，为了减少类库间彼此的依赖性，其他类库会以复制的形式存在
 * 当这里有变化时，请务必同步更新，涉及：`MenuService.acl`、`util.AlainACLType`
 * TODO: 尝试增加 `@delon/core` 类库用于处理这种通用型
 */

import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import type { ACLService } from './acl.service';

export interface ACLType {
  /**
   * 角色
   */
  role?: string[];
  /**
   * 权限点
   */
  ability?: number[] | string[];

  /**
   * Validated against, default: `oneOf`
   * - `allOf` the value validates against all the roles or abilities
   * - `oneOf` the value validates against exactly one of the roles or abilities
   */
  mode?: 'allOf' | 'oneOf';

  /**
   * 是否取反，即结果为 `true` 时表示未授权
   */
  except?: boolean;

  [key: string]: NzSafeAny;
}

export type ACLCanType = number | number[] | string | string[] | ACLType;

export type ACLGuardFunctionType = (srv: ACLService, injector: Injector) => Observable<ACLCanType>;
export type ACLGuardType = ACLCanType | Observable<ACLCanType> | ACLGuardFunctionType;
