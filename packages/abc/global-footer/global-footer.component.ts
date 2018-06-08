import { Component, Input } from '@angular/core';

@Component({
  selector: 'global-footer',
  template: `
  <div *ngIf="links && links.length > 0" class="links">
    <ng-container *ngFor="let link of links">
      <a *ngIf="link.href.indexOf('http')==-1" routerLink="{{link.href}}" [attr.target]="link.blankTarget">{{link.title}}</a>
      <a *ngIf="link.href.indexOf('http')>-1" href="{{link.href}}" [attr.target]="link.blankTarget">{{link.title}}</a>
    </ng-container>
  </div>
  <div class="copyright"><ng-content></ng-content></div>
  `,
  host: { '[class.ad-global-footer]': 'true' },
  preserveWhitespaces: false,
})
export class GlobalFooterComponent {
  @Input() links: { title: string; href: string; blankTarget?: boolean }[];
}
