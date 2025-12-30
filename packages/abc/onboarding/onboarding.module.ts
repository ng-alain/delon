import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DelonLocaleModule } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { provideNzNoAnimation } from 'ng-zorro-antd/core/animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { OnboardingComponent } from './onboarding.component';

const COMPONENTS = [OnboardingComponent];

@NgModule({
  providers: [provideNzNoAnimation()],
  imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, COMPONENTS],
  exports: COMPONENTS
})
export class OnboardingModule {}
