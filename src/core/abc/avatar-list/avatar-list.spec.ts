import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { AdAvatarListModule } from './avatar-list.module';
import { By } from '@angular/platform-browser';

describe('abc: avatar-list', () => {
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [ AdAvatarListModule.forRoot() ],
            declarations: [ TestComponent ]
        }).createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be init', () => {
        expect(context).not.toBeNull();
    });

    it('#size, should be [large] size', () => {
        context.size = 'large';
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.ant-avatar-lg')).length).toBe(5);
    });
});

@Component({
    template: `
    <avatar-list [size]="size">
        <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"></avatar-list-item>
        <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"></avatar-list-item>
        <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"></avatar-list-item>
        <avatar-list-item tips="Cipchk" text="Cipchk"></avatar-list-item>
        <avatar-list-item tips="heart-o" icon="heart-o"></avatar-list-item>
    </avatar-list>`
})
class TestComponent {
    size: 'large' | 'small' | 'mini' | 'default' = 'mini';
}
