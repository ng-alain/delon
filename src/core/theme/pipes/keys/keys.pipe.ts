import { PipeTransform, Pipe } from '@angular/core';

/**
 * @see http://ng-alain.com/docs/service-pipe#%E5%8F%AF%E8%BF%AD%E4%BB%A3-keys
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value: any, args: string[]): any[] {
        const ret = [];
        // tslint:disable-next-line:forin
        for (const key in value) {
            ret.push({ key: key, value: value[key] });
        }
        return ret;
    }
}
