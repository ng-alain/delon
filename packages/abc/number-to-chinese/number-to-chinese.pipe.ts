import { PipeTransform, Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { numberToChinese } from './number-to-chinese';
import { NumberToChineseOptions } from './interface';

@Pipe({ name: 'n2c' })
export class NumberToChinesePipe implements PipeTransform {
    transform(value: number | string, rmb: boolean = true, minusSymbol: string = '负'): string {
        return numberToChinese(value, rmb, { minusSymbol });
    }
}
