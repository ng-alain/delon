import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  OnInit,
  Optional,
  TemplateRef,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
export class ResultComponent implements OnInit {
  private destroy$ = inject(DestroyRef);
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

  @Input() title?: string | TemplateRef<void>;
  @Input() description?: string | TemplateRef<void>;
  @Input() extra?: string | TemplateRef<void>;
  dir: Direction = 'ltr';

  constructor(
    @Optional() private directionality: Directionality,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
}
