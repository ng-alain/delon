import { Pipe, PipeTransform } from '@angular/core';

/**
 * @see https://ng-alain.com/theme/keys
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any, keyIsNumber: boolean = false): any[] {
    const ret = [];
    for (const key in value) {
      ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
    }
    return ret;
  }
}
