import { urlBase64Decode } from './jwt.helper';
import { JWTTokenModel } from './jwt.model';

describe('auth: jwt.model', () => {
    const model = new JWTTokenModel();
    // from: https://jwt.io/
    model.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.IINuMTwqwCQP63fSQ-ZPgOEaE8lilrUceUX9Wy47PBk`;
    const payloadDATA = {
        sub: '1',
        'name': 'cipchk',
        'admin': true,
        'exp': 4670409600
    };
    const MAXTIME = new Date(2118, 1, 1, 0, 0, 0, 0);

    it('#payload', () => {
        expect(model.payload.sub).toBe(payloadDATA.sub);
        expect(model.payload.name).toBe(payloadDATA.name);
        expect(model.payload.admin).toBe(payloadDATA.admin);
    });

    it('#isExpired', () => {
        expect(model.payload.exp).toBe(payloadDATA.exp);
        const date = new Date(0);
        date.setUTCSeconds(payloadDATA.exp);
        expect(model.isExpired()).toBe(date.getTime() > MAXTIME.getTime());
    });
});
