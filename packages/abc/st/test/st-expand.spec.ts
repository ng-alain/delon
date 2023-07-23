import { fakeAsync } from '@angular/core/testing';

import { deepCopy } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { PageObject, genModule, TestExpandComponent, USERS } from './base.spec';
import { _STColumn } from '../st.types';

describe('abc: st-expand', () => {
  let page: PageObject<TestExpandComponent>;
  let context: TestExpandComponent;

  beforeEach(() => {
    page = genModule(TestExpandComponent, { minColumn: true })!;
    context = page.context;
  });

  it('should be switch expand via expand icon', fakeAsync(() => {
    page.cd();
    const el = page.getCell(1, 1).querySelector('.ant-table-row-expand-icon') as HTMLElement;
    page.expectData(1, 'expand', undefined);
    el.click();
    page.expectData(1, 'expand', true).asyncEnd();
  }));
  describe('should be expanded when click row if expandRowByClick', () => {
    it('with true', fakeAsync(() => {
      context.expandRowByClick = true;
      page.cd();
      const el = page.getCell(1, 2);
      page.expectData(1, 'expand', undefined);
      el.click();
      page.expectData(1, 'expand', true).expectChangeType('expand').asyncEnd();
    }));
    it('with false', fakeAsync(() => {
      context.expandRowByClick = false;
      page.cd();
      const el = page.getCell(1, 2);
      page.expectData(1, 'expand', undefined);
      el.click();
      page.expectData(1, 'expand', undefined).asyncEnd();
    }));
    it('should be click icon when with true', fakeAsync(() => {
      context.expandRowByClick = true;
      page
        .cd()
        .expectData(1, 'expand', undefined)
        .clickCell('.ant-table-row-expand-icon')
        .expectData(1, 'expand', true)
        .expectChangeType('expand')
        .asyncEnd();
    }));
  });
  describe('expandRowByClick', () => {
    it('should be close other expaned', fakeAsync(() => {
      context.expandAccordion = true;
      context.expandRowByClick = true;
      page.cd().clickCell(1, 2).clickCell(2, 2).expectData(1, 'expand', false).expectData(2, 'expand', true).asyncEnd();
    }));
    it('should be keeping expaned', fakeAsync(() => {
      context.expandAccordion = false;
      context.expandRowByClick = true;
      page.cd().clickCell(1, 2).clickCell(2, 2).expectData(1, 'expand', true).expectData(2, 'expand', true).asyncEnd();
    }));
    it('should be stop propagation in button event', fakeAsync(() => {
      context.expandRowByClick = true;
      context.columns = [
        {
          title: '',
          buttons: [
            {
              text: 'btn'
            }
          ]
        }
      ];
      page.cd().clickEl('.st__btn-text').expectData(1, 'expand', undefined).asyncEnd();
    }));
  });
  describe('should be set showExpand in row data', () => {
    it(`muse be hide expand icon`, fakeAsync(() => {
      context.expandRowByClick = false;
      context.data = deepCopy(USERS).slice(0, 1) as NzSafeAny[];
      context.data[0].showExpand = false;
      page
        .cd()
        .expectElCount('.ant-table-row-expand-icon', 0)
        .clickCell(1, 2)
        .expectChangeType('expand', false)
        .asyncEnd();
    }));
  });
});
