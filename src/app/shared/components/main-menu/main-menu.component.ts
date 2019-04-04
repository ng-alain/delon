import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { I18NService } from '../../../core/i18n/service';
import { MetaService } from '../../../core/meta.service';
import { MobileService } from '../../../core/mobile.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isMobile: boolean;

  @Output() readonly click = new EventEmitter<string>();

  constructor(
    public meta: MetaService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private mobileSrv: MobileService,
    private cdr: ChangeDetectorRef,
  ) {
    this.mobileSrv.change
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => (this.isMobile = res));
  }

  to(url: string) {
    this.click.next(url);
  }

  ngOnInit(): void {
    this.i18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
