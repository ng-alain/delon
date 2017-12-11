import { urlBase64Decode } from './jwt.helper';

// from: https://jwt.io/
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjcyMDB9.52_BQ4AOhXm_ASpwmHIbvAibdxytGMjGpNVn9Hys_ko`;

describe('auth: jwt.helper', () => {
    it('#urlBase64Decode', () => {
        const parts = token.split('.');
        const ret = urlBase64Decode(parts[1]);
        expect(ret).not.toBeNull();
    });
});
