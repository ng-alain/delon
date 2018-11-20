import { Injectable, Injector } from '@angular/core';
import { TitleService } from '@delon/theme';

import { NzIconService } from 'ng-zorro-antd';
import { ICONS } from '../../style-icons';

@Injectable()
export class StartupService {
  constructor(private injector: Injector, iconSrv: NzIconService) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<any> {
    return new Promise(resolve => {
      this.injector.get(TitleService).suffix = 'Ng Alain';
      resolve();
    });
  }
}
