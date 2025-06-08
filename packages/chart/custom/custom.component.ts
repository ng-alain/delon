import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  numberAttribute
} from '@angular/core';
import { fromEvent, debounceTime, takeUntil } from 'rxjs';

import { G2BaseComponent } from '@delon/chart/core';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'g2,g2-custom',
  exportAs: 'g2Custom',
  template: `
    @if (!loaded) {
      <nz-skeleton />
    }
    <ng-content />
  `,
  host: {
    '[style.height.px]': 'height'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class G2CustomComponent extends G2BaseComponent {
  // #region fields

  @Input({ transform: numberAttribute }) height?: number;
  @Input({ transform: numberAttribute }) resizeTime = 0;
  @Output() readonly render = new EventEmitter<ElementRef>();
  @Output() readonly resize = new EventEmitter<ElementRef>();
  @Output() readonly destroy = new EventEmitter<ElementRef>();

  // #endregion

  install(): void {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
    this.installResizeEvent();
  }

  private installResizeEvent(): void {
    if (this.resizeTime <= 0) return;

    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroy$), debounceTime(Math.min(200, this.resizeTime)))
      .subscribe(() => this.resize.emit(this.el));
  }
}
