import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';

/**
 * @deprecated Will be removed in 12.0.0, Pls used [price](https://ng-alain.com/util/pipes-currency/en?#price) pipe instead
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
