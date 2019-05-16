import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'g2,g2-custom',
  exportAs: 'g2Custom',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2CustomComponent implements AfterViewInit, OnDestroy {
  private resize$: Subscription | null = null;

  // #region fields

  @Input() @InputNumber() height: number;
  @Input() @InputNumber() resizeTime = 0;
  @Output() readonly render = new EventEmitter<ElementRef>();
  @Output() readonly resize = new EventEmitter<ElementRef>();
  @Output() readonly destroy = new EventEmitter<ElementRef>();

  // #endregion

  constructor(private el: ElementRef) {}

  private renderChart() {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
    this.installResizeEvent();
  }

  private installResizeEvent() {
    if (this.resizeTime <= 0 || this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(Math.min(200, this.resizeTime)))
      .subscribe(() => this.resize.emit(this.el));
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnDestroy(): void {
    this.destroy.emit(this.el);
    if (this.resize$) this.resize$.unsubscribe();
  }
}
