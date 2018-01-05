import { CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, Route, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';
import { DACL_OPTIONS_TOKEN, ACLOptions } from '../acl.options';

@Injectable()
export class ACLGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private srv: ACLService,
        private router: Router,
        @Inject(DACL_OPTIONS_TOKEN) private options: ACLOptions
    ) {}

    private process(guard: ACLCanType | Observable<ACLCanType>, url: string = '/'): Observable<boolean> {
        return (guard && guard instanceof Observable ? guard : of(typeof guard !== 'undefined' ? guard as ACLCanType : null)).pipe(
            map(v => this.srv.can(v)),
            tap(v => {
                if (v) return;
                this.router.navigateByUrl(this.options.guard_url || '/403');
            })
        );
    }

    // lazy loading
    canLoad(route: Route): Observable<boolean> {
        return this.process(route.data && route.data.guard || null);
    }
    // all children route
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }
    // route
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.process(route.data && route.data.guard || null);
    }
}
