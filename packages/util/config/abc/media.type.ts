import type Plyr from 'plyr';

export interface AlainMediaConfig {
  /**
   * Plyr library path, default: `["https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js", "https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css"]`
   */
  urls?: string[];
  /**
   * Please refer to [plyr options](https://github.com/sampotts/plyr#options)
   */
  options?: Plyr.Options;
}
