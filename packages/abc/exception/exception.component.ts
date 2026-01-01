import { Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent } from '@angular/cdk/observers';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { DelonLocaleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService, AlainExceptionType } from '@delon/util/config';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export type ExceptionType = 403 | 404 | 500;

@Component({
  selector: 'exception',
  exportAs: 'exception',
  template: `
    <div class="exception__img-block">
      <div class="exception__img" [style.backgroundImage]="_img()"></div>
    </div>
    <div class="exception__cont">
      @if (_title()) {
        <h1 class="exception__cont-title" [innerHTML]="_title()"></h1>
      }
      <div class="exception__cont-desc" [innerHTML]="_desc()"></div>
      <div class="exception__cont-actions">
        <div (cdkObserveContent)="checkContent()" #conTpl>
          <ng-content />
        </div>
        @if (!hasCon()) {
          <button nz-button [routerLink]="backRouterLink()" [nzType]="'primary'">
            {{ locale().backToHome }}
          </button>
        }
      </div>
    </div>
  `,
  host: {
    class: 'exception',
    '[class.exception-rtl]': `dir() === 'rtl'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CdkObserveContent, NzButtonComponent, RouterLink]
})
export class ExceptionComponent {
  private readonly dom = inject(DomSanitizer);
  private readonly cogSrv = inject(AlainConfigService);

  private readonly conTpl = viewChild.required<ElementRef<HTMLElement>>('conTpl');
  protected locale = inject(DelonLocaleService).valueSignal('exception');
  protected dir = inject(Directionality).valueSignal;

  protected hasCon = signal(false);
  private typeDict!: NonNullable<AlainExceptionType['typeDict']>;
  protected typeItem = signal<NonNullable<AlainExceptionType['typeDict']>[ExceptionType] | null>(null);

  readonly type = input<ExceptionType>(404);
  readonly img = input<string>();
  readonly title = input<string>();
  readonly desc = input<string>();
  readonly backRouterLink = input<string | NzSafeAny[]>('/');
  protected readonly _img = computed(() => {
    const v = this.img() ?? this.typeItem()?.img;
    return v == null ? null : this.dom.bypassSecurityTrustStyle(`url('${v}')`);
  });
  protected readonly _title = computed(() => {
    const v = this.title() ?? this.typeItem()?.title;
    return v == null ? null : this.dom.bypassSecurityTrustHtml(v);
  });
  protected readonly _desc = computed(() => {
    const v = this.desc() ?? this.typeItem()?.desc ?? this.locale()[this.type()];
    return v == null ? null : this.dom.bypassSecurityTrustHtml(v);
  });

  constructor() {
    this.cogSrv.attach(this, 'exception', {
      typeDict: {
        403: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
          title: '403'
        },
        404: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
          title: '404'
        },
        500: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
          title: '500'
        }
      }
    });

    effect(() => {
      const type = this.type();
      this.typeItem.set(this.typeDict?.[type]);
    });

    afterNextRender(() => {
      this.checkContent();
    });
  }

  protected checkContent(): void {
    this.hasCon.set(!isEmpty(this.conTpl().nativeElement));
  }
}
