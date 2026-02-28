import { signal } from '@angular/core';

import { SiteTheme } from './types';

export const SITE_THEME = signal<SiteTheme>('default');
export const MOBILE = signal(false);
