import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AvatarListModule } from './avatar-list.module';

describe('abc: avatar-list', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [AvatarListModule],
      declarations: [TestComponent],
    }).createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#size', () => {
    it('with large', () => {
      context.size = 'large';
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__large')).length).toBe(1);
      expect(dl.queryAll(By.css('.ant-avatar-lg')).length).toBe(5);
    });

    it('with small', () => {
      context.size = 'small';
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__small')).length).toBe(1);
      expect(dl.queryAll(By.css('.ant-avatar-sm')).length).toBe(5);
    });

    it('with mini, and avatar muse be small size', () => {
      context.size = 'mini';
      fixture.detectChanges();
      expect(dl.queryAll(By.css('.avatar-list__mini')).length).toBe(1);
      expect(dl.queryAll(By.css('.ant-avatar-sm')).length).toBe(5);
    });
  });

  it('should be changed text in item', () => {
    const el = dl.query(By.css('#test')).nativeElement as HTMLElement;
    expect(el.textContent.trim()).toBe('asdf');
    context.text = 'newasdf';
    fixture.detectChanges();
    expect(el.textContent.trim()).toBe('newasdf');
  });
});

@Component({
  template: `
    <avatar-list [size]="size">
      <avatar-list-item
        tips="Jake"
        src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
      ></avatar-list-item>
      <avatar-list-item
        tips="Andy"
        src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
      ></avatar-list-item>
      <avatar-list-item
        tips="Niko"
        src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
      ></avatar-list-item>
      <avatar-list-item tips="Cipchk" text="Cipchk"></avatar-list-item>
      <avatar-list-item tips="heart-o" icon="heart-o"></avatar-list-item>
    </avatar-list>
    <avatar-list id="test">
      <avatar-list-item [text]="text"></avatar-list-item>
    </avatar-list>
  `,
})
class TestComponent {
  size: 'large' | 'small' | 'mini' | 'default' = 'default';
  text = 'asdf';
}
