import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MetaService, MobileService } from '@core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    '[class.main-wrapper]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  isMobile: boolean;
  opened = false;

  constructor(public meta: MetaService, private mobileSrv: MobileService) {
    this.mobileSrv.change.subscribe(res => (this.isMobile = res));
  }

  to() {
    this.opened = false;
  }
}
