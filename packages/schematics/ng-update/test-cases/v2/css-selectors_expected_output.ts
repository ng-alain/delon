import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

const a = By.css('.alain-default__content-title');

@Component({
  template: `
    <div class="alain-default__content-title">
      <h1>
        Dashboard
        <small>Welcome !</small>
      </h1>
    </div>
  `,
})
class B {}
