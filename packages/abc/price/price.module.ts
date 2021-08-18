import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriceComponent } from './price.component';
import { FormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

const COMPONENTS = [PriceComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NzInputNumberModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class PriceModule {}
