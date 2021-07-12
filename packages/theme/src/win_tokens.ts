import { InjectionToken } from '@angular/core';

function WINDOW_FACTORY(): any {
  return typeof window === 'object' && !!window ? window : null;
}

/**
 * @deprecated Will be removed in 12.0.0, Pls used `import { WINDOW } from '{AT}delon/util/token';` instead
 */
export const WINDOW = new InjectionToken('Window', {
  providedIn: 'root',
  factory: WINDOW_FACTORY
});
