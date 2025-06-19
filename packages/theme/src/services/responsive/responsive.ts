import { inject, Injectable } from '@angular/core';

import { AlainConfigService, AlainThemeResponsiveConfig } from '@delon/util/config';

export const REP_MAX = 6;
export const SPAN_MAX = 24;

export type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;

@Injectable({ providedIn: 'root' })
export class ResponsiveService {
  private readonly cogSrv = inject(AlainConfigService);
  private cog: AlainThemeResponsiveConfig;
  constructor() {
    this.cog = this.cogSrv.merge('themeResponsive', {
      rules: {
        1: { xs: 24 },
        2: { xs: 24, sm: 12 },
        3: { xs: 24, sm: 12, md: 8 },
        4: { xs: 24, sm: 12, md: 8, lg: 6 },
        5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
        6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 }
      }
    })!;
    if (
      Object.keys(this.cog.rules)
        .map(i => +i)
        .some((i: number) => i < 1 || i > REP_MAX)
    ) {
      throw new Error(`[theme] the responseive rule index value range must be 1-${REP_MAX}`);
    }
  }

  genCls(count: number, defaultCol: number = 1): string[] {
    const rule = { ...this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)] };
    const antColClass = 'ant-col';

    const itemMaxSpan = SPAN_MAX / defaultCol;
    const paddingSpan = (value: number | undefined): number | undefined => {
      if (value == null || defaultCol <= 1 || count >= defaultCol) return value;
      return Math.max(value, count * itemMaxSpan);
    };
    const clsMap = [`${antColClass}-xs-${paddingSpan(rule.xs)}`];
    if (rule.sm) clsMap.push(`${antColClass}-sm-${paddingSpan(rule.sm)}`);
    if (rule.md) clsMap.push(`${antColClass}-md-${paddingSpan(rule.md)}`);
    if (rule.lg) clsMap.push(`${antColClass}-lg-${paddingSpan(rule.lg)}`);
    if (rule.xl) clsMap.push(`${antColClass}-xl-${paddingSpan(rule.xl)}`);
    if (rule.xxl) clsMap.push(`${antColClass}-xxl-${paddingSpan(rule.xxl)}`);
    return clsMap;
  }
}
