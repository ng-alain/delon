import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';

/**
 * [Document](https://ng-alain.com/theme/currency)
 * @deprecated Will be removed in 12.0.0, Pls used `_currency2` instead
 */
// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: '_currency' })
export class CNCurrencyPipe {
  private readonly ngCurrencyPipe: CurrencyPipe;

  constructor(@Inject(LOCALE_ID) locale: string) {
    this.ngCurrencyPipe = new CurrencyPipe(locale);
  }

  transform(
    value: any,
    currencyCode: string = '￥',
    display: 'code' | 'symbol' | 'symbol-narrow' | boolean = 'code',
    digits?: string,
  ): string | null {
    return this.ngCurrencyPipe.transform(value, currencyCode, display as any, digits);
  }
}
