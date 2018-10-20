import {
  Component,
  OnInit,
  ElementRef,
  Input,
  OnDestroy,
  EventEmitter,
  Output,
  HostBinding,
  ChangeDetectionStrategy
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InputNumber } from '@delon/util';

@Component({
  selector: 'g2,g2-custom',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class G2CustomComponent implements OnInit, OnDestroy {

  private resize$: Subscription = null;

  // #region fields

  @HostBinding('style.height.px')
  @Input()
  @InputNumber()
  height: number;

  @Input()
  @InputNumber()
  resizeTime = 0;

  @Output()
  render: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  @Output()
  resize: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  @Output()
  destroy: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  // #endregion

  constructor(private el: ElementRef) {}

  private renderChart() {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
    this.installResizeEvent();
  }

  private installResizeEvent() {
    if (this.resizeTime <= 0 || !this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(Math.min(200, this.resizeTime)))
      .subscribe(() => this.resize.emit(this.el));
  }

  ngOnInit(): void {
    setTimeout(() => this.renderChart());
  }

  ngOnDestroy(): void {
    this.destroy.emit(this.el);
    if (this.resize$) this.resize$.unsubscribe();
  }
}
