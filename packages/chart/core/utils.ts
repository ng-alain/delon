import type { G2Spec, TooltipComponent } from '@antv/g2';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

/** mini tooltip 的 spec 片段：外观由 theme 承担，位置/偏移/指示线由 `interaction.tooltip` 承担 */
export function genMiniTooltipOptions(
  type: 'mini' | 'default',
  options?: { crosshairs?: boolean }
): { tooltip: TooltipComponent; interaction: G2Spec['interaction'] } {
  const res: Record<string, NzSafeAny> = {
    tooltip: { title: false },
    interaction: {}
  };
  const tooltipInteraction: Record<string, NzSafeAny> = {};
  if (options?.crosshairs != null) {
    tooltipInteraction['crosshairs'] = options.crosshairs;
  }
  if (type === 'mini') {
    res['tooltip'] = {
      title: false,
      items: [{ channel: 'y', name: '' }]
    };
    tooltipInteraction['position'] = 'top';
    tooltipInteraction['offset'] = [0, 8];
  }
  if (Object.keys(tooltipInteraction).length > 0) {
    res['interaction'] = { tooltip: tooltipInteraction };
  }
  return res as { tooltip: TooltipComponent; interaction: G2Spec['interaction'] };
}
