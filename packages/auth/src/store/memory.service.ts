import { ITokenModel } from '../token/interface';
import { IStore } from './interface';

/**
 * 内存存储，关掉浏览器标签后**丢失**。
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: MemoryStore }
 * ```
 */
export class MemoryStore implements IStore {
  private cache: { [key: string]: ITokenModel | null } = {};

  get(key: string): ITokenModel {
    return this.cache[key] || ({} as ITokenModel);
  }

  set(key: string, value: ITokenModel): boolean {
    this.cache[key] = value;
    return true;
  }

  remove(key: string) {
    this.cache[key] = null;
  }
}
