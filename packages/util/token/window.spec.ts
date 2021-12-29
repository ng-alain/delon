import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { WINDOW } from './window';

describe('util: WINDOW', () => {
  it('should be working', () => {
    TestBed.configureTestingModule({});
    expect(TestBed.inject(WINDOW)).toBe(window);
  });

  it('shoule be throw error when invalid global window', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DOCUMENT,
          useValue: {
            querySelectorAll(): NzSafeAny {
              return {};
            }
          }
        }
      ]
    });
    expect(() => TestBed.inject(WINDOW)).toThrow();
  });
});
