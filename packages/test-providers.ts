import { provideZonelessChangeDetection } from '@angular/core';

import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';

export default [provideZonelessChangeDetection(), provideNzDateFnsAdapter()];
