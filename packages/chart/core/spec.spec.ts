import { toPadding, toTheme, viewSpec } from './spec';
import { toInteraction } from './types/interaction';
import { genMiniTooltipOptions } from './utils';

describe('chart: core spec helpers', () => {
  it('#toTheme should normalize empty theme to classic', () => {
    expect(toTheme('')).toEqual({ type: 'classic' });
    expect(toTheme(undefined)).toEqual({ type: 'classic' });
    expect(toTheme('dark')).toBe('dark');
    const custom = { type: 'light' as const, token: {} };
    expect(toTheme(custom)).toBe(custom);
  });

  it('#toPadding should map array padding to the four sides', () => {
    expect(toPadding(8)).toEqual({ padding: 8 });
    expect(toPadding('auto')).toEqual({ padding: 'auto' });
    expect(toPadding([8, 8, 8, 8])).toEqual({
      paddingTop: 8,
      paddingRight: 8,
      paddingBottom: 8,
      paddingLeft: 8
    });

    expect(toPadding([40, 8, 64, 40])).toEqual({
      paddingTop: 40,
      paddingRight: 8,
      paddingBottom: 64,
      paddingLeft: 40
    });
    expect(toPadding(undefined)).toEqual({});
  });

  it('#toInteraction should keep legacy vocabulary and map to v5', () => {
    expect(toInteraction('element-active')).toEqual({ elementHighlight: true });
    expect(toInteraction('brush')).toEqual({ brushXHighlight: true });
    expect(toInteraction('active-region')).toBeNull();
    expect(toInteraction('drag-move')).toBeNull();
    expect(toInteraction('none')).toBeNull();
    expect(toInteraction(undefined)).toBeNull();
  });

  it('#viewSpec should build a v5 view fragment', () => {
    const spec = viewSpec({
      theme: '',
      padding: [1, 2, 3, 4],
      height: 100,
      animate: false,
      interaction: 'element-active'
    });
    expect(spec.type).toBe('view');
    expect(spec.theme).toEqual({ type: 'classic' });
    // v5 内置主题给 view 的 `margin` 默认 16，`viewSpec()` 必须覆盖为 0
    expect(spec.margin).toBe(0);
    expect(viewSpec({ theme: '' }).margin).toBe(0);
    expect(spec.height).toBe(100);
    expect(spec.animate).toBe(false);
    expect(spec['paddingTop']).toBe(1);
    expect(spec['paddingLeft']).toBe(4);
    expect(spec.interaction).toEqual({ elementHighlight: true });
  });

  it('#genMiniTooltipOptions should build v5 tooltip fragment', () => {
    expect(genMiniTooltipOptions('default').tooltip).toEqual({ title: false });
    const mini = genMiniTooltipOptions('mini');
    expect((mini.tooltip as { title: boolean }).title).toBe(false);
    expect(mini.interaction.tooltip.offset).toEqual([0, 8]);
    expect(genMiniTooltipOptions('default', { crosshairs: true }).interaction.tooltip.crosshairs).toBe(true);
  });
});
