/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlBase64Decode } from './jwt.helper';
import { ITokenModel } from '../interface';

export interface JWT {
  /**
   * Issuerd
   */
  iss: string;
  /**
   * Issued At
   */
  iat: string;
  /**
   * Subject
   */
  sub: string;
  /**
   * Expiration Time
   */
  exp: number;
  /**
   * Audience
   */
  aud: string;
  /**
   * Not Before
   */
  nbf: string;
  /**
   * JWT ID
   */
  jti: string;

  [key: string]: any;
  [key: number]: any;
}

export class JWTTokenModel implements ITokenModel {
  [key: string]: any;

  token: string | null | undefined;

  expired?: number;

  /**
   * 获取载荷信息
   */
  get payload(): JWT {
    const parts = (this.token || '').split('.');
    if (parts.length !== 3) throw new Error('JWT must have 3 parts');

    const decoded = urlBase64Decode(parts[1]);
    return JSON.parse(decoded);
  }

  /**
   * 获取过期时间戳（单位：ms）
   */
  get exp(): number | null {
    const decoded = this.payload;
    if (!decoded.hasOwnProperty('exp')) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date.valueOf();
  }

  /**
   * 检查Token是否过期，当`payload` 包含 `exp` 字段时有效，若无 `exp` 字段直接返回 `null`
   *
   * @param offsetSeconds 偏移量
   */
  isExpired(offsetSeconds: number = 0): boolean | null {
    const exp = this.exp;
    if (exp == null) return null;

    return !(exp > new Date().valueOf() + offsetSeconds * 1000);
  }
}
