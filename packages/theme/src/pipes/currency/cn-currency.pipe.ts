import { CurrencyPipe } from '@angular/common';
import { Pipe } from '@angular/core';

/**
 * @see https://ng-alain.com/theme/currency
 */
// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: '_currency' })
export class CNCurrencyPipe extends CurrencyPipe {
  transform(
    value: any,
    currencyCode: string = '￥',
    display: 'code' | 'symbol' | 'symbol-narrow' | boolean = 'code',
    digits?: string,
  ): string | null {
    return super.transform(value, currencyCode, display as any, digits);
  }
}
