import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { vi } from 'vitest';

// 多个 spec 按 zh 断言日期格式，集中注册一次可省去各自的重复注册
registerLocaleData(zh);

const initialBodyChildren = new Set(Array.from(document.body.children));

afterEach(() => {
  // 残留的假定时器会把已销毁组件的回调带到后续 spec
  if (vi.isFakeTimers()) {
    vi.clearAllTimers();
    vi.useRealTimers();
  }
  // 浏览器模式下 document 跨文件复用，需清掉未销毁的 overlay 与游离节点
  for (const child of Array.from(document.body.children)) {
    const element = child as HTMLElement;
    if (element.classList.contains('cdk-overlay-container')) {
      element.innerHTML = '';
    } else if (!initialBodyChildren.has(child) && !/^root\d+$/.test(element.id)) {
      child.remove();
    }
  }
});
