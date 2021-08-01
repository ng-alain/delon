import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadComponent } from 'ng-zorro-antd/upload';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { UploadWidget } from './upload.widget';

describe('form: widget: upload', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  let context: TestFormComponent;
  let dl: DebugElement;
  const widget = 'upload';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  function getComp(): UploadWidget {
    return page.getWidget<UploadWidget>('sf-upload');
  }

  function getUpload(): NzUploadComponent {
    return dl.query(By.directive(NzUploadComponent)).injector.get<NzUploadComponent>(NzUploadComponent);
  }

  it('should be ingore update value when status is not success', () => {
    page.newSchema({
      properties: { a: { type: 'string', ui: { widget } } }
    });
    const comp = getComp();
    spyOn(comp.formProperty, 'setValue');
    comp.change({ type: 'error', fileList: [] } as NzSafeAny);
    expect(comp.formProperty.setValue).not.toHaveBeenCalled();
  });

  it('#setValue', fakeAsync(() => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'string',
            enum: [
              {
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                response: {
                  resource_id: 10
                }
              }
            ],
            ui: { widget, resReName: 'resource_id' }
          }
        }
      })
      .dc(1);
    expect(page.getEl('.ant-upload-list-item').textContent!.trim()).toContain('xxx.png');
    page
      .setValue('/a', [
        {
          uid: -1,
          name: 'zzz.png',
          status: 'done',
          response: {
            resource_id: 10
          }
        }
      ])
      .dc(1);
    expect(page.getEl('.ant-upload-list-item').textContent!.trim()).toContain('zzz.png');
  }));

  describe('property', () => {
    it('#fileList', () => {
      page.newSchema({
        properties: { a: { type: 'string', ui: { widget, fileList: [{}], limit: 1 } } }
      });
      expect(getUpload().nzFileList.length).toBe(1);
    });

    it('#size', () => {
      page.newSchema({
        properties: {
          a: { type: 'string', ui: { widget, fileSize: 100, filter: [] } }
        }
      });
      expect(getUpload().nzSize).toBe(100);
    });

    it('#multiple', () => {
      page.newSchema({
        properties: {
          a: {
            type: 'string',
            ui: { widget, fileSize: 100, multiple: true, change: jasmine.createSpy() }
          }
        }
      });
      const comp = page.getWidget<UploadWidget>('sf-upload');
      comp.change({ type: 'success', fileList: [] } as NzSafeAny);
      page.checkCalled('a', 'change');
    });

    it('#listType, should be btnType is plus when listType is picture-card', () => {
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              ui: { widget, fileSize: 100, listType: 'picture-card' }
            }
          }
        })
        .checkCount('.anticon-plus', 1);
    });

    it('#drag', () => {
      page
        .newSchema({
          properties: { a: { type: 'string', ui: { widget, type: 'drag' } } }
        })
        .checkElText('.ant-upload-text', '单击或拖动文件到该区域上传')
        .checkElText('.ant-upload-hint', '支持单个或批量，严禁上传公司数据或其他安全文件');
    });

    it('#beforeUpload', () => {
      page.newSchema({
        properties: { a: { type: 'string', ui: { widget, type: 'drag', beforeUpload: () => {} } } }
      });

      expect(getUpload().nzBeforeUpload != null).toBe(true);
    });

    it('#customRequest', () => {
      page.newSchema({
        properties: { a: { type: 'string', ui: { widget, type: 'drag', customRequest: () => {} } } }
      });

      expect(getUpload().nzCustomRequest != null).toBe(true);
    });

    describe('preview', () => {
      it('should be trigger preview', () => {
        page.newSchema({
          properties: {
            a: {
              type: 'string',
              ui: { widget, preview: jasmine.createSpy() }
            }
          }
        });
        const comp = page.getWidget<UploadWidget>('sf-upload');
        comp.handlePreview(null!);
        page.checkCalled('a', 'preview');
      });
      it('should be preview image', inject([NzModalService], (msg: NzModalService) => {
        page.newSchema({
          properties: {
            a: {
              type: 'string',
              ui: { widget }
            }
          }
        });
        const comp = page.getWidget<UploadWidget>('sf-upload');
        spyOn(msg, 'create');
        comp.handlePreview({ url: 'a' } as NzSafeAny);
        expect(msg.create).toHaveBeenCalled();
      }));
      it(`should be won't preview image when not found url property`, inject(
        [NzModalService],
        (msg: NzModalService) => {
          page.newSchema({
            properties: {
              a: {
                type: 'string',
                ui: { widget }
              }
            }
          });
          const comp = page.getWidget<UploadWidget>('sf-upload');
          spyOn(msg, 'create');
          comp.handlePreview({} as NzSafeAny);
          expect(msg.create).not.toHaveBeenCalled();
        }
      ));
    });
  });

  it('should be clear value when trigger remove', () => {
    page.newSchema({
      properties: {
        a: {
          type: 'string',
          enum: [
            {
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              response: {
                resource_id: 10
              }
            }
          ],
          ui: { widget, resReName: 'resource_id' }
        }
      }
    });
    page.checkValue('/a', 10).click('.anticon-delete').checkValue('/a', '');
  });
});
