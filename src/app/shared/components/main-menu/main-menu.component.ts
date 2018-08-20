import { Component, EventEmitter, Output } from '@angular/core';
import { MetaService } from '../../../core/meta.service';

@Component({
    selector: 'main-menu',
    template: `
    <ul nz-menu [nzMode]="'inline'" style="padding-bottom: 64px;">
        <li nz-submenu nzOpen *ngFor="let group of meta.menus">
            <span title>{{group.title}}</span>
            <ul>
                <li nz-menu-item *ngFor="let item of group.list"
                    (click)="to(item.url)"
                    [routerLink]="item.url"
                    [routerLinkActive]="['ant-menu-item-selected']" style="padding-left: 54px;">
                    {{item.title}}
                    <span class="chinese" *ngIf="item.subtitle">{{item.subtitle}}</span>
                </li>
            </ul>
        </li>
    </ul>`
})
export class MainMenuComponent {

    @Output() click = new EventEmitter<string>();

    constructor(public meta: MetaService) { }

    to(url: string) {
        this.click.next(url);
    }
}
