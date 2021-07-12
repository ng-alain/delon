import { ActivatedRouteSnapshot, RouteReuseStrategy } from '@angular/router';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ReuseTabService } from './reuse-tab.service';

export class ReuseTabStrategy implements RouteReuseStrategy {
  constructor(private srv: ReuseTabService) {}

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.srv.shouldDetach(route);
  }
  store(route: ActivatedRouteSnapshot, handle: unknown): void {
    this.srv.store(route, handle);
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.srv.shouldAttach(route);
  }
  retrieve(route: ActivatedRouteSnapshot): NzSafeAny | null {
    return this.srv.retrieve(route);
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return this.srv.shouldReuseRoute(future, curr);
  }
}
