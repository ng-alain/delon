import { IStore } from './interface';
import { ITokenModel } from '../token/interface';

/**
 * 内存存储，关掉浏览器标签后**丢失**。
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

  remove(key: string): void {
    this.cache[key] = null;
  }
}
