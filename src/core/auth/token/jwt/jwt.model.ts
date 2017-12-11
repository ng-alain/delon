import { ITokenModel } from '../interface';
import { urlBase64Decode } from './jwt.helper';

export class JWTTokenModel implements ITokenModel {

    [key: string]: any;

    token: string;

    /**
     * 获取载荷信息
     */
    get payload(): any {
        const parts = this.token.split('.');
        if (parts.length !== 3) throw new Error('JWT must have 3 parts');

        const decoded = urlBase64Decode(parts[1]);
        if (!decoded) throw new Error('Cannot decode the token');

        return JSON.parse(decoded);
    }

    /**
     * 检查Token是否过期，`payload` 必须包含 `exp` 时有效
     *
     * @param {number} [offsetSeconds=0] 偏移量
     */
    isExpired(offsetSeconds: number = 0): boolean {
        const decoded = this.payload;
        if (!decoded.hasOwnProperty('exp')) return null;

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);

        if (date === null) return false;

        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    }
}
