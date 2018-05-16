import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ACLType, ACLCanType } from './acl.type';

/**
 * 访问控制服务
 */
@Injectable()
export class ACLService {
  private roles: string[] = [];
  private abilities: (number | string)[] = [];
  private full = false;
  private aclChange: BehaviorSubject<ACLType | boolean> = new BehaviorSubject<
    ACLType | boolean
  >(null);

  /** ACL变更通知 */
  get change(): Observable<ACLType | boolean> {
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

  private parseACLType(val: string | string[] | ACLType): ACLType {
    if (typeof val !== 'string' && !Array.isArray(val)) {
      return <ACLType>val;
    }
    if (Array.isArray(val)) {
      return <ACLType>{ role: <string[]>val };
    }
    return <ACLType>{
      role: [val],
    };
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
  setAbility(abilities: (number | string)[]) {
    this.set(<ACLType>{ ability: abilities });
  }

  /**
   * 设置当前用户角色（会先清除所有）
   */
  setRole(roles: string[]) {
    this.set(<ACLType>{ role: roles });
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
  attachAbility(abilities: (number | string)[]) {
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
  removeAbility(abilities: (number | string)[]) {
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
  can(roleOrAbility: ACLCanType): boolean {
    if (this.full === true || !roleOrAbility) {
      return true;
    }

    let t: ACLType = {};
    if (typeof roleOrAbility === 'number') {
      t = { ability: [roleOrAbility] };
    } else if (
      Array.isArray(roleOrAbility) &&
      roleOrAbility.length > 0 &&
      typeof roleOrAbility[0] === 'number'
    ) {
      t = { ability: roleOrAbility };
    } else {
      t = this.parseACLType(roleOrAbility);
    }

    if (t.role) {
      if (t.mode === 'allOf') return t.role.every(v => this.roles.includes(v));
      else return t.role.some(v => this.roles.includes(v));
    }
    if (t.ability) {
      if (t.mode === 'allOf')
        return (t.ability as any[]).every(v => this.abilities.includes(v));
      else return (t.ability as any[]).some(v => this.abilities.includes(v));
    }
    return false;
  }

  /** @inner */
  parseAbility(value: ACLCanType): ACLCanType {
    if (
      typeof value === 'number' ||
      typeof value === 'string' ||
      Array.isArray(value)
    ) {
      value = <ACLType>{ ability: Array.isArray(value) ? value : [value] };
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
