import { Directionality } from '@angular/cdk/bidi';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';

import { AvatarListItemComponent } from './avatar-list-item.component';
import { AvatarListComponent } from './avatar-list.component';

describe('abc: avatar-list', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  describe('#size', () => {
    it('with large', () => {
      context.size = 'large';
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__large')).length).toBe(5);
      expect(dl.queryAll(By.css('.ant-avatar-lg')).length).toBe(5);
    });

    it('with small', () => {
      context.size = 'small';
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__small')).length).toBe(5);
      expect(dl.queryAll(By.css('.ant-avatar-sm')).length).toBe(5);
    });

    it('with mini, and avatar muse be small size', () => {
      context.size = 'mini';
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__mini')).length).toBe(5);
      expect(dl.queryAll(By.css('.ant-avatar-sm')).length).toBe(5);
    });
  });

  describe('#maxLength', () => {
    it('should working', () => {
      context.maxLength = 1;
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__item')).length).toBe(context.maxLength + 1);
    });
    it('should be show all when maxLength less than length', () => {
      context.maxLength = 10;
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__item')).length).toBe(5);
    });
  });

  it('#rtl', () => {
    expect(dl.query(By.css('.avatar-list-rtl'))).toBeNull();
    const srv = TestBed.inject(Directionality);
    srv.change.emit('rtl');
    fixture.detectChanges();
    expect(dl.query(By.css('.avatar-list-rtl'))).not.toBeNull();
  });
});

@Component({
  template: `
    <avatar-list [size]="size" [maxLength]="maxLength">
      <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
      <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
      <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
      <avatar-list-item tips="Cipchk" text="Cipchk" />
      <avatar-list-item tips="heart-o" />
    </avatar-list>
  `,
  imports: [AvatarListItemComponent, AvatarListComponent]
})
class TestComponent {
  size: 'large' | 'small' | 'mini' | 'default' = 'default';
  maxLength = 0;
}
