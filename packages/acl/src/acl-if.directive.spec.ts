import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DelonACLModule } from './acl.module';
import { ACLService } from './acl.service';
import { ACLCanType } from './acl.type';

const CLS = '.acl-ph';
const CLS_NOT = '.unauthorized-acl-ph';
describe('acl-if: directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [DelonACLModule],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = dl.componentInstance;
  });

  it('should show element when full', () => {
    context.srv.setFull(true);
    context.role = 'user';
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
  });

  it('should remove when not full', () => {
    context.srv.setFull(false);
    context.role = 'user';
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
  });

  it('should switch acl', () => {
    context.srv.setFull(false);
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
    context.srv.setFull(true);
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
    context.srv.setFull(false);
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
  });

  it('should be support complex acl value', () => {
    context.srv.setFull(false);
    context.srv.setRole(['user']);
    context.role = { role: ['user', 'manage'], mode: 'allOf' };
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
    context.srv.setRole(['user', 'manage']);
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
  });

  it('should be show else when unauthorized', () => {
    context.srv.setFull(false);
    context.srv.setRole(['user']);
    context.role = 'admin';
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(0);
    expect(dl.queryAll(By.css(CLS_NOT)).length).toBe(1);
    context.role = 'user';
    fixture.detectChanges();
    expect(dl.queryAll(By.css(CLS)).length).toBe(1);
    expect(dl.queryAll(By.css(CLS_NOT)).length).toBe(0);
  });

  it('should be specify then & else tempatel', () => {
    context.srv.setFull(false);
    context.srv.setRole(['user']);
    context.role = 'admin';
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.thenBlock')).length).toBe(0);
    expect(dl.queryAll(By.css('.elseBlock')).length).toBe(1);
    context.role = 'user';
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.thenBlock')).length).toBe(1);
    expect(dl.queryAll(By.css('.elseBlock')).length).toBe(0);
  });

  describe('#except', () => {
    beforeEach(() => {
      context.srv.setFull(false);
      context.role = 'admin';
    });
    describe('with true', () => {
      it('should be show when user does not a user role', () => {
        context.except = true;
        fixture.detectChanges();
        context.srv.setRole(['user']);
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(1);
      });
      it('should be hide when user has a admin role', () => {
        context.except = true;
        fixture.detectChanges();
        context.srv.setRole(['admin']);
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(0);
      });
    });
    describe('with false', () => {
      it('should be hide when user does not a user role', () => {
        context.except = false;
        fixture.detectChanges();
        context.srv.setRole(['user']);
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(0);
      });
      it('should be show when user has a admin role', () => {
        context.except = false;
        fixture.detectChanges();
        context.srv.setRole(['admin']);
        expect(dl.queryAll(By.css('.exceptBlock')).length).toBe(1);
      });
    });
  });
});

@Component({
  template: `
  <button class="acl-ph" *aclIf="role else unauthorized"></button>
  <ng-template #unauthorized>
    <span class="unauthorized-acl-ph"></span>
  </ng-template>
  <h3>ng-template</h3>
  <div *aclIf="role; then thenBlock else elseBlock"></div>
  <ng-template #thenBlock><span class="thenBlock"></span></ng-template>
  <ng-template #elseBlock><span class="elseBlock"></span></ng-template>
  <h3>except</h3>
  <ng-template [aclIf]="role" [except]="except">
    <span class="exceptBlock"></span>
  </ng-template>
  `,
})
class TestComponent {
  role: ACLCanType = 'admin';
  except = false;
  constructor(public srv: ACLService) {}
}
