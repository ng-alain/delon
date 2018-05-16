import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class FullContentService {
  private _change: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  /** 切换全屏工作区状态 */
  toggle() {
    this._change.next(true);
  }

  get change(): Observable<boolean> {
    return this._change.pipe(share());
  }
}
