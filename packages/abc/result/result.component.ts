import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';

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
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzIconDirective, NzStringTemplateOutletDirective]
})
export class ResultComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly directionality = inject(Directionality, { optional: true });
  private readonly destroy$ = inject(DestroyRef);

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
  dir?: Direction = 'ltr';

  ngOnInit(): void {
    this.dir = this.directionality?.value;
    this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
}
