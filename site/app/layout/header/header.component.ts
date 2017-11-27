import { Component } from '@angular/core';
import { I18NService } from 'app/i18n/service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.less' ]
})
export class HeaderComponent {
    constructor(public i18n: I18NService) {}
}
