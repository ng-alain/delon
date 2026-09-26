import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { copy } from './copy';

describe('abc: utils', () => {
  describe('#copy', () => {
    it('should be copy a string', async () => {
      copy('test')
        .then(() => {
          expect(true).toBe(true);
        })
        .catch(() => {
          expect(false).toBe(true);
        });
    });
    it('[[boundary]]', async () => {
      vi.spyOn(document, 'createElement').mockReturnValue({ parentNode: null } as NzSafeAny);
      copy('test')
        .then(() => {
          expect(false).toBe(true);
        })
        .catch(() => {
          expect(true).toBe(true);
        });
    });
  });
});
