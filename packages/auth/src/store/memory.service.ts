import { ITokenModel } from '../token/interface';
import { IStore } from './interface';

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
