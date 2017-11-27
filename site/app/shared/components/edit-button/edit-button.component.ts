import { Component, Input } from '@angular/core';
import { MetaService } from './../../../core/meta.service';

@Component({
    selector: 'edit-button',
    template: `
    <nz-tooltip nzTitle="{{'app.content.edit-page' | translate}}">
      <a href="{{_full}}" target="_blank" class="edit-button" nz-tooltip><i class="anticon anticon-edit"></i></a>
    </nz-tooltip>
    `
})
export class EditButtonComponent {

    _full: string;

    @Input()
    set url(u: string) {
        this._full = `${this.meta.github}/edit/master/${u}`;
    }

    constructor(private meta: MetaService) {}
}
