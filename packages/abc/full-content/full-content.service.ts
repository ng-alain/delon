import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FullContentService {
  private _change: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  /** 切换全屏工作区状态 */
  toggle() {
    this._change.next(true);
  }

  get change(): Observable<boolean> {
    return this._change.pipe(share());
  }
}
