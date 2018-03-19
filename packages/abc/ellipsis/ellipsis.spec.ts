import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, Injector } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AdEllipsisModule } from './ellipsis.module';

describe('abc: ellipsis', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;
    let injector: Injector;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [ AdEllipsisModule.forRoot() ],
            declarations: [ TestComponent ]
        });

        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be ellipsis', () => {
        const ret = ((dl.nativeElement as HTMLElement).querySelector('ellipsis') as HTMLElement).style['-webkit-line-clamp'];
        expect(ret).not.toBeUndefined();
        expect(+ret).toBe(context.lines);
    });
});

@Component({
    template: `
    <ellipsis [lines]="lines" style="width: 200px">
        <p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>
    </ellipsis>`
})
class TestComponent {
    lines = 3;
}
