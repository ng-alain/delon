import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { AlainThemeModule } from './../../theme/index';
import { DelonCacheModule } from '../index';
import { DC_STORE_STORAGE_TOKEN, ICacheStore, ICache } from './interface';
import { CacheService } from './cache.service';
import { LocalStorageCacheService } from './local-storage-cache.service';
import { DC_OPTIONS_TOKEN, DEFAULT } from '../cache.options';

describe('cache: service', () => {
    let injector: Injector;
    let srv: CacheService;
    const KEY = 'a';

    beforeEach(() => {
        let data: any = {};

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
            imports: [
                HttpClientTestingModule,
                AlainThemeModule.forRoot(),
                DelonCacheModule.forRoot()
            ],
            providers: [
            ]
        });

        srv = injector.get(CacheService);
    });

    describe('#set', () => {
        it('should be set number', () => {
            srv.set(KEY, 1);
            expect(srv.getNone(KEY)).toBe(1);
        });
        it('should be set array', () => {
            srv.set(KEY, [ 1, 2 ]);
            const ret = srv.getNone(KEY) as Array<number>;
            expect(ret.length).toBe(2);
            expect(ret[0]).toBe(1);
            expect(ret[1]).toBe(2);
        });
        it('should be set Observable', (done: () => void) => {
            srv.set(KEY, of(10)).subscribe(res => {
                expect(res).toBe(10);
                expect(srv.getNone(KEY)).toBe(10);
                done();
            });
        });
        it('should be set string vis memory', () => {
            srv.set(KEY, 'a', { type: 'm' });
            expect(localStorage.setItem).not.toHaveBeenCalled();
        });
        it('should be set string vis storage', () => {
            srv.set(KEY, 'a', { type: 's' });
            expect(localStorage.setItem).toHaveBeenCalled();
            expect(srv.has(KEY)).toBe(true);
            const meta = JSON.parse(localStorage.getItem('__cache_meta')) as ICache;
            expect(meta).not.toBeNaN();
            expect(meta.v.indexOf(KEY)).not.toBe(-1);
        });
        it('should be set string and expires vis memory', () => {
            srv.set(KEY, 'a', { type: 'm', expire: '1h' });
            expect(srv.getNone(KEY)).toBe('a');
        });
        it('should be set string and expires vis storage', () => {
            srv.set(KEY, 'a', { type: 's', expire: '10s' });
            expect(localStorage.setItem).toHaveBeenCalled();
            const org = JSON.parse(localStorage.getItem(KEY)) as ICache;
            expect(org.e).toBeGreaterThan(1000);
        });
    });

    describe('#get', () => {
        it('should be return number', () => {
            srv.set(KEY, 1);
            expect(srv.getNone(KEY)).toBe(1);
        });
        it('should be return array', () => {
            srv.set(KEY, [ 1, 2 ]);
            const ret = srv.getNone(KEY) as Array<number>;
            expect(ret.length).toBe(2);
            expect(ret[0]).toBe(1);
            expect(ret[1]).toBe(2);
        });
        it('should be return null if invalid KEY', () => {
            expect(srv.getNone('aaa')).toBeNull();
        });
        it('should be return null if expired', () => {
            localStorage.setItem(KEY, JSON.stringify(<ICache>{
                e: 1000,
                v: 1
            }));
            expect(srv.getNone(KEY)).toBeNull();
        });
        it('should be return number via promise mode', (done: () => void) => {
            const k = '/data/1';
            srv.get(k).subscribe(res => {
                expect(res).toBe('ok!');
                expect(srv.getNone(k)).toBe('ok!');
                done();
            });
            injector.get(HttpTestingController).expectOne(k).flush('ok!');
        });
    });

    describe('#tryGet', () => {
        it('should be return number if not exists KEY', () => {
            const ret = srv.tryGet(KEY, 1);
            expect(ret).toBe(1);
        });
        it('should be return number via Observable if not exists KEY', (done: () => void) => {
            srv.tryGet(KEY, of(10)).subscribe(ret => {
                expect(ret).toBe(10);
                done();
            });
        });
        it('should be return Observable when valid key', (done: () => void) => {
            srv.set(KEY, 10);
            srv.tryGet(KEY, of(10)).subscribe(ret => {
                expect(ret).toBe(10);
                done();
            });
        });
    });

    describe('#has', () => {
        it('shoule be return true if key exists', () => {
            srv.set(KEY, 10);
            expect(srv.has(KEY)).toBe(true);
        });
        it('shoule be return true if key not exists', () => {
            expect(srv.has(KEY)).toBe(false);
        });
    });

    describe('#remove', () => {
        it('shoule be return null because has removed', () => {
            srv.set(KEY, 10);
            expect(srv.getNone(KEY)).toBe(10);
            srv.remove(KEY);
            expect(srv.getNone(KEY)).toBeNull();
        });
    });

    describe('#clear', () => {
        it('shoule be return null', () => {
            srv.set(KEY, 10, { type: 'm' });
            expect(srv.getNone(KEY)).toBe(10);
            srv.clear();
            expect(srv.getNone(KEY)).toBeNull();
        });
    });
});
