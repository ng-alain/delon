import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { MetaService, MOBILE } from '@core';

import { FooterComponent } from '../footer/footer.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    class: 'main-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, FooterComponent, NzAffixModule, NzIconModule, MainMenuComponent, NzGridModule]
})
export class ContentComponent {
  readonly meta = inject(MetaService);
  protected mobile = MOBILE;
  protected opened = signal(false);
}
