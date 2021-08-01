import { Pipe, PipeTransform } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

/**
 * [Document](https://ng-alain.com/theme/keys)
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: NzSafeAny, keyIsNumber: boolean = false): NzSafeAny[] {
    const ret: NzSafeAny[] = [];
    Object.keys(value).forEach(key => {
      ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
    });
    return ret;
  }
}
