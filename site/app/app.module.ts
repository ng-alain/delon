import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';

import { I18NService } from './i18n/service';
import { CoreModule } from './core/core.module';
import { StartupService } from './core/startup.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { DelonModule } from './delon.module';

import { SwUpdatesModule } from './sw-updates/sw-updates.module';

export function StartupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
        SwUpdatesModule,
        CoreModule,
        DelonModule.forRoot(),
        SharedModule,
        RoutesModule,
        // i18n
        TranslateModule.forRoot()
    ],
    providers: [
        I18NService,
        StartupService,
        {
            provide: APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [StartupService],
            multi: true
        }
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
