import {
  Component,
  OnInit,
  ElementRef,
  Input,
  OnDestroy,
  EventEmitter,
  Output,
  HostBinding,
} from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'g2-chart',
  template: ``,
})
export class G2ChartComponent implements OnInit, OnDestroy {
  // region: fields

  @HostBinding('style.height.px')
  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = coerceNumberProperty(value);
  }
  private _height;

  @Input()
  get resizeTime() {
    return this._resizeTime;
  }
  set resizeTime(value: any) {
    this._resizeTime = coerceNumberProperty(value);
  }
  private _resizeTime = 0;

  @Output() render: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  @Output() resize: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  @Output() destroy: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  // endregion

  constructor(private el: ElementRef) {}

  private renderChart() {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
  }

  ngOnInit(): void {
    setTimeout(() => this.renderChart(), 200);
  }

  ngOnDestroy(): void {
    this.destroy.emit(this.el);
    this.uninstallResizeEvent();
  }

  // region: resize

  private resize$: Subscription = null;

  private installResizeEvent() {
    if (this.resizeTime <= 0 || !this.resize$) return;

    if (this.resizeTime <= 200) this.resizeTime = 200;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(this.resizeTime))
      .subscribe(() => this.resize.emit(this.el));
  }

  private uninstallResizeEvent() {
    if (this.resize$) this.resize$.unsubscribe();
  }

  // endregion
}
