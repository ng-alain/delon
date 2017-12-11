import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export const DA_SERVICE_TOKEN = new InjectionToken<ITokenService>('DELON_AUTH_TOKEN_SERVICE_TOKEN');

export interface ITokenModel {
    [key: string]: any;

    token: string;
}

export interface ITokenService {

    set(data: ITokenModel): boolean;

    get(): ITokenModel;

    clear(): void;

    change(): Observable<ITokenModel>;
}
