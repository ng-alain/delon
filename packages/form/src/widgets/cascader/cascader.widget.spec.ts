import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { CascaderWidget } from './cascader.widget';

describe('form: widget: cascader', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'cascader';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('#setValue', fakeAsync(() => {
    const data = [
      {
        value: 110000,
        label: '北京',
        parent: 0,
      },
      {
        value: 120000,
        label: '上海',
        parent: 0,
      },
    ];
    page
      .newSchema({
        properties: {
          a: {
            type: 'number',
            ui: { widget, triggerAction: ['hover'] },
            enum: data,
            default: [120000],
          },
        },
      })
      .dc(1);
    expect(page.getEl('.ant-cascader-picker-label').textContent!.trim()).toBe('上海');
    page.setValue('/a', 110000).dc(1);
    expect(page.getEl('.ant-cascader-picker-label').textContent!.trim()).toBe('北京');
  }));

  describe('[data source]', () => {
    it('with enum', fakeAsync(() => {
      const data = [
        {
          value: 110000,
          label: '北京',
          parent: 0,
        },
      ];
      page.newSchema({
        properties: {
          a: {
            type: 'number',
            ui: { widget, triggerAction: ['hover'] },
            enum: data,
            default: [110000],
          },
        },
      });
      const comp = page.getWidget<CascaderWidget>('sf-cascader');
      expect(comp.data.length).toBe(1);
      expect(comp.data[0].checked).toBe(true);
      page.asyncEnd();
    }));
    it('with async', fakeAsync(() => {
      page
        .newSchema({
          properties: {
            a: {
              type: 'number',
              title: 'RealTime',
              ui: {
                widget: 'cascader',
                asyncData: jasmine.createSpy().and.returnValue(Promise.resolve()),
              },
              default: [110000],
            },
          },
        })
        .typeEvent('click', 'nz-cascader')
        .time()
        .checkCalled('a', 'asyncData')
        .asyncEnd();
    }));
  });

  describe('[events]', () => {
    it('with defind', fakeAsync(() => {
      page.newSchema({
        properties: {
          a: {
            type: 'number',
            enum: [],
            ui: {
              widget,
              visibleChange: jasmine.createSpy(),
              change: jasmine.createSpy(),
              selectionChange: jasmine.createSpy(),
              select: jasmine.createSpy(),
              clear: jasmine.createSpy(),
            },
          },
        },
      });
      const comp = page.getWidget<CascaderWidget>('sf-cascader');
      const ui = page.getProperty('a').ui;
      comp._visibleChange(null!);
      expect(ui.visibleChange).toHaveBeenCalled();
      comp._change(null!);
      expect(ui.change).toHaveBeenCalled();
      comp._selectionChange(null!);
      expect(ui.selectionChange).toHaveBeenCalled();
      comp._clear();
      expect(ui.clear).toHaveBeenCalled();
      page.asyncEnd();
    }));
  });
});
