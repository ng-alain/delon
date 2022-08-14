import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { isEmpty } from './is-empty';

describe('util.#isEmpty', () => {
  it('should empty when only spaces', () => {
    const mockEl: NzSafeAny = {
      childNodes: {
        length: 1,
        item: () => {
          return {
            nodeType: 3,
            textContent: ' '
          };
        }
      }
    };
    expect(isEmpty(mockEl)).toBe(true);
  });
  it('should not empty when has text', () => {
    const mockEl: NzSafeAny = {
      childNodes: {
        length: 1,
        item: () => {
          return {
            nodeType: 3,
            textContent: '1 '
          };
        }
      }
    };
    expect(isEmpty(mockEl)).toBe(false);
  });
});
