import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DA_OPTIONS_TOKEN } from '../auth.options';
import { DA_STORE_TOKEN } from '../store/interface';
import { LocalStorageStore } from '../store/local-storage.service';
import { TokenService } from './token.service';
import { DA_SERVICE_TOKEN, ITokenModel, ITokenService } from './interface';
import { JWTTokenModel } from './jwt/jwt.model';

describe('auth: token.service', () => {
    let injector: Injector;
    let service: ITokenService;
    const VALUE: ITokenModel = <ITokenModel> {
        token: 'token data'
    };
    const JWTVALUE: ITokenModel = <ITokenModel> {
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`
    };

    beforeEach(() => {
        let data = {};

        spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
            return data[key] || null;
        });
        spyOn(localStorage, 'removeItem').and.callFake((key: string): void =>  {
            delete data[key];
        });
        spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): string =>  {
            return data[key] = <string>value;
        });
        spyOn(localStorage, 'clear').and.callFake(() =>  {
            data = {};
        });

        injector = TestBed.configureTestingModule({
            providers: [
                { provide: DA_OPTIONS_TOKEN, useValue: { store_key: 'token' } },
                { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                { provide: DA_SERVICE_TOKEN, useClass: TokenService }
            ]
        });

        service = injector.get(DA_SERVICE_TOKEN);
    });

    it('#set', () => {
        service.set(VALUE);
        expect(service.get()).not.toBeNull();
        expect(service.get().token).toBe(VALUE.token);
    });

    it('#get', () => {
        service.set(VALUE);
        expect(service.get()).not.toBeNull();
        expect(service.get().token).toBe(VALUE.token);
    });

    it('#get, should be return JWTTokenModel', () => {
        service.set(JWTVALUE);
        const ret = service.get<JWTTokenModel>(JWTTokenModel);
        expect(ret).not.toBeNull();
        expect(ret.payload).not.toBeUndefined();
    });

    it('#clear', () => {
        service.clear();
        expect(service.get()).not.toBeNull();
        expect(service.get().token).toBeUndefined();
    });

    it('#change', (done: () => void) => {
        service.change().subscribe(res => {
            if (!res) return;
            expect(res).not.toBeNull();
            expect(res.token).toBe(VALUE.token);
            done();
        });
        service.set(VALUE);
    });

});
