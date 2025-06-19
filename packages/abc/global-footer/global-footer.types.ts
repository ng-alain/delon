import type { SafeHtml } from '@angular/platform-browser';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface GlobalFooterLink {
  [key: string]: NzSafeAny;
  title: string | SafeHtml;
  href: string;
  blankTarget?: boolean;
}
