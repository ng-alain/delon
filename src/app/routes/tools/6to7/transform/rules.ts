import { ConvertAction } from '../interface';
import { ZORRORULES } from './rules/zorro';
import { ABCRULES } from './rules/abc';
import { G2RULES } from './rules/g2';
import { EXTRARULES } from './rules/extra';

export const RULES: ConvertAction[] = [
    ...ZORRORULES,
    ...ABCRULES,
    ...G2RULES,
    ...EXTRARULES
];
