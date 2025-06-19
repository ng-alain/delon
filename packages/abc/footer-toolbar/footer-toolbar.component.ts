import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  inject,
  input
} from '@angular/core';

import { ErrorCollectComponent } from '@delon/abc/error-collect';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';

const CLSBODY = 'footer-toolbar__body';

@Component({
  selector: 'footer-toolbar',
  exportAs: 'footerToolbar',
  template: `
    <div class="footer-toolbar__left">
      <ng-container *nzStringTemplateOutlet="extra()">{{ extra() }}</ng-container>
    </div>
    <div class="footer-toolbar__right">
      @if (errorCollect()) {
        <error-collect />
      }
      <ng-content />
    </div>
  `,
  host: {
    class: 'footer-toolbar'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, ErrorCollectComponent]
})
export class FooterToolbarComponent implements OnDestroy {
  private readonly bodyCls = inject(DOCUMENT).querySelector('body')?.classList;

  errorCollect = input(false, { transform: booleanAttribute });
  extra = input<string | TemplateRef<void>>();

  constructor() {
    afterNextRender(() => this.bodyCls?.add(CLSBODY));
  }

  ngOnDestroy(): void {
    this.bodyCls?.remove(CLSBODY);
  }
}
