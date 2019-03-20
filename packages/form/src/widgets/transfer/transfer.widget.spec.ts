import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { of } from 'rxjs';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: transfer', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  let context: TestFormComponent;
  let dl: DebugElement;
  const widget = 'transfer';
  const CLS = {
    left: '[data-direction="left"]',
    right: '[data-direction="right"]',
    leftBtn: '.ant-transfer-operation .ant-btn:first-child',
    rightBtn: '.ant-transfer-operation .ant-btn:last-child',
  };

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should working', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '角色',
          enum: [
            { title: 'DNS管理', value: 10 },
            { title: 'ECS管理', value: 11 },
            { title: 'OSS管理', value: 12 },
            { title: 'RDS管理', value: 13 },
          ],
          ui: {
            widget,
            titles: ['未拥有', '已拥有'],
            selectChange: jasmine.createSpy(),
          },
          default: 10,
        },
      },
    };
    page
      .newSchema(s)
      .typeEvent('click', CLS.left + ' .ant-transfer-list-content-item label')
      .typeEvent('click', CLS.rightBtn);

    expect((page.getValue('a') as number[]).length).toBe(2);

    page
      .typeEvent('click', CLS.right + ' .ant-transfer-list-content-item label')
      .typeEvent('click', CLS.leftBtn);

    expect((page.getValue('a') as number[]).length).toBe(1);

    expect((s.properties.a.ui as any).selectChange).toHaveBeenCalled();

    page.asyncEnd();
  }));

  describe('[ui]', () => {
    it('#change', fakeAsync(() => {
      const s: SFSchema = {
        properties: {
          a: {
            type: 'number',
            title: '角色',
            enum: [
              { title: 'DNS管理', value: 10 },
              { title: 'ECS管理', value: 11 },
              { title: 'OSS管理', value: 12 },
              { title: 'RDS管理', value: 13 },
            ],
            ui: {
              widget,
              titles: ['未拥有', '已拥有'],
              change: jasmine.createSpy(),
            },
            default: 10,
          },
        },
      };
      page
        .newSchema(s)
        .typeEvent('click', CLS.left + ' .ant-transfer-list-content-item label')
        .typeEvent('click', CLS.rightBtn);

      expect((s.properties.a.ui as any).change).toHaveBeenCalled();

      page.asyncEnd();
    }));

    it('#canMove', fakeAsync(() => {
      const s: SFSchema = {
        properties: {
          a: {
            type: 'number',
            title: '角色',
            enum: [
              { title: 'DNS管理', value: 10 },
              { title: 'ECS管理', value: 11 },
              { title: 'OSS管理', value: 12 },
              { title: 'RDS管理', value: 13 },
            ],
            ui: {
              widget,
              titles: ['未拥有', '已拥有'],
              canMove: jasmine.createSpy().and.returnValue(of([])),
            },
            default: 10,
          },
        },
      };
      page
        .newSchema(s)
        .typeEvent('click', CLS.left + ' .ant-transfer-list-content-item label')
        .typeEvent('click', CLS.rightBtn);

      expect((s.properties.a.ui as any).canMove).toHaveBeenCalled();

      page.asyncEnd();
    }));

    describe('#searchChange', () => {
      it('shoule be null', fakeAsync(() => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'number',
              title: '角色',
              enum: [
                { title: 'DNS管理', value: 10 },
                { title: 'ECS管理', value: 11 },
                { title: 'OSS管理', value: 12 },
                { title: 'RDS管理', value: 13 },
              ],
              ui: {
                widget,
                showSearch: true,
              },
              default: 10,
            },
          },
        };
        page.newSchema(s)
            .checkCount(CLS.left + ' .ant-transfer-list-content-item', 3)
            .typeChar('O', CLS.left + ' .ant-input')
            .checkCount(CLS.left + ' .ant-transfer-list-content-item', 1)
            .asyncEnd();
      }));
      it('shoule be defined', fakeAsync(() => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'number',
              title: '角色',
              enum: [
                { title: 'DNS管理', value: 10 },
                { title: 'ECS管理', value: 11 },
                { title: 'OSS管理', value: 12 },
                { title: 'RDS管理', value: 13 },
              ],
              ui: {
                widget,
                titles: ['未拥有', '已拥有'],
                showSearch: true,
                searchChange: jasmine.createSpy(),
              },
              default: 10,
            },
          },
        };
        page.newSchema(s)
            .checkCount(CLS.left + ' .ant-transfer-list-content-item', 3)
            .typeChar('O', CLS.left + ' .ant-input')
            .checkCount(CLS.left + ' .ant-transfer-list-content-item', 1)
            .asyncEnd();
        expect((s.properties.a.ui as any).searchChange).toHaveBeenCalled();
      }));
    });
  });
});
