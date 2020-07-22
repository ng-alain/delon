import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { OnboardingComponent } from './onboarding.component';

const COMPONENTS = [OnboardingComponent];

@NgModule({
  imports: [CommonModule, DelonLocaleModule, DelonUtilModule, NzPopoverModule, NzOutletModule, NzButtonModule, NzNoAnimationModule],
  declarations: COMPONENTS,
  entryComponents: COMPONENTS,
  exports: COMPONENTS,
})
export class OnboardingModule {}
