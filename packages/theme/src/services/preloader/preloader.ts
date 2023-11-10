import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export function stepPreloader(): () => void {
  const doc: Document = inject(DOCUMENT);
  const body = doc.querySelector('body')!;
  body.style.overflow = 'hidden';
  let done = false;

  return () => {
    if (done) return;

    done = true;
    const preloader = doc.querySelector<HTMLElement>('.preloader');
    if (preloader == null) return;

    preloader.addEventListener('transitionend', () => {
      preloader.className = 'preloader-hidden';
    });
    preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    const body = doc.querySelector('body')!;
    body.style.overflow = '';
  };
}

export function preloaderFinished(): void {
  const body = document.querySelector('body')!;
  body.style.overflow = 'hidden';

  function remove(): void {
    const preloader = document.querySelector('.preloader')!;
    // preloader value null when running --hmr
    if (!preloader) return;
    preloader.addEventListener('transitionend', () => {
      preloader.className = 'preloader-hidden';
    });

    preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
  }

  (window as NzSafeAny).appBootstrap = () => {
    setTimeout(() => {
      remove();
      body.style.overflow = '';
    }, 25);
  };
}
