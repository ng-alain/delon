import { TestBed, ComponentFixtureAutoDetect, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { AlainACLModule } from '../index';
import { ACLService } from './../services/acl.service';
import { By } from '@angular/platform-browser';

const CLS = 'acl__hide';
describe('acl: directive', () => {
    let fixture: ComponentFixture<TestComponent>;
    let context: TestComponent;
    let dl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [AlainACLModule.forRoot()],
            providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = dl.componentInstance;
        fixture.detectChanges();
    });

    it('should show when full', () => {
        context.srv.setFull(true);
        context.role = 'user';
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.' + CLS)).length).toBe(0);
    });

    it('should hide when not full', () => {
        context.srv.setFull(false);
        context.role = 'user';
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.' + CLS)).length).toBe(1);
    });

    it('should show when ability', () => {
        context.srv.setAbility([1, 2, 3]);
        context.ability = 2;
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.' + CLS)).length).toBe(0);
    });

    it('should hide when not ability', () => {
        context.srv.setAbility([1, 2, 3]);
        context.ability = 4;
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.' + CLS)).length).toBe(1);
    });
});


@Component({
    template: `<button [acl]="role" [acl-ability]="ability"></button>`
})
class TestComponent {
    role = 'admin';
    ability = 1;
    constructor(public srv: ACLService) { }
}
