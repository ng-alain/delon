import { Pipe, PipeTransform } from '@angular/core';

/**
 * [Document](https://ng-alain.com/theme/keys)
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any, keyIsNumber: boolean = false): any[] {
    const ret: any[] = [];
    Object.keys(value).forEach(key => {
      ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
    });
    return ret;
  }
}
