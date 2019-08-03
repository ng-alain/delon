import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, Data } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { DelonACLConfig } from './acl.config';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

@Injectable({ providedIn: 'root' })
export class ACLGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private srv: ACLService, private router: Router, private options: DelonACLConfig) {}

  private process(data: Data): Observable<boolean> {
    data = {
      guard: null,
      guard_url: this.options.guard_url,
      ...data,
    };
    const guard: ACLCanType | Observable<ACLCanType> = data.guard;
    return (guard && guard instanceof Observable ? guard : of(guard != null ? (guard as ACLCanType) : null)).pipe(
      map(v => this.srv.can(v)),
      tap(v => {
        if (v) return;
        this.router.navigateByUrl(data.guard_url);
      }),
    );
  }

  // lazy loading
  canLoad(route: Route): Observable<boolean> {
    return this.process(route.data!);
  }
  // all children route
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
  // route
  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot | null): Observable<boolean> {
    return this.process(route.data);
  }
}
