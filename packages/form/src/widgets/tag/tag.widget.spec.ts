import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { NzSliderComponent, NzTagComponent } from 'ng-zorro-antd';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { TagWidget } from './tag.widget';

describe('form: widget: tag', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'tag';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  function getComp() {
    return page.getWidget<NzTagComponent>('nz-tag');
  }

  it('should be working', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '兴趣',
          enum: [
            { value: 1, label: '电影' },
            { value: 2, label: '书' },
            { value: 3, label: '旅行' },
          ],
          ui: {
            widget: 'tag',
            checkedChange: jasmine.createSpy(),
          },
          default: [1, 2],
        },
      },
    };
    page.newSchema(s).typeEvent('click', '.ant-tag');
    const res = page.getValue('a') as number[];
    expect(res.length).toBe(1);
    expect(res[0]).toBe(2);
    expect((s.properties.a.ui as any).checkedChange).toHaveBeenCalled();
  }));

  describe('#mode', () => {
    it('with default', fakeAsync(() => {
      page
        .newSchema({
          properties: {
            a: {
              type: 'number',
              title: '兴趣',
              enum: [
                { value: 1, label: '电影' },
                { value: 2, label: '书' },
                { value: 3, label: '旅行' },
              ],
              ui: {
                widget: 'tag',
                mode: 'default',
              },
              default: [1, 2],
            },
          },
        })
        .typeEvent('click', '.ant-tag');
      expect(getComp().nzMode).toBe('default');
    }));

    describe('with closeable', () => {
      it('should be closed', fakeAsync(() => {
        page
          .newSchema({
            properties: {
              a: {
                type: 'number',
                title: '兴趣',
                enum: [
                  { value: 1, label: '电影' },
                  { value: 2, label: '书' },
                  { value: 3, label: '旅行' },
                ],
                ui: {
                  widget: 'tag',
                  mode: 'closeable',
                },
                default: [1, 2],
              },
            },
          })
          .typeEvent('click', '.anticon')
          .checkCount('.ant-tag', 2);
      }));
      it('should be call events', fakeAsync(() => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'number',
              title: '兴趣',
              enum: [
                { value: 1, label: '电影' },
                { value: 2, label: '书' },
                { value: 3, label: '旅行' },
              ],
              ui: {
                widget: 'tag',
                mode: 'closeable',
                afterClose: jasmine.createSpy(),
                onClose: jasmine.createSpy(),
              },
              default: [1, 2],
            },
          },
        };
        page.newSchema(s).typeEvent('click', '.anticon');

        const ui = s.properties.a.ui as any;
        expect(ui.afterClose).toHaveBeenCalled();
        expect(ui.onClose).toHaveBeenCalled();
      }));
    });
  });
});
