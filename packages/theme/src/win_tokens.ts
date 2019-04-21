import { InjectionToken } from '@angular/core';

function WINDOW_FACTORY(): any {
  return window;
}

export const WINDOW = new InjectionToken('Window', {
  providedIn: 'root',
  factory: WINDOW_FACTORY,
});
