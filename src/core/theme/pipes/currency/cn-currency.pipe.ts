import { Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

/**
 * @see http://ng-alain.com/docs/service-pipe#%E8%B4%A7%E5%B8%81-_currenty
 */
// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: '_currency' })
export class CNCurrencyPipe extends CurrencyPipe {
    transform(
        value: any,
        currencyCode: string = '￥',
        display: 'code' | 'symbol' | 'symbol-narrow' | boolean = 'code',
        digits?: string): string | null {
        return super.transform(value, currencyCode, <any>display, digits);
    }
}
