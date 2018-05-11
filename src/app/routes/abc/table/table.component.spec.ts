/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoTableComponent } from './table.component';

describe('DemoTableComponent', () => {
  let component: DemoTableComponent;
  let fixture: ComponentFixture<DemoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
