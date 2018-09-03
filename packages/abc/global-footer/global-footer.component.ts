import { Component, Input } from '@angular/core';

@Component({
  selector: 'global-footer',
  template: `
  <div *ngIf="links && links.length > 0" class="global-footer__links">
    <a class="global-footer__links-item" *ngFor="let i of links" routerLink="{{i.href}}" [attr.target]="i.blankTarget">{{i.title}}</a>
  </div>
  <div class="global-footer__copyright"><ng-content></ng-content></div>
  `,
  host: { '[class.global-footer]': 'true' },
  preserveWhitespaces: false,
})
export class NaGlobalFooterComponent {
  @Input() links: { title: string; href: string; blankTarget?: boolean }[];
}
