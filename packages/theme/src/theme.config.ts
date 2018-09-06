import { Injectable } from '@angular/core';
import { HttpClientConfig } from './services/http/http.config';

@Injectable({ providedIn: 'root' })
export class AlainThemeConfig {
  http?: HttpClientConfig;
}
