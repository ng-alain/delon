export const REP_MAX_COL = 6;
export const REP_CONFIG = {
  1: { xs: 24 },
  2: { xs: 24, sm: 12 },
  3: { xs: 24, sm: 12, md: 8 },
  4: { xs: 24, sm: 12, md: 8, lg: 6 },
  5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
  6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
};

export function GenStanRepCls(count: number, max = REP_MAX_COL) {
  const responsive = REP_CONFIG[count > max ? max : count];
  const antColClass = 'ant-col';
  const clsMap = [`${antColClass}-xs-${responsive.xs}`];
  if (responsive.sm) clsMap.push(`${antColClass}-sm-${responsive.sm}`);
  if (responsive.md) clsMap.push(`${antColClass}-md-${responsive.md}`);
  if (responsive.lg) clsMap.push(`${antColClass}-lg-${responsive.lg}`);
  if (responsive.xl) clsMap.push(`${antColClass}-xl-${responsive.xl}`);
  if (responsive.xxl) clsMap.push(`${antColClass}-xxl-${responsive.xxl}`);
  return clsMap;
}
