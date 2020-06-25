import { InjectionToken } from '@angular/core';

function WINDOW_FACTORY(): any {
  return typeof window === 'object' && !!window ? window : null;
}

export const WINDOW = new InjectionToken('Window', {
  providedIn: 'root',
  factory: WINDOW_FACTORY,
});
