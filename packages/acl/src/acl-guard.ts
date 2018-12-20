import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { DelonACLConfig } from './acl.config';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Injectable({ providedIn: 'root' })
export class ACLGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private srv: ACLService, private router: Router, private options: DelonACLConfig) { }

  private process(guard: ACLCanType | Observable<ACLCanType>): Observable<boolean> {
    return (
      guard && guard instanceof Observable ?
        guard :
        of(typeof guard !== 'undefined' && guard !== null ? (guard as ACLCanType) : null)
    ).pipe(
      map(v => this.srv.can(v)),
      tap(v => {
        if (v) return;
        this.router.navigateByUrl(this.options.guard_url);
      }),
    );
  }

  // lazy loading
  canLoad(route: Route): Observable<boolean> {
    return this.process((route.data && route.data.guard) || null);
  }
  // all children route
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
  // route
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.process((route.data && route.data.guard) || null);
  }
}
