import { InjectionToken } from '@angular/core';
import { ITokenModel } from '../token/interface';
import { DA_STORE_TOKEN_LOCAL_FACTORY } from './local-storage.service';

export const DA_STORE_TOKEN = new InjectionToken<IStore>('AUTH_STORE_TOKEN', {
  providedIn: 'root',
  factory: DA_STORE_TOKEN_LOCAL_FACTORY,
});

// tslint:disable-next-line: interface-name
export interface IStore {
  get(key: string): ITokenModel;

  set(key: string, value: ITokenModel): boolean;

  remove(key: string);
}
