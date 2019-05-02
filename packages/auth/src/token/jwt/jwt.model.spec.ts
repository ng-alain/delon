import { JWTTokenModel } from './jwt.model';

describe('auth: jwt.model', () => {
  const model = new JWTTokenModel();
  beforeEach(() => {
    // from: https://jwt.io/
    model.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjQ2NzA0MDk2MDB9.IINuMTwqwCQP63fSQ-ZPgOEaE8lilrUceUX9Wy47PBk`;
  });
  const payloadDATA = {
    sub: '1',
    name: 'cipchk',
    admin: true,
    exp: 4670409600,
  };
  const MAXTIME = new Date(2118, 1, 1, 0, 0, 0, 0);

  describe('#payload', () => {
    it('should be decoded', () => {
      const payload = model.payload;
      expect(payload.sub).toBe(payloadDATA.sub);
      expect(payload.name).toBe(payloadDATA.name);
      expect(payload.admin).toBe(payloadDATA.admin);
    });
    it('should be throw error when token is null or undefined', () => {
      expect(() => {
        model.token = null;
        const payload = model.payload;
        console.log(payload);
      }).toThrowError();
      expect(() => {
        model.token = undefined;
        const payload = model.payload;
        console.log(payload);
      }).toThrowError();
    });
    it('should be throw error when invalid token length', () => {
      expect(() => {
        model.token = `a`;
        const payload = model.payload;
        console.log(payload);
      }).toThrowError();
      expect(() => {
        model.token = `a.a.a`;
        const payload = model.payload;
        console.log(payload);
      }).toThrowError();
    });
    it('should be throw error when invalid token', () => {
      expect(() => {
        model.token = `a.aa.a`;
        const payload = model.payload;
        console.log(payload);
      }).toThrowError();
    });
    it(`should be throw error when can't decode the token`, () => {
      expect(() => {
        model.token = `a.aaa.a`;
        const payload = model.payload;
        console.log(payload);
      }).toThrowError();
    });
  });

  describe('#isExpired', () => {
    it('should be decoded exp', () => {
      expect(model.payload.exp).toBe(payloadDATA.exp);
      const date = new Date(0);
      date.setUTCSeconds(payloadDATA.exp);
      expect(model.isExpired()).toBe(date.getTime() > MAXTIME.getTime());
    });
    it('should be return null when not exp property', () => {
      model.token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o`;
      expect(model.isExpired(0)).toBeNull();
    });
  });
});
