import { Component } from '@angular/core';
import { MetaService } from '../../../core/meta.service';
import { MobileService } from '../../../core/mobile.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    '[class.main-wrapper]': 'true',
  },
})
export class ContentComponent {
  isMobile: boolean;
  constructor(public meta: MetaService, private mobileSrv: MobileService) {
    this.mobileSrv.change.subscribe(res => (this.isMobile = res));
  }

  to() {
    this.opened = false;
  }

  opened = false;
}
