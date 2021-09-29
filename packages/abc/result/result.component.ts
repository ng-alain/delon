import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'result',
  exportAs: 'result',
  templateUrl: './result.component.html',
  host: {
    '[class.result]': 'true',
    '[class.result-rtl]': `dir === 'rtl'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  _type = '';
  _icon = '';
  @Input()
  set type(value: string) {
    this._type = value;
    switch (value) {
      case 'success':
        this._icon = 'check-circle';
        break;
      case 'error':
        this._icon = 'close-circle';
        break;
      default:
        this._icon = value;
        break;
    }
  }

  @Input() title: string | TemplateRef<void>;
  @Input() description: string | TemplateRef<void>;
  @Input() extra: string | TemplateRef<void>;
  dir: Direction = 'ltr';

  constructor(@Optional() private directionality: Directionality) {}

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
