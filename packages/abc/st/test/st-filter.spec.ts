import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModel } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { STFilterComponent } from '../st-filter.component';
import { STComponent } from '../st.component';
import { STColumn, STColumnFilter } from '../st.interfaces';
import { _STColumn } from '../st.types';
import { PageObject, TestComponent, TestFormComponent, genModule } from './base';

describe('abc: st-filter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let page: PageObject<TestComponent>;
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;
  let comp: STComponent;
  let filter: STColumnFilter;
  let firstCol: _STColumn;

  beforeEach(() => {
    page = genModule(TestComponent, {})!;
    fixture = page.fixture;
    context = page.context;
    dl = page.dl;
    comp = page.comp;

    page.context.columns.set([
      {
        title: 'a',
        index: 'i',
        filter: {
          multiple: true,
          menus: [
            { text: 'f1', value: 'fv1' },
            { text: 'f2', value: 'fv2' }
          ],
          confirmText: 'ok',
          clearText: 'reset',
          icon: 'aa',
          fn: () => true
        }
      }
    ]);
  });

  it('muse provide the fn function', async () => {
    vi.spyOn(console, 'warn').mockReturnValue(undefined);
    page.context.columns()![0].filter!.fn = null;
    page.cd();
    const firstCol = page.comp._columns[0];
    const filter = firstCol.filter as STColumnFilter;
    const filterComp = page.dl.query(By.directive(STFilterComponent)).context as STFilterComponent;
    filterComp.radioChange(filter.menus![0]);
    filterComp.radioChange(filter.menus![1]);
    filterComp.confirm();
    page.cd();
    expect(console.warn).toHaveBeenCalled();
    page.asyncEnd();
  });
  describe('when is single', () => {
    beforeEach(() => {
      context.columns()![0].filter!.multiple = false;
      fixture.detectChanges();
      firstCol = comp._columns[0];
      filter = firstCol.filter as STColumnFilter;
      const filterComp = dl.query(By.directive(STFilterComponent)).context as STFilterComponent;
      filterComp.radioChange(filter.menus![0]);
      filterComp.radioChange(filter.menus![1]);
      filterComp.confirm();
    });
    it('should be filter', () => {
      const res = filter.menus!.filter(w => w.checked);
      expect(res.length).toBe(1);
    });
    it('should be clean', () => {
      comp.clearFilter();
      const res = filter.menus!.filter(w => w.checked);
      expect(res.length).toBe(0);
    });
  });
  describe('when is multiple', () => {
    beforeEach(() => {
      context.columns()![0].filter!.multiple = true;
      fixture.detectChanges();
      firstCol = comp._columns[0];
      filter = firstCol.filter as STColumnFilter;
      filter.menus![0].checked = true;
      filter.menus![1].checked = true;
      const filterComp = dl.query(By.directive(STFilterComponent)).context as STFilterComponent;
      filterComp.confirm();
    });
    it('should be filter', () => {
      const res = filter.menus!.filter(w => w.checked);
      expect(res.length).toBe(2);
    });
    it('should be clean', () => {
      const filterComp = dl.query(By.directive(STFilterComponent)).context as STFilterComponent;
      filterComp.reset();
      const res = filter.menus!.filter(w => w.checked);
      expect(res.length).toBe(0);
      expect(vi.mocked(page.changeSpy).mock.lastCall![0].filter).toBe(undefined);
    });
  });
  describe('when type is keyword', () => {
    beforeEach(() => {
      context.columns()![0].filter!.type = 'keyword';
      context.columns()![0].filter!.default = true;
      context.columns()![0].filter!.menus![0].value = 'a';
      fixture.detectChanges();
      firstCol = comp._columns[0];
      filter = firstCol.filter!;
    });
    it('should be filter', () => {
      const filterComp = dl.query(By.directive(STFilterComponent)).context as STFilterComponent;
      filterComp.confirm();
      expect(page._changeData?.type).toBe('filter');
    });
    it('should be clean', () => {
      const m = filter.menus![0];
      expect(m.value).toBe('a');
      context.comp.clearFilter();
      expect(m.value).toBe(undefined);
    });
  });
  it('when type is number', async () => {
    const f = page.context.columns()![0].filter!;
    f.type = 'number';
    f.number = {};
    page.cd().click(`.ant-table-filter-trigger`).cd().expectElCount('.st__filter-number', 1).asyncEnd();
  });
  it('when type is date', async () => {
    page.updateColumn([
      {
        type: 'date',
        index: 'date',
        filter: {
          type: 'date',
          date: {}
        }
      }
    ]);
    page.cd().click(`.ant-table-filter-trigger`).cd().expectElCount('.st__filter-date', 1).asyncEnd();
  });
  it('when type is custom', async () => {
    const f = page.context.columns()![0].filter!;
    f.type = 'custom';
    f.custom = page.context.tpl;
    page.cd().click(`.ant-table-filter-trigger`).cd().expectElCount('.st__filter-custom', 1).asyncEnd();
  });
  it('#showOPArea', async () => {
    const f = page.context.columns()![0].filter!;
    f.type = 'custom';
    f.custom = page.context.tpl;
    f.showOPArea = false;
    page
      .cd()
      .click(`.ant-table-filter-trigger`)
      .cd()
      .expectElCount('.st__filter-custom', 1)
      .expectElCount('.close_in_tpl', 1)
      .clickEl('.close_in_tpl');
    await vi.advanceTimersByTimeAsync(1000);
    fixture.detectChanges();
    page.expectElCount('.close_in_tpl', 0).asyncEnd();
  });

  describe('NG01354', () => {
    function setup(columns: STColumn[]): ComponentFixture<TestFormComponent> {
      const fixture = TestBed.createComponent(TestFormComponent);
      fixture.componentInstance.columns.set(columns);
      fixture.detectChanges();
      vi.advanceTimersByTime(1000);
      fixture.detectChanges();
      return fixture;
    }

    function openFilter(fixture: ComponentFixture<TestFormComponent>): void {
      (fixture.nativeElement.querySelector('.ant-table-filter-trigger') as HTMLElement).click();
      vi.advanceTimersByTime(1000);
      fixture.detectChanges();
    }

    beforeEach(() => {
      // 屏蔽 nz-checkbox 内部 ng-zorro #9984 的预期警告
      vi.spyOn(console, 'warn').mockImplementation(() => {});
    });

    // 关键字分支的子树完全由 st-filter 渲染（nz-input 是纯指令），因此可以断言零警告
    it('should not warn NG01354 from the keyword filter inside a parent form', () => {
      const fixture = setup([{ title: 'name', index: 'name', filter: { type: 'keyword', menus: [] } }]);
      openFilter(fixture);

      expect(fixture.debugElement.queryAll(By.css('.st__filter-keyword input')).length).toBe(1);
      const messages = vi
        .mocked(console.warn)
        .mock.calls.map(args => args.join(' '))
        .filter(msg => msg.includes('NG01354'));
      expect(messages).toEqual([]);
    });

    [true, false].forEach(multiple => {
      it(`should declare the filter menu ngModel (multiple=${multiple}) as standalone`, () => {
        const fixture = setup([
          { title: 'name', index: 'name', filter: { multiple, menus: [{ text: 'f1', value: 'fv1' }] } }
        ]);
        openFilter(fixture);
        const label = fixture.debugElement.query(
          By.css(
            multiple ? '.ant-table-filter-dropdown label[nz-checkbox]' : '.ant-table-filter-dropdown label[nz-radio]'
          )
        );
        expect(label).not.toBeNull();
        expect(label.injector.get(NgModel).options?.standalone).toBe(true);
      });
    });
  });
});
