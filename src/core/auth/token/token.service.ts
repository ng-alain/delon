import { Injectable, Optional, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { share } from 'rxjs/operators';
import { ITokenService, ITokenModel } from './interface';
import { DA_STORE_TOKEN, IStore } from '../store/interface';
import { AuthOptions, DA_OPTIONS_TOKEN } from '../auth.options';

@Injectable()
export class TokenService implements ITokenService {

    private change$: BehaviorSubject<ITokenModel> = new BehaviorSubject<ITokenModel>(null);

    private data: ITokenModel;

    constructor(
        @Inject(DA_OPTIONS_TOKEN) private options: AuthOptions,
        @Inject(DA_STORE_TOKEN) private store: IStore
    ) { }

    set(data: ITokenModel): boolean {
        this.change$.next(data);
        return this.store.set(this.options.store_key, data);
    }

    get(): ITokenModel {
        return this.store.get(this.options.store_key);
    }

    clear() {
        this.change$.next(null);
        this.store.remove(this.options.store_key);
    }

    change(): Observable<ITokenModel> {
        return this.change$.pipe(share());
    }

}
