export type G2Time = Date | string | number;

export function toDate(val: G2Time): Date {
  if (val instanceof Date) return val;
  if (typeof val === 'number') return new Date(val);
  return new Date(val);
}
