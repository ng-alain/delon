import { ReuseHookOnReuseInitType } from './reuse-tab.interfaces';

/**
 * Triggered when the current route is in the reusing process, The values of `type` are:
 *
 * - `init` when routing process 当路由复用时
 * - `refresh` when refresh action via tab 当通过标签刷新时
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
