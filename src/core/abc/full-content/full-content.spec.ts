import { Component, DebugElement, TemplateRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By, DOCUMENT } from '@angular/platform-browser';
import { RouterModule, Router, ActivationEnd, ActivationStart } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AdFullContentModule } from './full-content.module';
import { FullContentComponent } from './full-content.component';
import { FullContentService } from './full-content.service';

describe('abc: full-content', () => {
    let injector: Injector;
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;
    let doc: Document;
    let el: HTMLElement;
    let bodyEl: HTMLElement;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [
                AdFullContentModule.forRoot(),
                RouterModule.forRoot([])
            ],
            declarations: [ TestComponent ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    function createComp() {
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
        doc = injector.get(DOCUMENT);
        bodyEl = document.querySelector('body');
        el = dl.query(By.css('full-content')).nativeElement as HTMLElement;
    }

    afterEach(() => {
        context.comp.ngOnDestroy();
    });

    function isExists(cls: string, stauts: boolean = true) {
        if (stauts)
            expect(dl.query(By.css(cls))).not.toBeNull();
        else
            expect(dl.query(By.css(cls))).toBeNull();
    }

    describe('#fullscreen', () => {
        beforeEach(() => createComp());
        it('with true', () => {
            context.fullscreen = true;
            fixture.detectChanges();
            expect(doc.body.classList.contains('full-content-fs')).toBe(true);
        });
        it('with false', () => {
            context.fullscreen = false;
            fixture.detectChanges();
            expect(doc.body.classList.contains('full-content-fs')).toBe(false);
        });
    });

    describe('#hideTitle', () => {
        beforeEach(() => createComp());
        describe('#with [true]', () => {
            beforeEach(() => context.hideTitle = true);
            it('when fullscreen', () => {
                context.fullscreen = true;
                fixture.detectChanges();
                expect(doc.body.classList.contains('full-content-ht')).toBe(true);
            });
            it('when not fullscreen', () => {
                context.fullscreen = false;
                fixture.detectChanges();
                expect(doc.body.classList.contains('full-content-ht')).toBe(false);
            });
        });
        describe('#with [false]', () => {
            beforeEach(() => context.hideTitle = false);
            it('when fullscreen', () => {
                context.fullscreen = true;
                fixture.detectChanges();
                expect(doc.body.classList.contains('full-content-ht')).toBe(false);
            });
            it('when not fullscreen', () => {
                context.fullscreen = false;
                fixture.detectChanges();
                expect(doc.body.classList.contains('full-content-ht')).toBe(false);
            });
        });
    });

    describe('logic', () => {
        it('should be switch fullscreen via directive', () => {
            createComp();
            expect(context.fullscreen).toBe(false);
            (dl.query(By.css('button')).nativeElement as HTMLButtonElement).click();
            fixture.detectChanges();
            expect(context.fullscreen).toBe(true);
            (dl.query(By.css('button')).nativeElement as HTMLButtonElement).click();
            fixture.detectChanges();
            expect(context.fullscreen).toBe(false);
        });
        it('should be switch fullscreen via service', () => {
            createComp();
            const srv = injector.get(FullContentService);
            expect(context.fullscreen).toBe(false);
            srv.toggle();
            fixture.detectChanges();
            expect(context.fullscreen).toBe(true);
            srv.toggle();
            fixture.detectChanges();
            expect(context.fullscreen).toBe(false);
        });
        it('should be recalculate height when trigger resize', fakeAsync(() => {
            createComp();
            const bodyHeight = 10;
            spyOn(bodyEl, 'getBoundingClientRect').and.returnValue({ height: bodyHeight });
            expect(bodyEl.getBoundingClientRect).not.toHaveBeenCalled();
            window.dispatchEvent(new Event('resize'));
            fixture.detectChanges();
            tick(210);
            expect(bodyEl.getBoundingClientRect).toHaveBeenCalled();
            expect(context.comp._height).toBe(bodyHeight - el.getBoundingClientRect().top - context.padding);
        }));
        it('should be add class when go to include full-content route', () => {
            const eventsSub = new BehaviorSubject<any>(null);
            class MockRouter {
                events = eventsSub;
            }
            TestBed.overrideProvider(Router, { useFactory: () => {
                return new MockRouter();
            }, deps: [] });
            createComp();

            eventsSub.next(new ActivationStart(null));
            eventsSub.complete();
            expect(bodyEl.classList.contains('full-content')).toBe(true);
        });
        it('should be clear class when go to other route', () => {
            const eventsSub = new BehaviorSubject<any>(null);
            class MockRouter {
                events = eventsSub;
            }
            TestBed.overrideProvider(Router, { useFactory: () => {
                return new MockRouter();
            }, deps: [] });
            createComp();
            // mock component destroy
            (dl.nativeElement as HTMLElement).innerHTML = ``;

            eventsSub.next(new ActivationEnd(null));
            eventsSub.complete();
            expect(bodyEl.classList.contains('full-content')).toBe(false);
        });
    });
});

@Component({
    template: `
    <full-content #comp
        [(fullscreen)]="fullscreen"
        [hideTitle]="hideTitle"
        [padding]="padding"
        (fullscreenChange)="change()">
        <button full-toggle>Full</button>
    </full-content>
    `
})
class TestComponent {
    @ViewChild('comp') comp: FullContentComponent;
    fullscreen: boolean = false;
    hideTitle: boolean;
    padding = 24;
    change() {}
}
