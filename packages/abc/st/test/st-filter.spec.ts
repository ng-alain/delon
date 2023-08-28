import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PageObject, TestComponent, genModule } from './base.spec';
import { STFilterComponent } from '../st-filter.component';
import { STComponent } from '../st.component';
import { STColumnFilter } from '../st.interfaces';
import { _STColumn } from '../st.types';

registerLocaleData(zh);

describe('abc: st-filter', () => {
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

    page.context.columns = [
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
    ];
  });

  it('muse provide the fn function', fakeAsync(() => {
    spyOn(console, 'warn');
    page.context.columns[0].filter!.fn = null;
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
  }));
  describe('when is single', () => {
    beforeEach(() => {
      context.columns[0].filter!.multiple = false;
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
      context.columns[0].filter!.multiple = true;
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
    });
  });
  describe('when type is keyword', () => {
    beforeEach(() => {
      context.columns[0].filter!.type = 'keyword';
      context.columns[0].filter!.default = true;
      context.columns[0].filter!.menus![0].value = 'a';
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
  it('when type is number', fakeAsync(() => {
    const f = page.context.columns[0].filter!;
    f.type = 'number';
    f.number = {};
    page.cd().click(`.ant-table-filter-trigger`).cd().expectElCount('.st__filter-number', 1).asyncEnd();
  }));
  it('when type is date', fakeAsync(() => {
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
  }));
  it('when type is custom', fakeAsync(() => {
    const f = page.context.columns[0].filter!;
    f.type = 'custom';
    f.custom = page.context.tpl;
    page.cd().click(`.ant-table-filter-trigger`).cd().expectElCount('.st__filter-custom', 1).asyncEnd();
  }));
  it('#showOPArea', fakeAsync(() => {
    const f = page.context.columns[0].filter!;
    f.type = 'custom';
    f.custom = page.context.tpl;
    f.showOPArea = false;
    page
      .cd()
      .click(`.ant-table-filter-trigger`)
      .cd()
      .expectElCount('.st__filter-custom', 1)
      .expectElCount('.close_in_tpl', 1)
      .clickEl('.close_in_tpl')
      .cd(1000)
      .expectElCount('.close_in_tpl', 0)
      .asyncEnd();
  }));
});
