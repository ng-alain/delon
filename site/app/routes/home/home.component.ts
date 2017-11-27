import { Component, OnInit, OnDestroy } from '@angular/core';
import { I18NService } from '../../i18n/service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.less' ],
    host: {
        '[class.home-wrapper]': 'true'
    }
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(public i18n: I18NService) {}

    ngOnInit() {
        document.querySelector('body').classList.add(`index-page`);
    }

    ngOnDestroy(): void {
        document.querySelector('body').classList.remove(`index-page`);
    }
}
