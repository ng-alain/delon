import { Pipe, PipeTransform } from '@angular/core';

/**
 * @see https://ng-alain.com/docs/common#%E5%8F%AF%E8%BF%AD%E4%BB%A3-keys
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  // tslint:disable-next-line:no-any
  transform(value: any, keyIsNumber: boolean = false): any[] {
    const ret = [];
    // tslint:disable-next-line:forin
    for (const key in value) {
      ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
    }
    return ret;
  }
}
