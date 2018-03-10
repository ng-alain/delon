import { Injector, Component } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuService } from '@delon/theme';

import { ReuseTabMatchMode } from './interface';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabStrategy } from './reuse-tab.strategy';
import { AdReuseTabModule } from './reuse-tab.module';

describe('abc: reuse-tab-strategy', () => {
    let injector: Injector;
    let fixture: ComponentFixture<RootComponent>;
    let router: Router;
    let srv: ReuseTabService;
    let strategy: ReuseTabStrategy;
    let page: PageObject;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            declarations: [ RootComponent, AComponent, BComponent, CComponent ],
            imports: [
                AdReuseTabModule.forRoot(),
                RouterTestingModule.withRoutes([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: BComponent },
                    { path: 'simple', component: CComponent },
                    {
                        path: 'trade',
                        component: RootComponent,
                        children: [
                            { path: 'list', component: AComponent },
                            { path: 'item/:id', component: BComponent }
                        ]
                    },
                    { path: 'lazy', loadChildren: 'lazy' },
                ])
            ],
            providers: [
                MenuService
            ]
        });
        fixture = TestBed.createComponent(RootComponent);
        srv = injector.get(ReuseTabService);
        srv.mode = ReuseTabMatchMode.URL;
        srv.debug = true;

        router = injector.get(Router);
        strategy = new ReuseTabStrategy(srv);
        router.routeReuseStrategy = strategy;

        page = new PageObject();
    });

    afterEach(() => srv.ngOnDestroy());

    it('should be stored when route navigate', fakeAsync(() => {
        page.twoJump();
        srv.change.subscribe(res => {
            expect(res.active).toBe('add');
        });
    }));

    it('should be reuse when route navigate has catched', fakeAsync(() => {
        let time: string;
        page.to('/home')
            .then(() => time = page.getTime())
            .then(() => page.to('/simple'))
            .then(() => page.to('/home'))
            .then(() => expect(page.getTime()).toBe(time));
    }));

    it('should be reuse with children router', fakeAsync(() => {
        let time: string;
        page.to('/trade/item/1')
            .then(() => time = page.getTime())
            .then(() => page.to('/trade/item/2'))
            .then(() => page.to('/trade/item/1'))
            .then(() => expect(page.getTime()).toBe(time));
    }));

    class PageObject {
        advance(): this {
            tick();
            fixture.detectChanges();
            return this;
        }
        to(url = '/home'): Promise<any> {
            return router.navigateByUrl(url)
                         .then(() => this.advance())
                         .catch((err) => {
                                 console.log('to', err);
                                 expect(false).toBe(true);
                         });
        }
        getTime() {
            return document.querySelector('#time').innerHTML;
        }
        twoJump(from: string = '/home', to: string = '/simple'): Promise<any> {
            return router.navigateByUrl(from)
                        .then(() => this.advance())
                        .then(() => router.navigateByUrl(to))
                        .then(() => this.advance())
                        .catch((err) => {
                                console.log('twoJump', err);
                                expect(false).toBe(true);
                        });
        }
        tripleJump(one: string = '/home', two: string = '/simple', third: string = '/trade/list'): Promise<any> {
            return router.navigateByUrl(one)
                        .then(() => this.advance())
                        .then(() => router.navigateByUrl(two))
                        .then(() => this.advance())
                        .then(() => router.navigateByUrl(third))
                        .then(() => this.advance())
                        .catch((err) => {
                                console.log('tripleJump', err);
                                expect(false).toBe(true);
                        });
        }
    }
});

@Component({
    selector: 'root-comp',
    template: `<router-outlet></router-outlet>`
})
class RootComponent {}

@Component({
    selector: 'a-comp',
    template: `<div id="time">{{time}}</div>`
})
class AComponent {
    time = +new Date;
}

@Component({
    selector: 'b-comp',
    template: `<div id="time">{{time}}</div>`
})
class BComponent {
    time = +new Date;
}

@Component({
    selector: 'c-comp',
    template: `<div id="time">{{time}}</div>`
})
class CComponent {
    time = +new Date;
}
