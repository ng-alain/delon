import type { Types } from '@antv/g2';

export function genMiniTooltipOptions(type: 'mini' | 'default', options?: Types.TooltipCfg): Types.TooltipCfg {
  const res: Types.TooltipCfg = {
    showTitle: false,
    showMarkers: true,
    enterable: true,
    domStyles: {
      'g2-tooltip': { padding: '0px' },
      'g2-tooltip-title': { display: 'none' },
      'g2-tooltip-list-item': { margin: '4px' }
    },
    ...options
  };
  if (type === 'mini') {
    res.position = 'top';
    res.domStyles!['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
    res.itemTpl = `<li>{value}</li>`;
    res.offset = 8;
  }

  return res;
}
