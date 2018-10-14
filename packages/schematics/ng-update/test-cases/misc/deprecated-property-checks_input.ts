import {Component} from '@angular/core';

@Component({
  template: `
  <st (checkboxChange)="a()" [sortReName]=""></st>
  `
})
class A {
  a() {}
}
