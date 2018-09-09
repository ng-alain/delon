import { Component } from '@angular/core';
import { MetaService } from './../../../core/meta.service';

@Component({
  selector: 'config-button',
  templateUrl: './config-button.component.html',
})
export class ConfigButtonComponent {
  isVisible = false;

  constructor(public meta: MetaService) {}
}
