import { Injectable } from '@angular/core';
import { HttpClientConfig } from './services/http/http.config';
import { ResponsiveConfig } from './services/responsive/responsive.config';

@Injectable({ providedIn: 'root' })
export class AlainThemeConfig {
  http?: HttpClientConfig;
  responsive?: ResponsiveConfig;
}
