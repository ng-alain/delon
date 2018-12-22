import { CurrencyPipe } from '@angular/common';
import { Pipe } from '@angular/core';

/**
 * @see https://ng-alain.com/docs/service-pipe#%E8%B4%A7%E5%B8%81-_currenty
 */
// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: '_currency' })
export class CNCurrencyPipe extends CurrencyPipe {
  transform(
    // tslint:disable-next-line:no-any
    value: any,
    currencyCode: string = '￥',
    display: 'code' | 'symbol' | 'symbol-narrow' | boolean = 'code',
    digits?: string,
  ): string | null {
    // tslint:disable-next-line:no-any
    return super.transform(value, currencyCode, display as any, digits);
  }
}
