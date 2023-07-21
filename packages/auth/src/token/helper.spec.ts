import { CheckJwt } from './helper';
import { JWTTokenModel } from '../..';

describe('helper: CheckJwt', () => {
  it('invalid jwt token should return false', () => {
    const tokenModel = new JWTTokenModel();
    const offset = 10;
    tokenModel.token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTk1OD'; // bad jwt token
    expect(CheckJwt(tokenModel, offset)).toBe(false);
  });
});
