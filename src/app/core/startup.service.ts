import { Injectable, Injector } from '@angular/core';
import { TitleService } from '@delon/theme';

@Injectable()
export class StartupService {
  constructor(private injector: Injector) {}

  load(): Promise<any> {
    return new Promise((resolve) => {
      console.log('startup');
      this.injector.get(TitleService).suffix = 'Ng Alain';
      resolve();
    });
  }
}
