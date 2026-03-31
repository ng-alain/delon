import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { copy } from './copy';

describe('abc: utils', () => {
  describe('#copy', () => {
    it('should be copy a string', () => new Promise<void>(done => {
      copy('test')
        .then(() => {
          expect(true).toBe(true);
          done();
        })
        .catch(() => {
          expect(false).toBe(true);
          done();
        });
    }));
    it('[[boundary]]', () => new Promise<void>(done => {
      vi.spyOn(document, 'createElement').mockReturnValue({ parentNode: null } as NzSafeAny);
      copy('test')
        .then(() => {
          expect(false).toBe(true);
          done();
        })
        .catch(() => {
          expect(true).toBe(true);
          done();
        });
    }));
  });
});
