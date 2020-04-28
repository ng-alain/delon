import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface AlainVedioConfig {
  /**
   * Plyr library path, default: `["https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js", "https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css", "https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.svg"]`
   */
  urls?: string[];
  /**
   * Please refer to [plyr options](https://github.com/sampotts/plyr#options)
   */
  options?: NzSafeAny;
}
