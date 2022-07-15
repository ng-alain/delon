import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, share } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FullContentService {
  private _change = new BehaviorSubject<boolean | null>(null);

  /** 切换全屏工作区状态 */
  toggle(): void {
    this._change.next(true);
  }

  get change(): Observable<boolean | null> {
    return this._change.pipe(share());
  }
}
