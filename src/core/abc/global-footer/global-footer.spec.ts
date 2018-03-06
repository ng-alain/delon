import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AdGlobalFooterModule } from './global-footer.module';

describe('abc: global-footer', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterModule.forRoot([]), AdGlobalFooterModule.forRoot() ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            declarations: [ TestComponent ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be create', () => {
        context.links = [
            {
                title: '帮助',
                href: ''
            },
            {
                title: '隐私',
                href: ''
            },
            {
                title: '条款',
                href: ''
            }
        ];
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.links a')).length).toBe(context.links.length);
    });

    it('should be custom copyright template', () => {
        expect(dl.queryAll(By.css('#copyright')).length).toBe(1);
    });
});

@Component({
    template: `
    <div style="background:#f5f5f5; height: 100%;">
        <global-footer [links]="links">
            <ng-template #copyright>
                <div id="copyright">copyright</div>
            </ng-template>
        </global-footer>
    </div>
    `
})
class TestComponent {
    links: any = [];
}
