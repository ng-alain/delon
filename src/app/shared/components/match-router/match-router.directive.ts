import { Directive, ElementRef, Renderer2, afterNextRender, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface MatchRouterOptions {
  regex: RegExp;
  cls?: string;
}

@Directive({
  selector: '[matchRouter]'
})
export class MatchRouterDirective {
  private readonly router = inject(Router);
  private readonly element = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  readonly options = input.required<MatchRouterOptions>({ alias: 'matchRouter' });

  constructor() {
    this.router.events
      .pipe(
        filter(evt => evt instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => this.setCls());

    afterNextRender(() => this.setCls());
  }

  private setCls(): void {
    if (!this.router.navigated) {
      return;
    }

    Promise.resolve().then(() => {
      const { regex, cls } = { cls: 'ant-menu-item-selected', ...this.options() };
      if (regex.test(this.router.url)) {
        this.renderer.addClass(this.element.nativeElement, cls!);
      } else {
        this.renderer.removeClass(this.element.nativeElement, cls!);
      }
    });
  }
}
