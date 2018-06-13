export function isEmpty(element: HTMLElement): boolean {
  const nodes = element.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes.item(i);
    if (
      node.nodeType === 1 &&
      (node as HTMLElement).outerHTML.toString().trim().length !== 0
    ) {
      return false;
    } else if (
      node.nodeType === 3 &&
      node.textContent.toString().trim().length !== 0
    ) {
      return false;
    }
  }
  return true;
}

export function toBoolean(
  value: any,
  allowUndefined = false,
): boolean {
  return allowUndefined && typeof value === 'undefined'
    ? undefined
    : value != null && `${value}` !== 'false';
}

export function toNumber(value: any): number;
export function toNumber<D>(value: any, fallback: D): number | D;
export function toNumber(value: any, fallbackValue = 0) {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value))
    ? Number(value)
    : fallbackValue;
}
