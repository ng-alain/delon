import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Match two control values
 *
 * 匹配两个控件值
 * ```ts
 * this.form = new FormGroup({
 *  pwd: new FormControl(''),
 *  repwd: new FormControl(''),
 * }, {
 *  validators: MatchControl('pwd', 'repwd'),
 * });
 * ```
 */
export function MatchControl(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl) => {
    const control = formGroup.get(controlName)!;
    const matchingControl = formGroup.get(matchingControlName)!;
    if (matchingControl.errors && !matchingControl.errors.matchControl) {
      return null;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matchControl: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}
