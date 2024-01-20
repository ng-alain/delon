import { InjectionToken } from '@angular/core';

import type { FullLocaleData } from './locale.types';

export const DELON_LOCALE = new InjectionToken<FullLocaleData>('delon-locale');
