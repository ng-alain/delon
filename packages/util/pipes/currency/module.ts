import { NgModule } from '@angular/core';
import { CurrencyCommasPipe } from './commas.pipe';
import { CurrencyMegaPipe } from './mega.pipe';
const PIPES = [CurrencyMegaPipe, CurrencyCommasPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class CurrencyPipeModule {}
