import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';

import type { SFSchema } from '@delon/form';
import { createTestContext } from '@delon/testing';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base.spec';
import { withMentionWidget } from './index';
import { MentionWidget } from './widget';

const DATA = ['asdf', 'cipchk', '中文', 'にほんご'];

describe('form: widget: mention', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'mention';

  configureSFTestSuite({ widgets: [withMentionWidget()] });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  function getWidget(): MentionWidget {
    return page.getWidget<MentionWidget>(`sf-${widget}`);
  }

  it('should be working', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: { type: 'string', enum: DATA, ui: { widget, select: jasmine.createSpy() } }
      }
    };
    page
      .newSchema(s)
      .typeChar('@')
      .checkCount('.ant-mentions-dropdown-menu-item', DATA.length, true)
      .typeEvent('click', '.ant-mentions-dropdown-menu-item');

    expect((s.properties!.a.ui as NzSafeAny).select).toHaveBeenCalled();
  }));

  it('should be validator mention count via minimum or maximum', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: { type: 'string', minimum: 1, maximum: 2, ui: { widget, asyncData: () => of(DATA) } }
      }
    };
    page.newSchema(s).typeChar('@').checkError(`最少提及 1 次`);

    spyOn(getWidget()['mentionChild'], 'getMentions').and.returnValue(['', '', '', '']);
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
          ui: { widget, loadData: () => of(['1']) }
        }
      }
    };
    page.newSchema(s).dc(1).typeChar('@').checkElText('.ant-mentions-dropdown-menu-item', '1', true);
  }));
});
