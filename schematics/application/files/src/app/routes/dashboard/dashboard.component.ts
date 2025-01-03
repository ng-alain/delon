import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderModule } from '@delon/abc/page-header';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderModule]
})
export class DashboardComponent {}
