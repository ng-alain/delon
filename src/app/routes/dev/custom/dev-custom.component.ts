import { Component } from '@angular/core';

@Component({
  selector: 'dev-custom',
  template: ` custom `,
})
export class DevCustomComponent {
  _onReuseInit(): void {
    console.log('dev-custom');
  }
}
