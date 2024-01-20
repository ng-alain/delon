import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { PageHeaderComponent } from './page-header.component';

const COMPONENTS = [PageHeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ObserversModule,
    NzAffixModule,
    NzSkeletonModule,
    NzBreadCrumbModule,
    NzOutletModule,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class PageHeaderModule {}
