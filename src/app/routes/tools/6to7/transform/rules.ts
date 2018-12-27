import { ConvertAction } from '../interface';
import { ABCRULES } from './rules/abc';
import { EXTRARULES } from './rules/extra';
import { G2RULES } from './rules/g2';
import { ZORRORULES } from './rules/zorro';

export const RULES: ConvertAction[] = [
  ...ZORRORULES,
  ...ABCRULES,
  ...G2RULES,
  ...EXTRARULES,
];
