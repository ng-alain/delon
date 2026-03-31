import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { PAGE_VISIBILITY } from './page-visibility';

describe('util: PAGE_VISIBILITY', () => {
  it('should be working', async () => {
    TestBed.configureTestingModule({});
    const state = await firstValueFrom(TestBed.inject(PAGE_VISIBILITY));
    expect(typeof state).toBe('boolean');
  });
});
