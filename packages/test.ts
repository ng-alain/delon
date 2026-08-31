import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';


@NgModule({
  providers: [provideZoneChangeDetection(), provideNzDateFnsAdapter()],
})
class AppTestingModule {}

getTestBed().initTestEnvironment([BrowserTestingModule,AppTestingModule], platformBrowserTesting(), {
  teardown: { destroyAfterEach: false },
});
