import { InjectionToken } from '@angular/core';

import { ReuseTabCached, ReuseTitle } from './reuse-tab.interfaces';

export const REUSE_TAB_CACHED_MANAGER = new InjectionToken<ReuseTabCachedManager>('REUSE_TAB_CACHED_MANAGER');

export interface ReuseTabCachedManager {
  list: ReuseTabCached[];
  title: { [url: string]: ReuseTitle };
  closable: { [url: string]: boolean };
}

export class ReuseTabCachedManagerFactory implements ReuseTabCachedManager {
  list: ReuseTabCached[] = [];
  title: { [url: string]: ReuseTitle } = {};
  closable: { [url: string]: boolean } = {};
}
