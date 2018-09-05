import { RouteReuseStrategy, ActivatedRouteSnapshot } from '@angular/router';
import { NaReuseTabService } from './reuse-tab.service';

export class ReuseTabStrategy implements RouteReuseStrategy {
  constructor(private srv: NaReuseTabService) {}

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.srv.shouldDetach(route);
  }
  store(route: ActivatedRouteSnapshot, handle: {}): void {
    this.srv.store(route, handle);
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.srv.shouldAttach(route);
  }
  retrieve(route: ActivatedRouteSnapshot): {} {
    return this.srv.retrieve(route);
  }
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    return this.srv.shouldReuseRoute(future, curr);
  }
}
