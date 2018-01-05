import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/observable/of';
import { ACLGuard } from './acl-guard';
import { ACLService } from './acl.service';
import { ACLType } from './acl.type';
import { DACL_USER_OPTIONS_TOKEN, DACL_OPTIONS_TOKEN } from '../acl.options';
import { optionsFactory } from '../index';

describe('acl: guard', () => {

    let injector: Injector;
    let srv: ACLGuard;
    let acl: ACLService;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes([]) ],
            providers: [
                { provide: DACL_USER_OPTIONS_TOKEN, useValue: {} },
                { provide: DACL_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DACL_USER_OPTIONS_TOKEN] },
                ACLService, ACLGuard
            ]
        });
        srv = injector.get(ACLGuard);
        acl = injector.get(ACLService);
        acl.set(<ACLType>{
            role: [ 'user' ],
            ability: [ 1, 2, 3 ]
        });
    });

    it(`should load route when no-specify permission`, (done: () => void) => {
        srv.canActivate(<any>{}, null).subscribe(res => {
            expect(res).toBeTruthy();
            done();
        });
    });

    it(`should load route when specify permission`, (done: () => void) => {
        srv.canActivate(<any>{
            data: {
                guard: 'user'
            }
        }, null).subscribe(res => {
            expect(res).toBeTruthy();
            done();
        });
    });

    it(`should unable load route if no-permission`, (done: () => void) => {
        srv.canActivate(<any>{
            data: {
                guard: 'admin'
            }
        }, null).subscribe(res => {
            expect(res).toBeFalsy();
            done();
        });
    });

    it(`should load route via Observable`, (done: () => void) => {
        srv.canActivate(<any>{
            data: {
                guard: of('user')
            }
        }, null).subscribe(res => {
            expect(res).toBeTruthy();
            done();
        });
    });

    it(`should load route using ability`, (done: () => void) => {
        srv.canActivate(<any>{
            data: {
                guard: of(1)
            }
        }, null).subscribe(res => {
            expect(res).toBeTruthy();
            done();
        });
    });

    it(`should unable load route using ability`, (done: () => void) => {
        srv.canActivate(<any>{
            data: {
                guard: of(10)
            }
        }, null).subscribe(res => {
            expect(res).toBeFalsy();
            done();
        });
    });

    it(`#canLoad`, (done: () => void) => {
        srv.canLoad(<any>{
            data: {
                guard: of('user')
            }
        }).subscribe(res => {
            expect(res).toBeTruthy();
            done();
        });
    });

    it(`#canActivateChild`, (done: () => void) => {
        srv.canActivateChild(<any>{
            data: {
                guard: of('user')
            }
        }, null).subscribe(res => {
            expect(res).toBeTruthy();
            done();
        });
    });

});
