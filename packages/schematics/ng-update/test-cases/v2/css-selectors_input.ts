import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

const a = By.css('.content__title');

@Component({
  template: `<div class="content__title">
  <h1>
    Dashboard
    <small>Welcome !</small>
  </h1>
</div>
  `
})
class B {}
