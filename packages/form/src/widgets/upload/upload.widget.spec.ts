import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzUploadComponent } from 'ng-zorro-antd';

import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

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

  it('should working', () => {
    const s: SFSchema = {
      properties: { a: { type: 'string', ui: { widget }, default: true } },
    };
    page.newSchema(s);
    const upload = dl.query(By.directive(NzUploadComponent));
    expect(upload).not.toBeUndefined();
  });

  it('should be support fileList', () => {
    const s: SFSchema = {
      properties: { a: { type: 'string', ui: { widget, fileList: [ {} ] } } },
    };
    page.newSchema(s);
    const upload = dl.query(By.directive(NzUploadComponent)).injector.get(NzUploadComponent);
    expect(upload.nzFileList.length).toBe(1);
  });

  it('shoule be setting size', () => {
    const s: SFSchema = {
      properties: {
        a: { type: 'string', ui: { widget, fileSize: 100 } },
      },
    };
    page.newSchema(s);
    const upload = dl.query(By.directive(NzUploadComponent)).injector.get(NzUploadComponent);
    expect(upload.nzSize).toBe(100);
  });
});
