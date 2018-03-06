import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * @see http://ng-alain.com/docs/service-pipe#%E6%97%A5%E6%9C%9F-_date
 */
@Pipe({ name: '_date' })
export class MomentDatePipe implements PipeTransform {
    transform(value: moment.MomentInput, formatString: string = 'YYYY-MM-DD HH:mm'): string {
        if (value) {
            if (formatString === 'fn')
                return moment(value).fromNow();
            return moment(value).format(formatString);
        } else {
            return '';
        }
    }
}
