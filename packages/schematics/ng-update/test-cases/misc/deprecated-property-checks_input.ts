import { Component } from '@angular/core';

@Component({
  template: `
  <st (checkboxChange)="checkboxChange($event)" (filterChange)="getData()" [sortReName]=""></st>
  <desc-list size="large" title="title" layout="vertical">
    <sv term="Firefox" detailClass="text-danger">1</sv>
  </desc-list>
  <standard-form-row grid title="所属类目">头像</standard-form-row>
  `,
})
class A {
  a() {}
}
