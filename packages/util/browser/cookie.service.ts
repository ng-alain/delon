import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export interface CookieOptions {
  path?: string;
  domain?: string;
  /**
   * Expiration time, `number` is seconds
   *
   * 过期时间，`number` 类型表示秒数
   */
  expires?: number | Date | string;
  secure?: boolean;
  HttpOnly?: boolean;
  SameSite?: boolean | 'lax' | 'strict' | 'none';
}

/**
 * A set of simple Cookie manipulation classes.
 *
 * 一组简单的 Cookie 操作类。
 */
@Injectable({ providedIn: 'root' })
export class CookieService {
  private get doc(): Document {
    return this._doc || document;
  }

  /**
   * Original cookie value
   *
   * 原始Cookie值
   */
  get cookie(): string {
    return this.platform.isBrowser ? this.doc.cookie : '';
  }

  constructor(@Inject(DOCUMENT) private _doc: any, private platform: Platform) {}

  /**
   * Get all cookie key-value pairs
   *
   * 获取所有Cookie键值对
   */
  getAll(): { [key: string]: string } {
    const ret: { [key: string]: string } = {};
    const arr = this.cookie.split('; ');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      const cookie = arr[i];
      const index = cookie.indexOf('=');
      if (index > 0) {
        const name = decodeURIComponent(cookie.substring(0, index));
        if (ret[name] == null) {
          ret[name] = decodeURIComponent(cookie.substring(index + 1));
        }
      }
    }
    return ret;
  }

  /**
   * Get the value of given cookie `key`
   *
   * 获取指定 `key` 的值
   */
  get(key: string): string | undefined {
    return this.getAll()[key];
  }

  /**
   * Sets a value for given cookie key
   *
   * 设置指定 Cookie 键的值
   */
  put(key: string, value: string | undefined, options?: CookieOptions): void {
    if (!this.platform.isBrowser) {
      return;
    }
    const opt = { path: '/', ...options };
    if (typeof opt.expires === 'number') {
      opt.expires = new Date(+new Date() + opt.expires * 1e3);
    }
    if (typeof opt.expires !== 'string') {
      opt.expires = opt.expires ? opt.expires.toUTCString() : '';
    }
    const optStr: { [key: string]: string | boolean } = opt as any;
    const attributes = Object.keys(optStr)
      .filter(k => optStr[k] && optStr[k] !== true)
      .map(k => `${k}=${(optStr[k] as string).split(';')[0]}`)
      .join(';');
    this.doc.cookie = encodeURIComponent(String(key)) + '=' + encodeURIComponent(String(value)) + (attributes ? '; ' + attributes : '');
  }

  /**
   * Remove given cookie
   *
   * 移除指定 Cookie
   */
  remove(key: string, options?: CookieOptions): void {
    this.put(key, undefined, options);
  }

  /**
   * Remove all cookies
   *
   * 移除所有 Cookies
   */
  removeAll(): void {
    this.doc.cookie = '';
  }
}
