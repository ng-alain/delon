import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { MetaService, MobileService } from '@core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    '[class.main-wrapper]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {
  private destroy$ = inject(DestroyRef);
  isMobile!: boolean;
  opened = false;

  constructor(
    public meta: MetaService,
    private mobileSrv: MobileService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.mobileSrv.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(res => {
      this.isMobile = res;
      this.cdr.detectChanges();
    });
  }

  to(): void {
    this.opened = false;
  }
}
