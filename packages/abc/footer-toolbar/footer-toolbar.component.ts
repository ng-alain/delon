import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  inject
} from '@angular/core';

import { ErrorCollectComponent } from '@delon/abc/error-collect';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';

const CLSBODY = 'footer-toolbar__body';

@Component({
  selector: 'footer-toolbar',
  exportAs: 'footerToolbar',
  templateUrl: './footer-toolbar.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzStringTemplateOutletDirective, ErrorCollectComponent]
})
export class FooterToolbarComponent implements OnInit, OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly bodyCls = inject(DOCUMENT).querySelector('body')?.classList;

  @Input({ transform: booleanAttribute }) errorCollect = false;
  @Input() extra?: string | TemplateRef<void>;

  ngOnInit(): void {
    this.renderer.addClass(this.el, 'footer-toolbar');
    this.bodyCls?.add(CLSBODY);
  }

  ngOnDestroy(): void {
    this.bodyCls?.remove(CLSBODY);
  }
}
