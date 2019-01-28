import { fakeAsync, ComponentFixture } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { createTestContext } from '@delon/testing';
import { of } from 'rxjs';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { MentionWidget } from './mention.widget';

const DATA = ['asdf', 'cipchk', '中文', 'にほんご'];

describe('form: widget: mention', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'mention';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  function getWidget() {
    return page.getWidget<MentionWidget>('sf-' + widget);
  }

  it('should be working', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: { type: 'string', enum: DATA, ui: { widget, select: jasmine.createSpy() } },
      },
    };
    page
      .newSchema(s)
      .typeChar('@')
      .checkCount('.ant-mention-dropdown-item', DATA.length, true)
      .typeEvent('click', '.ant-mention-dropdown-item');

    expect((s.properties.a.ui as any).select).toHaveBeenCalled();
  }));

  it('should be validator mention count via minimum or maximum', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: { type: 'string', minimum: 1, maximum: 2, ui: { widget, asyncData: () => of(DATA) } },
      },
    };
    page
      .newSchema(s)
      .typeChar('@')
      .checkError(`最少提及 1 次`);

    spyOn(getWidget().mentionChild, 'getMentions').and.returnValue(['', '', '', '']);
    page.typeChar('@').checkError(`最多提及 2 次`);
  }));

  it('should be remove search', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          enum: DATA,
          minimum: 1,
          maximum: 2,
          ui: { widget, loadData: () => of(['1']) },
        },
      },
    };
    page
      .newSchema(s)
      .typeChar('@')
      .checkElText('.ant-mention-dropdown-item', '1', true);
  }));
});
