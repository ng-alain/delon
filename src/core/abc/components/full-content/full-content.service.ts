import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Injectable()
export class FullContentService {
    private _change: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    toggle() {
        this._change.next(true);
    }

    get change(): Observable<boolean> {
        return this._change.pipe(share());
    }
}
