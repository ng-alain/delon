import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface MatchRouterOptions {
  regex: RegExp;
  cls?: string;
}

@Directive({
  selector: '[matchRouter]'
})
export class MatchRouterDirective implements AfterViewInit, OnDestroy {
  private _options: MatchRouterOptions;
  private url$: Subscription;

  @Input('matchRouter')
  set options(val: MatchRouterOptions) {
    this._options = { cls: 'ant-menu-item-selected', ...val };
  }

  constructor(private router: Router, private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  private setCls(): void {
    if (!this.router.navigated) {
      return;
    }
    Promise.resolve().then(() => {
      const { regex, cls } = this._options;
      if (regex.test(this.router.url)) {
        this.renderer.addClass(this.element.nativeElement, cls!);
      } else {
        this.renderer.removeClass(this.element.nativeElement, cls!);
      }
    });
  }

  ngAfterViewInit(): void {
    this.url$ = this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => this.setCls());
    this.setCls();
  }

  ngOnDestroy(): void {
    if (this.url$) {
      this.url$.unsubscribe();
    }
  }
}
