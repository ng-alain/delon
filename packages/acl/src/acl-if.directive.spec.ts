import { Component, DebugElement, inject } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ACLIfDirective } from './acl-if.directive';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

const CLS = '.acl-ph';
const CLS_NOT = '.unauthorized-acl-ph';
describe('acl-if: directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = dl.componentInstance;
  });

  it('should show element when full', fakeAsync(() => {
    context.srv.setFull(true);
    context.role = 'user';
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
  }));

  it('should remove when not full', fakeAsync(() => {
    context.srv.setFull(false);
    context.role = 'user';
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
  }));

  it('should switch acl', fakeAsync(() => {
    context.srv.setFull(false);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
    context.srv.setFull(true);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
    context.srv.setFull(false);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
  }));

  it('should be support complex acl value', fakeAsync(() => {
    context.srv.setFull(false);
    context.srv.setRole(['user']);
    context.role = { role: ['user', 'manage'], mode: 'allOf' };
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
    context.srv.setRole(['user', 'manage']);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
  }));

  it('should be show else when unauthorized', fakeAsync(() => {
    context.srv.setFull(false);
    context.srv.setRole(['user']);
    context.role = 'admin';
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
    expect(dl.queryAll(By.css(CLS_NOT)).length).toBe(1);
    context.role = 'user';
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
    expect(dl.queryAll(By.css(CLS_NOT)).length).toBe(0);
  }));

  it('should be specify then & else tempatel', fakeAsync(() => {
    context.srv.setFull(false);
    context.srv.setRole(['user']);
    context.role = 'admin';
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.thenBlock')).length).toBe(0);
    expect(dl.queryAll(By.css('.elseBlock')).length).toBe(1);
    context.role = 'user';
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.thenBlock')).length).toBe(1);
    expect(dl.queryAll(By.css('.elseBlock')).length).toBe(0);
  }));

  describe('#except', () => {
    beforeEach(() => {
      context.srv.setFull(false);
      context.role = 'admin';
    });
    describe('with true', () => {
      it('should be show when user does not a user role', fakeAsync(() => {
        context.except = true;
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        context.srv.setRole(['user']);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(1);
      }));
      it('should be hide when user has a admin role', fakeAsync(() => {
        context.except = true;
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        context.srv.setRole(['admin']);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(0);
      }));
    });
    describe('with false', () => {
      it('should be hide when user does not a user role', fakeAsync(() => {
        context.except = false;
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        context.srv.setRole(['user']);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(0);
      }));
      it('should be show when user has a admin role', fakeAsync(() => {
        context.except = false;
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        context.srv.setRole(['admin']);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(1);
      }));
    });
  });
});

@Component({
  template: `
    <button class="acl-ph" *aclIf="role; else unauthorized"></button>
    <ng-template #unauthorized>
      <span class="unauthorized-acl-ph"></span>
    </ng-template>
    <h3>ng-template</h3>
    <div *aclIf="role; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock><span class="thenBlock"></span></ng-template>
    <ng-template #elseBlock><span class="elseBlock"></span></ng-template>
    <h3>except</h3>
    <ng-template [aclIf]="role" [except]="except">
      <span class="exceptBlock"></span>
    </ng-template>
    <div *aclIf="role; then null; else nullThenElseBlock"></div>
    <ng-template #nullThenElseBlock><span class="nullThenElseBlock"></span></ng-template>
  `,
  imports: [ACLIfDirective],
  standalone: true
})
class TestComponent {
  readonly srv = inject(ACLService);
  role: ACLCanType = 'admin';
  except = false;
}
