import { Renderer2 } from '@angular/core';

function removeClass(el: HTMLElement, classMap: { [klass: string]: unknown }, renderer: Renderer2): void {
  Object.keys(classMap).forEach(key => renderer.removeClass(el, key));
}

function addClass(el: HTMLElement, classMap: { [klass: string]: unknown }, renderer: Renderer2): void {
  for (const i in classMap) {
    if (classMap[i]) {
      renderer.addClass(el, i);
    }
  }
}

/**
 * Update host component style `class`
 *
 * 更新宿主组件样式 `class`
 *
 * ```ts
 * updateHostClass(
 *  this.el.nativeElement,
 *  this.renderer,
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  })
 * ```
 */
export function updateHostClass(
  el: HTMLElement,
  renderer: Renderer2,
  classMap: { [klass: string]: unknown },
  preClean: boolean = false
): void {
  if (preClean === true) {
    renderer.removeAttribute(el, 'class');
  } else {
    removeClass(el, classMap, renderer);
  }
  classMap = { ...classMap };
  addClass(el, classMap, renderer);
}
