import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MetaService, MobileService } from '@core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    '[class.main-wrapper]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {
  isMobile: boolean;
  opened = false;

  constructor(public meta: MetaService, private mobileSrv: MobileService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.mobileSrv.change.pipe(untilDestroyed(this)).subscribe(res => {
      this.isMobile = res;
      this.cdr.detectChanges();
    });
  }

  to(): void {
    this.opened = false;
  }
}
