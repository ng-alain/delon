import { NgModule } from '@angular/core';
import { CurrencyCNYPipe } from './cny.pipe';
import { CurrencyCommasPipe } from './commas.pipe';
import { CurrencyMegaPipe } from './mega.pipe';

const PIPES = [CurrencyMegaPipe, CurrencyCommasPipe, CurrencyCNYPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class CurrencyPipeModule {}
