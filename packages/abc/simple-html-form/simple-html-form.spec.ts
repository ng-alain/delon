import { Component, DebugElement, ViewChildren } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AdSHFModule } from './module';
import { FormsModule } from '@angular/forms';
import { SHFItemComponent } from './item.component';

describe('abc: standard-form-row', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  function genModule(options: { template?: string }) {
    TestBed.configureTestingModule({
      imports: [AdSHFModule.forRoot(), FormsModule],
      declarations: [TestComponent],
    });
    if (options.template) {
      TestBed.overrideTemplate(TestComponent, options.template);
    }
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    page = new PageObject();
    fixture.detectChanges();
  }

  afterEach(() => context.comps.forEach(c => c.ngOnDestroy()));

  describe('[default]', () => {
    it('muse inherit shf-wrap col & labelWidth value of all item ', () => {
      genModule({
        template: `<div shf-wrap="1" labelWidth="120"><shf-item label="App Key"></shf-item></div>`,
      });
      page.check('.ant-col-24').checkLabelWidth('.ad-shf__label', '120px');
    });
    it('should be default col & labelWidth', () => {
      genModule({
        template: `<shf-item label="App Key"></shf-item>`,
      });
      page.check('.ant-col-12').checkLabelWidth('.ad-shf__label', '100px');
    });
    it('should be custom label', () => {
      genModule({
        template: `<div shf-wrap>
        <shf-item [label]="labelValue">
          <ng-template #labelValue><p id="labelTpl"></p></ng-template>
        </shf-item>
        </div>`,
      });
      page.check('#labelTpl');
    });
  });

  describe('[with horizontal]', () => {
    it('should be one cols form', () => {
      genModule({
        template: `<div shf-wrap><shf-item label="App Key" col="1"></shf-item></div>`,
      });
      page.check('.ant-col-24');
    });

    it('should be two cols form', () => {
      genModule({
        template: `<div shf-wrap><shf-item label="App Key" col="2"></shf-item></div>`,
      });
      page.check('.ant-col-12');
    });

    it('should be three cols form', () => {
      genModule({
        template: `<div shf-wrap><shf-item label="App Key" col="3"></shf-item></div>`,
      });
      page.check('.ant-col-8');
    });

    it('should be empty label', () => {
      genModule({
        template: `<div shf-wrap><shf-item col="3"></shf-item></div>`,
      });
      page.check('.ad-shf__nolabel');
    });

    it('should be specify label width', () => {
      genModule({
        template: `<div shf-wrap><shf-item col="3" labelWidth="110"></shf-item></div>`,
      });
      page.checkLabelWidth('.ad-shf__nolabel', '110px');
    });
  });

  describe('[width vertical]', () => {
    it('should be not ant-col-*', () => {
      genModule({
        template: `
      <div shf-wrap nzLayout="vertical">
        <shf-item col="3"></shf-item>
      </div>
      `,
      });
      page.check('.ad-shf__vertical').check('.ant-col-8', 0);
    });
  });

  describe('[width inline]', () => {
    it('should be not ant-col-*', () => {
      genModule({
        template: `
      <div shf-wrap nzLayout="inline">
        <shf-item col="3"></shf-item>
      </div>
      `,
      });
      page.check('.ad-shf__inline').check('.ant-col-8', 0);
    });
  });

  describe('[verify]', () => {
    it(
      'should be has-error class when is required',
      fakeAsync(() => {
        genModule({});
        page.tick().check('.has-error');
        context.i = { ak: 'test1' };
        page.tick().check('has-error', 0);
        context.i = { ak: 'test2' };
        page.tick().check('has-error', 0);
      }),
    );
  });

  class PageObject {
    getEl(cls: string): DebugElement {
      return dl.query(By.css(cls));
    }
    getEls(cls: string) {
      return dl.queryAll(By.css(cls));
    }
    tick(): this {
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      return this;
    }
    check(cls: string, count: number = 1): this {
      expect(this.getEls(cls).length).toBe(count);
      return this;
    }
    checkLabelWidth(cls: string, width: string): this {
      const el = this.getEl(cls).nativeElement as HTMLElement;
      expect(el.style.width).toBe(width);
      return this;
    }
  }
});

@Component({
  template: `
  <form nz-form [nzLayout]="layout" #f="ngForm" shf-wrap>
    <shf-item label="App Key">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" id="ak" required>
    </shf-item>
    <shf-item>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </shf-item>
  </form>
  `,
})
class TestComponent {
  i: any = {};
  layout: any = null;
  @ViewChildren(SHFItemComponent) comps: SHFItemComponent[];
}
