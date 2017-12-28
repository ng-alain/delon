import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as Mock from 'mockjs';
import { MockService } from './mock.service';
import { MockStatusError } from './status.error';
import { DM_USER_OPTIONS_TOKEN, MockOptions, DM_OPTIONS_TOKEN } from '../mock.options';
import { optionsFactory } from '../index';
import { MockRequest } from './interface';

const DATA = {
    USERS: {
        // 支持值为 Object 和 Array
        'GET /users': { users: [1, 2] },
        // GET 可省略
        '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
        '/users/:id': (req: MockRequest) => req.params,
        'POST /users/1': { uid: 0, action: 'add' }
    }
};

describe('mock: service', () => {
    let injector: Injector;
    let srv: MockService = null;

    function genModule(options: MockOptions) {
        injector = TestBed.configureTestingModule({
            providers: [
                { provide: DM_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DM_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DM_USER_OPTIONS_TOKEN] },
                MockService
            ]
        });
        srv = injector.get(MockService);
    }

    describe('[default]', () => {
        beforeEach(() => genModule({
            data: DATA
        }));

        it('should be init', () => {
            expect(srv).not.toBeNull();
        });

        it('should be return GET rule', () => {
            const rule = srv.getRule('GET', '/users');
            expect(rule).not.toBeNull();
            expect(rule.url).toBe('/users');
        });

        it('should be return POST rule', () => {
            const rule = srv.getRule('POST', '/users/1');
            expect(rule).not.toBeNull();
            expect(rule.method).toBe('POST');
            expect(rule.url).toBe('/users/1');
        });

        it('should be return route param', () => {
            const rule = srv.getRule('GET', '/users/2');
            expect(rule).not.toBeNull();
            expect(rule.method).toBe('GET');
            expect(rule.url).toBe('/users/2');
        });

        it('#clearCache', () => {
            srv.clearCache();
            const rule = srv.getRule('POST', '/users/1');
            expect(rule).toBeNull();
        });
    });

    it('should be throw invalid method error', () => {
        expect(() => {
            genModule({
                data: {
                    USERS: {
                        'AAA /users': {}
                    }
                }
            });
        }).toThrow();
    });

    it('should be throw invalid function error', () => {
        expect(() => {
            genModule({
                data: {
                    USERS: {
                        'AAA /users': 1
                    }
                }
            });
        }).toThrow();
    });
});
