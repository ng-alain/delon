import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { MetaService, MobileService } from '@core';

import { FooterComponent } from '../footer/footer.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    '[class.main-wrapper]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent, NzAffixModule, NzIconModule, MainMenuComponent, NzGridModule]
})
export class ContentComponent implements OnInit {
  readonly meta = inject(MetaService);
  private readonly mobileSrv = inject(MobileService);
  private readonly cdr = inject(ChangeDetectorRef);

  private destroy$ = inject(DestroyRef);
  isMobile!: boolean;
  opened = false;

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
