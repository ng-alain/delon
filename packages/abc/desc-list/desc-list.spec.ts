import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { AdDescListModule } from './desc-list.module';
import { By } from '@angular/platform-browser';

describe('abc: desc-list', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  function genModule(template?: string) {
    TestBed.configureTestingModule({
      imports: [AdDescListModule.forRoot()],
      declarations: [TestComponent],
    });
    if (template) {
      TestBed.overrideTemplate(TestComponent, template);
    }
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    page = new PageObject();
  }

  it('should be create an instance', () => {
    genModule();
    fixture.detectChanges();
    expect(context).not.toBeNull();
    expect(dl.queryAll(By.css('#defaultDL .ad-desc-list__term')).length).toBe(
      3,
    );
  });

  it('should be changed property', () => {
    genModule();
    fixture.detectChanges();
    page
      .checkCount('.large', 1)
      .checkCount('.small', 0)
      .checkCount('.horizontal', 1)
      .checkCount('.vertical', 0);
    context.size = 'small';
    context.layout = 'vertical';
    context.col = 5;
    fixture.detectChanges();
    page
      .checkCount('.large', 0)
      .checkCount('.small', 1)
      .checkCount('.horizontal', 0)
      .checkCount('.vertical', 1);
  });

  it('should be custome title template', () => {
    genModule(`
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
    </desc-list>`);
    fixture.detectChanges();
    expect(dl.queryAll(By.css('#custom-title-template #titleTpl')).length).toBe(
      1,
    );
  });

  describe('[empty content]', () => {
    describe('with noDefault: false', () => {
      it(`should be show '-'`, () => {
        genModule(`
          <desc-list>
            <desc-list-item term="Default" [noDefault]="false">{{defaultValue}}</desc-list-item>
          </desc-list>
        `);
        context.defaultValue = '';
        fixture.detectChanges();
        page.checkCount('.ad-desc-list__default', 1);
      });
      it(`should be show content`, () => {
        genModule(`
          <desc-list>
            <desc-list-item term="Default" [noDefault]="false">{{defaultValue}}</desc-list-item>
          </desc-list>
        `);
        context.defaultValue = 'test';
        fixture.detectChanges();
        page.checkCount('.ad-desc-list__default', 0);
      });
    });
    describe('with noDefault: true', () => {
      it(`should be show empty area`, () => {
        genModule(`
          <desc-list>
            <desc-list-item term="Default" [noDefault]="true">{{defaultValue}}</desc-list-item>
          </desc-list>
        `);
        context.defaultValue = '';
        fixture.detectChanges();
        page.checkCount('.ad-desc-list__default', 0);
      });
      it(`should be show content`, () => {
        genModule(`
          <desc-list>
            <desc-list-item term="Default" [noDefault]="true">{{defaultValue}}</desc-list-item>
          </desc-list>
        `);
        context.defaultValue = 'test';
        fixture.detectChanges();
        page.checkCount('.ad-desc-list__default', 0);
      });
    });
  });

  class PageObject {
    checkCount(cls: string, len: number): this {
      expect(dl.queryAll(By.css(cls)).length).toBe(len);
      return this;
    }
  }
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
  `,
})
class TestComponent {
  size: 'small' | 'large' = 'large';
  gutter = 32;
  layout: 'horizontal' | 'vertical' = 'horizontal';
  col = 3;
  noDefault = false;
  defaultValue = '';
}
