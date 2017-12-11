import { urlBase64Decode } from './jwt.helper';
import { JWTTokenModel } from './jwt.model';

describe('auth: jwt.model', () => {
    const model = new JWTTokenModel();
    // from: https://jwt.io/
    model.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjE1MTQ2NDk2MDB9.nocpzY3UnRLJXg6I7unzvH4JUzcBRYBtf_xQ41xCcTw`;
    const payloadDATA = {
        sub: '1',
        'name': 'cipchk',
        'admin': true,
        'exp': 1514649600 // 2017-12-31 0:0:0
    };
    const MAXTIME = new Date(2017, 12, 31, 0, 0, 0, 0);

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
