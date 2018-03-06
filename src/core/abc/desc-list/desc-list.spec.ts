import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { AdDescListModule } from './desc-list.module';
import { By } from '@angular/platform-browser';

describe('abc: desc-list', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [ AdDescListModule.forRoot() ],
            declarations: [ TestComponent ]
        }).createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be create an instance', () => {
        expect(context).not.toBeNull();
        expect(dl.queryAll(By.css('#defaultDL .term')).length).toBe(3);
    });

    it('should be custome title template', () => {
        expect(dl.queryAll(By.css('#custom-title-template #titleTpl')).length).toBe(1);
    });

    it('should be changed property', () => {
        expect(dl.queryAll(By.css('.large')).length).toBe(1);
        // because of two desc-list component
        expect(dl.queryAll(By.css('.horizontal')).length).toBe(2);
        expect(dl.queryAll(By.css('.vertical')).length).toBe(0);
        context.size = 'small';
        context.layout = 'vertical';
        context.col = 5;
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.large')).length).toBe(0);
        expect(dl.queryAll(By.css('.horizontal')).length).toBe(1);
        expect(dl.queryAll(By.css('.vertical')).length).toBe(1);
    });
});

@Component({
    template: `
    <desc-list id="defaultDL"
        [size]="size"
        [title]="'title'"
        [gutter]="gutter"
        [layout]="layout"
        [col]="col"
        >
      <desc-list-item term="Firefox">
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </desc-list-item>
      <desc-list-item term="Firefox">
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </desc-list-item>
      <desc-list-item [term]="termTpl">
        <ng-template #termTpl><p id="termTpl">termTpl</p></ng-template>
      </desc-list-item>
    </desc-list>
    <desc-list id="custom-title-template"
        [title]="title"
        [gutter]="gutter"
        >
        <ng-template #title>
        <p id="titleTpl">titleTpl</p>
        </ng-template>
      <desc-list-item term="Firefox">
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </desc-list-item>
    </desc-list>`
})
class TestComponent {
    size: 'small' | 'large' = 'large';
    gutter = 32;
    layout: 'horizontal' | 'vertical' = 'horizontal';
    col = 3;
}
