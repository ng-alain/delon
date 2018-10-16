import {Component} from '@angular/core';

@Component({
  template: `
  <st (checkboxChange)="a()" [sortReName]=""></st>
  <desc-list size="large" title="title" layout="vertical">
    <desc-list-item term="Firefox" detailClass="text-danger">1</desc-list-item>
  </desc-list>
  <standard-form-row grid title="所属类目">头像</standard-form-row>
  `
})
class A {
  a() {}
}
