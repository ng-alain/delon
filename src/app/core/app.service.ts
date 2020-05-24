import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export type SiteTheme = 'default' | 'dark' | 'compact';

@Injectable({ providedIn: 'root' })
export class AppService {
  theme: SiteTheme = 'default';
  theme$ = new ReplaySubject<SiteTheme>(1);

  setTheme(theme: SiteTheme): void {
    this.theme = theme;
    this.theme$.next(theme);
  }
}
