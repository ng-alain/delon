import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatchControl } from './match-control';

describe('utils: MatchControl', () => {
  it('should be working', () => {
    const fn = MatchControl('pwd', 'repwd');

    const controls = new FormGroup({ pwd: new FormControl(''), repwd: new FormControl('') });
    fn(controls);
    expect(controls.get('repwd')?.valid).toBe(true);

    controls.get('pwd')?.setValue('not match');
    fn(controls);
    expect(controls.get('repwd')?.valid).toBe(false);
  });

  it('should be return null when matching control is errors', () => {
    const fn = MatchControl('pwd', 'repwd');

    const controls = new FormGroup({
      pwd: new FormControl('not match'),
      repwd: new FormControl('', Validators.required)
    });
    fn(controls);
    expect(controls.get('repwd')?.hasError('required')).toBe(true);
    expect(controls.get('repwd')?.hasError('matchControl')).toBe(false);
  });
});
