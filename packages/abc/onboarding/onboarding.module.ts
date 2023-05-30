import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DelonLocaleModule } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './onboarding.service';

const COMPONENTS = [OnboardingComponent];

@NgModule({
  imports: [CommonModule, DelonLocaleModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule],
  declarations: COMPONENTS,
  providers: [OnboardingService],
  exports: COMPONENTS
})
export class OnboardingModule {}
