import { Injectable } from '@angular/core';
import { AlainACLConfig, AlainConfigService } from '@delon/util';
import { BehaviorSubject, Observable } from 'rxjs';
import { ACL_DEFAULT_CONFIG } from './acl.config';
import { ACLCanType, ACLType } from './acl.type';

/**
 * ACL 控制服务，[在线文档](https://ng-alain.com/acl)
 *
 * 务必在根目录注册 `DelonACLModule.forRoot()` 才能使用服务
 */
@Injectable()
export class ACLService {
  private options: AlainACLConfig;
  private roles: string[] = [];
  private abilities: Array<number | string> = [];
  private full = false;
  private aclChange = new BehaviorSubject<ACLType | boolean | null>(null);

  /** ACL变更通知 */
  get change(): Observable<ACLType | boolean | null> {
    return this.aclChange.asObservable();
  }

  /** 获取所有数据 */
  get data() {
    return {
      full: this.full,
      roles: this.roles,
      abilities: this.abilities,
    };
  }

  get guard_url(): string {
    return this.options.guard_url!;
  }

  constructor(configSrv: AlainConfigService) {
    this.options = configSrv.merge('acl', ACL_DEFAULT_CONFIG)!;
  }

  private parseACLType(val: string | string[] | number | number[] | ACLType | null): ACLType {
    let t: ACLType;
    if (typeof val === 'number') {
      t = { ability: [val] };
    } else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'number') {
      t = { ability: val };
    } else if (typeof val === 'object' && !Array.isArray(val)) {
      t = { ...val };
    } else if (Array.isArray(val)) {
      t = { role: val as string[] };
    } else {
      t = { role: val == null ? [] : [val] };
    }

    return { except: false, ...t };
  }

  /**
   * 设置当前用户角色或权限能力（会先清除所有）
   */
  set(value: ACLType) {
    this.abilities = [];
    this.roles = [];
    this.add(value);
    this.aclChange.next(value);
  }

  /**
   * 标识当前用户为全量，即不受限
   */
  setFull(val: boolean) {
    this.full = val;
    this.aclChange.next(val);
  }

  /**
   * 设置当前用户权限能力（会先清除所有）
   */
  setAbility(abilities: Array<number | string>) {
    this.set({ ability: abilities } as ACLType);
  }

  /**
   * 设置当前用户角色（会先清除所有）
   */
  setRole(roles: string[]) {
    this.set({ role: roles } as ACLType);
  }

  /**
   * 为当前用户增加角色或权限能力
   */
  add(value: ACLType) {
    if (value.role && value.role.length > 0) {
      this.roles.push(...value.role);
    }
    if (value.ability && value.ability.length > 0) {
      this.abilities.push(...value.ability);
    }
  }

  /**
   * 为当前用户附加角色
   */
  attachRole(roles: string[]) {
    for (const val of roles) {
      if (!this.roles.includes(val)) {
        this.roles.push(val);
      }
    }
    this.aclChange.next(this.data);
  }

  /**
   * 为当前用户附加权限
   */
  attachAbility(abilities: Array<number | string>) {
    for (const val of abilities) {
      if (!this.abilities.includes(val)) {
        this.abilities.push(val);
      }
    }
    this.aclChange.next(this.data);
  }

  /**
   * 为当前用户移除角色
   */
  removeRole(roles: string[]) {
    for (const val of roles) {
      const idx = this.roles.indexOf(val);
      if (idx !== -1) {
        this.roles.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data);
  }

  /**
   * 为当前用户移除权限
   */
  removeAbility(abilities: Array<number | string>) {
    for (const val of abilities) {
      const idx = this.abilities.indexOf(val);
      if (idx !== -1) {
        this.abilities.splice(idx, 1);
      }
    }
    this.aclChange.next(this.data);
  }

  /**
   * 当前用户是否有对应角色，其实 `number` 表示Ability
   *
   * - 当 `full: true` 或参数 `null` 时返回 `true`
   * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
   */
  can(roleOrAbility: ACLCanType | null): boolean {
    const { preCan } = this.options;
    if (preCan) {
      roleOrAbility = preCan(roleOrAbility!);
    }

    const t = this.parseACLType(roleOrAbility);
    let result = false;
    if (this.full === true || !roleOrAbility) {
      result = true;
    } else {
      if (t.role && t.role.length > 0) {
        if (t.mode === 'allOf') {
          result = t.role.every(v => this.roles.includes(v));
        } else {
          result = t.role.some(v => this.roles.includes(v));
        }
      }
      if (t.ability && t.ability.length > 0) {
        if (t.mode === 'allOf') {
          result = (t.ability as any[]).every(v => this.abilities.includes(v));
        } else {
          result = (t.ability as any[]).some(v => this.abilities.includes(v));
        }
      }
    }

    return t.except === true ? !result : result;
  }

  /** @inner */
  parseAbility(value: ACLCanType): ACLCanType {
    if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
      value = { ability: Array.isArray(value) ? value : [value] } as ACLType;
    }
    delete value.role;
    return value;
  }

  /**
   * 当前用户是否有对应权限点
   */
  canAbility(value: ACLCanType): boolean {
    return this.can(this.parseAbility(value));
  }
}
