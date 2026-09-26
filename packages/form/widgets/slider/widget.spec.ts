import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { SFSchema } from '@delon/form';
import { createTestContext } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSliderComponent } from 'ng-zorro-antd/slider';

import { withSliderWidget } from './index';
import { SliderWidget } from './widget';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base';

describe('form: widget: slider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'slider';

  configureSFTestSuite({ widgets: [withSliderWidget()] });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  function getWidget(): SliderWidget {
    return page.getWidget<SliderWidget>(`sf-${widget}`);
  }

  function getComp(): NzSliderComponent {
    return page.getWidget<NzSliderComponent>('nz-slider');
  }

  it('should be working', async () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          ui: {
            widget,
            included: true
          },
          default: 10
        }
      }
    };
    page.newSchema(s);
    const comp = getWidget();
    vi.spyOn(comp, '_formatter').mockReturnValue(undefined as NzSafeAny);
    await page.stabilize();
    page.time();
    getWidget()._afterChange(1);
    page.dc();
    expect(comp._formatter).toHaveBeenCalled();
  });

  it('should be using maximem value when default gt; maximum', async () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          minimum: 2,
          maximum: 5,
          multipleOf: 2,
          ui: {
            widget
          },
          default: 10
        }
      }
    };
    page.newSchema(s).time();
    await page.stabilize();
    expect(getComp().value).toBe(5);
  });

  it('#formatter', async () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          ui: {
            widget,
            formatter: vi.fn()
          },
          default: 10
        }
      }
    };
    page.newSchema(s);
    const comp = getWidget();
    vi.spyOn(comp, '_formatter').mockReturnValue(undefined as NzSafeAny);
    await page.stabilize();
    page.time();
    page.dc();
    expect(comp._formatter).toHaveBeenCalled();
    expect((s.properties!.a.ui as NzSafeAny).formatter).toHaveBeenCalled();
  });

  it('#afterChange', async () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          ui: {
            widget,
            afterChange: vi.fn()
          },
          default: 10
        }
      }
    };
    page.newSchema(s).time();
    getWidget()._afterChange(1);
    expect((s.properties!.a.ui as NzSafeAny).afterChange).toHaveBeenCalled();
  });

  it('#step should be from multipleOf by default', () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          multipleOf: 2,
          ui: {
            widget
          },
          default: 10
        }
      }
    };
    page.newSchema(s);
    expect(getWidget().step).toBe(2);
  });

  it('#step should be null when ui.step is null', () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '数量',
          multipleOf: 2,
          ui: {
            widget,
            step: null,
            marks: {
              0: '0',
              100: '100'
            }
          },
          default: 10
        }
      }
    };
    page.newSchema(s);
    expect(getWidget().step).toBeNull();
  });
});
