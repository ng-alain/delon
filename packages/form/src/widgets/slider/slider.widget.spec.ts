import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { NzSliderComponent } from 'ng-zorro-antd';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { SliderWidget } from './slider.widget';

describe('form: widget: slider', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'slider';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  function getWidget() {
    return page.getWidget<SliderWidget>('sf-' + widget);
  }

  function getComp() {
    return page.getWidget<NzSliderComponent>('nz-slider');
  }

  it('should be working', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          ui: {
            widget,
            included: true,
          },
          default: 10,
        },
      },
    };
    page.newSchema(s);
    const comp = getWidget();
    spyOn(comp, '_formatter');
    page.time();
    getWidget()._afterChange(1);
    expect(comp._formatter).toHaveBeenCalled();
  }));

  it('should be using maximem value when default gt; maximum', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          minimum: 2,
          maximum: 5,
          multipleOf: 2,
          ui: {
            widget,
          },
          default: 10,
        },
      },
    };
    page.newSchema(s).time();
    expect(getComp().value).toBe(5);
  }));

  it('#formatter', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          ui: {
            widget,
            formatter: jasmine.createSpy(),
          },
          default: 10,
        },
      },
    };
    page.newSchema(s);
    const comp = getWidget();
    spyOn(comp, '_formatter');
    page.time();
    expect(comp._formatter).toHaveBeenCalled();
    expect((s.properties.a.ui as any).formatter).toHaveBeenCalled();
  }));

  it('#afterChange', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          ui: {
            widget,
            afterChange: jasmine.createSpy(),
          },
          default: 10,
        },
      },
    };
    page.newSchema(s).time();
    getWidget()._afterChange(1);
    expect((s.properties.a.ui as any).afterChange).toHaveBeenCalled();
  }));
});
