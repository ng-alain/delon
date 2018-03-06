import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdFooterToolbarModule } from './footer-toolbar.module';

describe('abc: footer-toolbar', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AdFooterToolbarModule.forRoot() ],
            declarations: [ TestComponent ]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be create', () => {
        expect(dl.queryAll(By.css('.footer-toolbar')).length).toBe(1);
    });

    it('should be load error-collect', () => {
        context.errorCollect = true;
        fixture.detectChanges();
        expect(dl.queryAll(By.css('error-collect')).length).toBe(1);
    });

    it('should be custom extra template', () => {
        expect(dl.queryAll(By.css('#extra')).length).toBe(1);
    });
});

@Component({
    template: `
    <form>
        <footer-toolbar [errorCollect]="errorCollect">
            <ng-template #extra>
                <p id="extra">extra</p>
            </ng-template>
            <button>Submit</button>
        </footer-toolbar>
    </form>
    `
})
class TestComponent {
    errorCollect = true;
}
