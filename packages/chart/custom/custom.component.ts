import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber, NumberInput } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'g2,g2-custom',
  exportAs: 'g2Custom',
  template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <ng-content></ng-content>
  `,
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2CustomComponent extends G2BaseComponent {
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_resizeTime: NumberInput;

  // #region fields

  @Input() @InputNumber() height: number;
  @Input() @InputNumber() resizeTime = 0;
  @Output() readonly render = new EventEmitter<ElementRef>();
  @Output() readonly resize = new EventEmitter<ElementRef>();
  @Output() readonly destroy = new EventEmitter<ElementRef>();

  // #endregion

  install(): void {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
    this.installResizeEvent();
  }

  attachChart(): void {}

  private installResizeEvent(): void {
    if (this.resizeTime <= 0) return;

    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroy$), debounceTime(Math.min(200, this.resizeTime)))
      .subscribe(() => this.resize.emit(this.el));
  }
}
