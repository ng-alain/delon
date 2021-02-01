import { Pipe, PipeTransform } from '@angular/core';
import { numberToChinese } from './number-to-chinese';

/**
 *  @deprecated Will be removed in 12.0.0, Pls used [cny](/util/pipes-currency/zh#cny) pipe instead
 */
@Pipe({ name: 'n2c' })
export class NaNumberToChinesePipe implements PipeTransform {
  transform(value: number | string, rmb: boolean = true, minusSymbol: string = '负'): string {
    return numberToChinese(value, rmb, { minusSymbol });
  }
}
