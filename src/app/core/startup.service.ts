import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';
import { TitleService } from '@delon/theme';
import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS } from '../../style-icons';

@Injectable()
export class StartupService {
  constructor(private injector: Injector, iconSrv: NzIconService, @Inject(DOCUMENT) private doc: any) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<any> {
    const slowEl = this.doc.querySelector('#_slow');
    return new Promise(resolve => {
      if (slowEl) {
        slowEl.remove();
      }
      this.injector.get(TitleService).suffix = 'Ng Alain';
      resolve();
    });
  }
}
