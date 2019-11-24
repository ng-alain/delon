import { ITokenModel } from '../token/interface';
import { IStore } from './interface';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class CookieStorageStore implements IStore {
  constructor(private cookieService: CookieService) {}

  get(key: string): ITokenModel {
    return JSON.parse(this.cookieService.get(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel | null): boolean {
    this.cookieService.set(key, JSON.stringify(value));
    return true;
  }

  remove(key: string) {
    this.cookieService.delete(key);
  }
}
