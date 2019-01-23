import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { Subscription } from 'rxjs';
import { I18NService } from '../../../core/i18n/service';
import { MetaService } from '../../../core/meta.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent implements OnInit, OnDestroy {
  private i18n$: Subscription;

  @Output() readonly click = new EventEmitter<string>();

  constructor(
    public meta: MetaService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private cdr: ChangeDetectorRef,
  ) {}

  to(url: string) {
    this.click.next(url);
  }

  ngOnInit(): void {
    this.i18n$ = this.i18n.change.subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy(): void {
    this.i18n$.unsubscribe();
  }
}
