import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzUploadComponent } from 'ng-zorro-antd';

import { builder, TestFormComponent, SFPage } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: upload', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  let dl: DebugElement;
  const widget = 'upload';

  beforeEach(() => ({ fixture, page, dl } = builder({ detectChanges: false, imports: [ HttpClientTestingModule ] })));

  it('#working', () => {
    const s: SFSchema = {
      properties: { a: { type: 'string', ui: { widget }, default: true } },
    };
    page.newSchema(s);
    const upload = dl.query(By.directive(NzUploadComponent));
    expect(upload).not.toBeUndefined();
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
