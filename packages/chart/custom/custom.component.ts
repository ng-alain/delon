import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  input,
  numberAttribute,
  output
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

import { G2BaseComponent } from '@delon/chart/core';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'g2,g2-custom',
  exportAs: 'g2Custom',
  template: `
    @if (!loaded()) {
      <nz-skeleton />
    }
    <ng-content />
  `,
  host: {
    '[style.height.px]': 'height()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class G2CustomComponent extends G2BaseComponent {
  // #region fields

  readonly height = input(undefined, { transform: numberAttribute });
  readonly resizeTime = input(0, { transform: numberAttribute });
  readonly render = output<ElementRef>();
  readonly resize = output<ElementRef>();
  readonly destroy = output<ElementRef>();

  // #endregion

  install(): void {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
    this.installResizeEvent();
  }

  private resize$?: Subscription;

  private installResizeEvent(): void {
    this.resize$?.unsubscribe();
    if (this.resizeTime() <= 0) {
      return;
    }
    this.resize$ = fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(Math.min(200, this.resizeTime())))
      .subscribe(() => this.resize.emit(this.el));
  }
}
