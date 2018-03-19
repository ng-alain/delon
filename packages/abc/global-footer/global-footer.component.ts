import { Component, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
    selector: 'global-footer',
    template: `
    <div *ngIf="links && links.length > 0" class="links">
        <a *ngFor="let i of links" routerLink="{{i.href}}" [attr.target]="i.blankTarget">{{i.title}}</a>
    </div>
    <div class="copyright"><ng-content></ng-content></div>
    `,
    host: { '[class.ad-global-footer]': 'true' },
    preserveWhitespaces: false
})
export class GlobalFooterComponent {

    @Input() links: { title: string, href: string, blankTarget?: boolean }[];

}
