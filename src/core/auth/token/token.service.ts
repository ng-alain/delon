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
    private _redirect: string;

    constructor(
        @Inject(DA_OPTIONS_TOKEN) private options: AuthOptions,
        @Inject(DA_STORE_TOKEN) private store: IStore
    ) { }

    get login_url(): string {
        return this.options.login_url;
    }

    set redirect(url: string) {
        this._redirect = url;
    }

    get redirect() {
        return this._redirect || '/';
    }

    set(data: ITokenModel): boolean {
        this.change$.next(data);
        return this.store.set(this.options.store_key, data);
    }

    get(type?: any);
    get<T extends ITokenModel>(type?: { new(): T }): T {
        const data = this.store.get(this.options.store_key);
        return type ? Object.assign(new type(), data) as T : data as T;
    }

    clear() {
        this.change$.next(null);
        this.store.remove(this.options.store_key);
    }

    change(): Observable<ITokenModel> {
        return this.change$.pipe(share());
    }

}
