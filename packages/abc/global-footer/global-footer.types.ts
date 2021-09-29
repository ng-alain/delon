import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface GlobalFooterLink {
  [key: string]: NzSafeAny;
  title: string;
  href: string;
  blankTarget?: boolean;
}
