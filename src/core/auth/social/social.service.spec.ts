// tslint:disable
import { Injector } from '@angular/core';
import { TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, DefaultUrlSerializer } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { publish, refCount } from 'rxjs/operators';
import { AuthOptions, DA_USER_OPTIONS_TOKEN, DA_OPTIONS_TOKEN } from '../auth.options';
import { SimpleTokenModel } from '../token/simple/simple.model';
import { DA_STORE_TOKEN } from '../store/interface';
import { LocalStorageStore } from '../store/local-storage.service';
import { DA_SERVICE_TOKEN, ITokenService, ITokenModel } from '../token/interface';
import { SocialService } from './social.service';
import { optionsFactory } from '../index';

class MockTokenService implements ITokenService {
    [key: string]: any;
    _data: any;
    set(data: ITokenModel): boolean {
        this._data = data;
        return true;
    }
    get(): ITokenModel {
        return this._data;
    }
    change(): Observable<ITokenModel> {
        return this.change$.pipe(publish(), refCount());
    }
    clear() {
        this._data = null;
    }
    get login_url() {
        return '/login';
    }
    redirect: string;
}
const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
    parseUrl: jasmine.createSpy('parseUrl').and.callFake((value: any) => {
        return (new DefaultUrlSerializer()).parse(value);
    })
};

class MockDocument {
    location = new MockLocation();
}

class MockLocation {
    private url: string;

    get href(): string {
        return this.url;
    }

    set href(url: string) {
        this.url = url;
    }
}

describe('auth: social.service', () => {
    let injector: Injector;

    function genModule(options: AuthOptions, tokenData?: SimpleTokenModel) {
        injector = TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
            providers: [
                SocialService,
                { provide: DOCUMENT, useClass: MockDocument },
                { provide: Router, useValue: mockRouter },
                { provide: DA_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DA_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DA_USER_OPTIONS_TOKEN] },
                { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                { provide: DA_SERVICE_TOKEN, useClass: MockTokenService }
            ]
        });
        if (tokenData)
            injector.get(DA_SERVICE_TOKEN).set(tokenData);
    }

    beforeEach(() => {
        genModule({});
    });

    describe('#login', () => {
        [
            {
                type: 'auth0',
                url: `//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent('http://localhost:4200/#/login/callback')}`,
                be: { client: '8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5' },
                model: { client: '8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5', token: '123' }
            }
        ].forEach((item: any) => {

            it(`${item.type} via href`, () => {
                injector.get(SocialService).login(item.url, '/', { type: 'href' });
                const ret = injector.get(DOCUMENT).location.href;
                for (const key in item.be) {
                    const expected = `${key}=${item.be[key]}`;
                    expect(ret).toContain(expected, `muse contain "${expected}"`);
                }
            });

            it(`${item.type} via window`, fakeAsync(() => {
                spyOn(window, 'open').and.callFake(() => {
                    injector.get(DA_SERVICE_TOKEN).set(item.model);
                    return { closed: true };
                });
                injector.get(SocialService).login(item.url, '/', { type: 'window' }).subscribe(res => {

                });
                tick(130);
                expect(window.open).toHaveBeenCalled();
                const token = injector.get(DA_SERVICE_TOKEN).get();
                for (const key in item.be) {
                    expect(token[key]).toContain(item.be[key]);
                }
                discardPeriodicTasks();
            }));

        });
    });

    describe('#callback', () => {
        const jwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImNpcGNoayIsImFkbWluIjp0cnVlLCJleHAiOjE1MTQ2NDk2MDB9.nocpzY3UnRLJXg6I7unzvH4JUzcBRYBtf_xQ41xCcTw`;
        const swtData: ITokenModel = {
            token: '1234567890-34567890',
            user: 'cipchk',
            uid: 1,
            role: 'admin',
            permission: [ 1, 2, 3, 4 ]
        };
        [
            { summary: 'swt via url', url: 'http://localhost:4200/login/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1', be: { token: '40SOJV-L8oOwwUIs', name: 'cipchk', uid: '1' } },
            { summary: 'jwt via url', url: `http://localhost:4200/login/callback?token=${jwtToken}`, be: { token: jwtToken } },
            { summary: 'url muse contain a ?', url: 'http://localhost:4200/callback', be: 'throw' },
            { summary: 'invalide token data', url: 'http://localhost:4200/?code=40SOJV-L8oOwwUIs#/login/callback', be: 'throw' },
            { summary: 'via ITokenModel', url: swtData, be: swtData }
        ].forEach((item: any, index: number) => {
            it(`${item.summary}`, () => {
                if (item.be === 'throw') {
                    expect(() => {
                        injector.get(SocialService).callback(item.url, false)
                    }).toThrow();
                    return;
                }
                const ret = injector.get(SocialService).callback(item.url, false);
                for (const key in item.be) {
                    expect(ret[key]).toBe(item.be[key]);
                }
            });
        });
    });

});
