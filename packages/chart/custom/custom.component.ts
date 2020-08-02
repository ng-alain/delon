import { Platform } from '@angular/cdk/platform';
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
import { Types } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'g2,g2-custom',
  exportAs: 'g2Custom',
  template: ` <ng-content></ng-content> `,
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

  @Input() @InputNumber() delay = 0;
  @Input() @InputNumber() height: number;
  @Input() @InputNumber() resizeTime = 0;
  @Input() theme: string | Types.LooseObject;
  @Output() readonly render = new EventEmitter<ElementRef>();
  // tslint:disable-next-line:no-output-native
  @Output() readonly resize = new EventEmitter<ElementRef>();
  @Output() readonly destroy = new EventEmitter<ElementRef>();

  // #endregion

  constructor(private el: ElementRef, configSrv: AlainConfigService, private platform: Platform) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private renderChart(): void {
    this.el.nativeElement.innerHTML = '';
    this.render.emit(this.el);
    this.installResizeEvent();
  }

  private installResizeEvent(): void {
    if (this.resizeTime <= 0 || this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(Math.min(200, this.resizeTime)))
      .subscribe(() => this.resize.emit(this.el));
  }

  ngAfterViewInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    setTimeout(() => this.renderChart(), this.delay);
  }

  ngOnDestroy(): void {
    this.destroy.emit(this.el);
    if (this.resize$) this.resize$.unsubscribe();
  }
}
