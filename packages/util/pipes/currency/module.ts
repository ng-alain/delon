import { NgModule } from '@angular/core';

import { CurrencyCNYPipe } from './cny.pipe';
import { CurrencyMegaPipe } from './mega.pipe';
import { CurrencyPricePipe } from './price.pipe';

const PIPES = [CurrencyMegaPipe, CurrencyPricePipe, CurrencyCNYPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class CurrencyPipeModule {}
