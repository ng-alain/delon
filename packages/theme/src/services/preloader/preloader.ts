import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

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

    const CLS = 'preloader-hidden';
    preloader.addEventListener('transitionend', () => {
      preloader.className = CLS;
    });
    preloader.className += ` ${CLS}-add ${CLS}-add-active`;
    const body = doc.querySelector<HTMLBodyElement>('body')!;
    body.style.overflow = '';
  };
}
