import { PipeTransform, Pipe } from '@angular/core';

/**
 * @see http://ng-alain.com/docs/service-pipe#%E5%BE%BD%E7%AB%A0-yn
 */
@Pipe({ name: 'yn' })
export class YNPipe implements PipeTransform {
    transform(value: boolean, yes: string, no: string): string {
        if (value) {
            return '<span class="badge badge-success">' + (yes || '是') + '</span>';
        } else {
            return '<span class="badge badge-error">' + (no || '否') + '</span>';
        }
    }
}
