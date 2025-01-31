import { InjectionToken } from '@angular/core';

import { ReuseTabCached, ReuseTitle } from './reuse-tab.interfaces';

/**
 * Storage manager that can change rules by implementing `get`, `set` accessors
 */
export const REUSE_TAB_CACHED_MANAGER = new InjectionToken<ReuseTabCachedManager>('REUSE_TAB_CACHED_MANAGER');

export interface ReuseTabCachedManager {
  list: ReuseTabCached[];
  title: Record<string, ReuseTitle>;
  closable: Record<string, boolean>;
}

export class ReuseTabCachedManagerFactory implements ReuseTabCachedManager {
  list: ReuseTabCached[] = [];
  title: Record<string, ReuseTitle> = {};
  closable: Record<string, boolean> = {};
}
