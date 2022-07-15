import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs';

import { PAGE_VISIBILITY } from './page-visibility';

describe('util: PAGE_VISIBILITY', () => {
  it('should be working', done => {
    TestBed.configureTestingModule({});
    TestBed.inject(PAGE_VISIBILITY)
      .pipe(first())
      .subscribe(state => {
        expect(typeof state).toBe('boolean');
        done();
      });
  });
});
