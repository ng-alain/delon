import { Injectable } from '@angular/core';
import { AlainThemeConfig } from '../../theme.config';
import { ResponsiveConfig } from './responsive.config';

export const REP_MAX = 6;

export type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;

@Injectable({ providedIn: 'root' })
export class ResponsiveService {
  private cog: ResponsiveConfig;
  constructor(cog: AlainThemeConfig) {
    this.cog = {
      rules: {
        1: { xs: 24 },
        2: { xs: 24, sm: 12 },
        3: { xs: 24, sm: 12, md: 8 },
        4: { xs: 24, sm: 12, md: 8, lg: 6 },
        5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
        6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
      },
      ...cog!.responsive,
    };
    if (
      Object.keys(this.cog.rules)
        .map(i => +i)
        .some((i: number) => i < 1 || i > REP_MAX)
    ) {
      throw new Error(`[theme] the responseive rule index value range must be 1-${REP_MAX}`);
    }
  }

  genCls(count: number): string[] {
    const rule = this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)];
    const antColClass = 'ant-col';
    const clsMap = [`${antColClass}-xs-${rule.xs}`];
    if (rule.sm) clsMap.push(`${antColClass}-sm-${rule.sm}`);
    if (rule.md) clsMap.push(`${antColClass}-md-${rule.md}`);
    if (rule.lg) clsMap.push(`${antColClass}-lg-${rule.lg}`);
    if (rule.xl) clsMap.push(`${antColClass}-xl-${rule.xl}`);
    if (rule.xxl) clsMap.push(`${antColClass}-xxl-${rule.xxl}`);
    return clsMap;
  }
}
