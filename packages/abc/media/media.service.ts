import { Injectable } from '@angular/core';
import { AlainConfigService, AlainMediaConfig, LazyService } from '@delon/util';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private _cog: AlainMediaConfig;
  private loaded = false;
  private notify$ = new Subject<void>();

  get cog(): AlainMediaConfig {
    return this._cog;
  }
  set cog(val: AlainMediaConfig) {
    this._cog = this.cogSrv.merge<AlainMediaConfig, 'media'>(
      'media',
      {
        urls: ['https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js', 'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'],
      },
      val,
    );
  }

  constructor(private cogSrv: AlainConfigService, private lazySrv: LazyService) {}

  load(): this {
    if (this.loaded) return this;
    this.loaded = true;
    this.lazySrv.load(this.cog.urls!).then(() => {
      this.notify$.next();
    });
    return this;
  }

  notify(): Observable<void> {
    return this.notify$.asObservable();
  }
}
