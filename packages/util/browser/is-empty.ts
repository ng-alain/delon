/**
 * Used to verify `<ng-content />` is empty, useful for custom components.
 *
 * 用于校验 `<ng-content />` 是否为空，自定义组件时蛮有用。
 */
export function isEmpty(element: HTMLElement): boolean {
  const nodes = element.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes.item(i);
    if (node.nodeType === 1 && (node as HTMLElement).outerHTML.toString().trim().length !== 0) {
      return false;
    } else if (node.nodeType === 3 && node.textContent!.toString().trim().length !== 0) {
      return false;
    }
  }
  return true;
}
