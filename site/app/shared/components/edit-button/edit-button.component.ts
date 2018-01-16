import { Component, Input } from '@angular/core';
import { MetaService } from './../../../core/meta.service';
import { I18NService } from '../../../i18n/service';

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
    set item(data: any) {
        this._full = `${this.meta.github}/edit/master/${this.i18n.get(data.source)}`;
    }

    constructor(private meta: MetaService, private i18n: I18NService) {}
}
