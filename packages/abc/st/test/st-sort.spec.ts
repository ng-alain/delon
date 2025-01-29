import { ComponentFixture, fakeAsync } from '@angular/core/testing';

import { provideAlainConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { STComponent } from '../st.component';
import { STMultiSort } from '../st.interfaces';
import { PageObject, TestComponent, genModule } from './base.spec';

describe('abc: st-sort', () => {
  let page: PageObject<TestComponent>;
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let comp: STComponent;

  describe('', () => {
    beforeEach(() => {
      page = genModule(TestComponent, {})!;
      fixture = page.fixture;
      context = page.context;
      comp = page.comp;

      context.columns = [
        {
          title: '',
          index: 'i',
          sort: { default: 'ascend', compare: () => 1 }
        },
        {
          title: '',
          index: 'i',
          sort: { default: 'descend', compare: () => 1 }
        }
      ];
    });
    describe('single-sort', () => {
      beforeEach(() => (context.multiSort = false));
      it('muse provide the compare function', fakeAsync(() => {
        spyOn(console, 'warn');
        page.updateColumn([{ title: '', index: 'i', sort: { compare: 'a' } as NzSafeAny }]);
        comp.sort(comp._columns[0], 'descend');
        page.cd();
        expect(console.warn).toHaveBeenCalled();
        page.asyncEnd();
      }));
      it('should be auto generate compose when sort is true', fakeAsync(() => {
        context.data = [{ i: 1 }, { i: 2 }];
        page.updateColumn([{ title: '', index: 'i', sort: true }]);
        comp.sort(comp._columns[0], 'descend');
        page.cd();
        expect(context.comp.list[0].i).toBe(2);
        page.asyncEnd();
      }));
      it('should be sorting', fakeAsync(() => {
        page.cd();
        comp.sort(comp._columns[0], 'descend');
        const sortList = comp._columns
          .filter(item => item._sort && item._sort.enabled && item._sort.default)
          .map(item => item._sort!);
        expect(sortList.length).toBe(1);
        expect(sortList[0].default).toBe('descend');
        page.asyncEnd();
      }));
    });
    describe('multi-sort', () => {
      beforeEach(() => (context.multiSort = true));
      it('should be sorting', fakeAsync(() => {
        page.cd();
        comp.sort(comp._columns[0], 'descend');
        comp.sort(comp._columns[1], 'ascend');
        const sortList = comp._columns
          .filter(item => item._sort && item._sort.enabled && item._sort.default)
          .map(item => item._sort!);
        expect(sortList.length).toBe(2);
        expect(sortList[0].default).toBe('descend');
        expect(sortList[1].default).toBe('ascend');
        page.asyncEnd();
      }));
      it('with true', () => {
        context.multiSort = true;
        fixture.detectChanges();
        expect(typeof comp.multiSort).toBe('object');
      });
      it('with false', () => {
        context.multiSort = false;
        fixture.detectChanges();
        expect(comp.multiSort).toBeUndefined();
      });
      it('with object', () => {
        context.multiSort = { key: 'aa' };
        fixture.detectChanges();
        const ms: STMultiSort = comp.multiSort;
        expect(typeof ms).toBe('object');
        expect(ms.key).toBe('aa');
      });
    });
  });
  describe('Global config', () => {
    it('should default is mulit sorting', () => {
      page = genModule(TestComponent, {
        minColumn: true,
        providers: [provideAlainConfig({ st: { multiSort: { global: true } } })],
        createComp: true
      })!;
      expect(page.comp.multiSort).not.toBeUndefined();
    });
    it('should default non-mulit sorting', () => {
      page = genModule(TestComponent, {
        minColumn: true,
        providers: [provideAlainConfig({ st: { multiSort: { global: false } } })],
        createComp: true
      })!;
      expect(page.comp.multiSort).toBeUndefined();
    });
  });
});
