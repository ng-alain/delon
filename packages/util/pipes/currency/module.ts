import { NgModule } from '@angular/core';
import { CurrencyCNYPipe } from './cny.pipe';
import { CurrencyFormatPipe } from './format.pipe';
import { CurrencyMegaPipe } from './mega.pipe';

const PIPES = [CurrencyMegaPipe, CurrencyFormatPipe, CurrencyCNYPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class CurrencyPipeModule {}
