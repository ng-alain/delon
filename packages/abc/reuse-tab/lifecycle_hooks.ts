import { ReuseHookOnReuseInitType } from './reuse-tab.interfaces';

/**
 * Triggered when the current route is in the reusing process, The values of `type` are:
 *
 * - `init` when routing process
 * - `refresh` when refresh action via tab
 */
export interface OnReuseInit {
  _onReuseInit(type?: ReuseHookOnReuseInitType): void;
}

/**
 * Triggered when the current route allows reusing and leave route.
 */
export interface OnReuseDestroy {
  _onReuseDestroy(): void;
}
