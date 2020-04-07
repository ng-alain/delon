import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ObserversModule } from '@angular/cdk/observers';

import { PageHeaderComponent } from './page-header.component';

const COMPONENTS = [PageHeaderComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, RouterModule, DelonUtilModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PageHeaderModule {}
