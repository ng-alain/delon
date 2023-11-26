import { DOCUMENT, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

export function stepPreloader(): () => void {
  const doc: Document = inject(DOCUMENT);
  const ssr = isPlatformServer(inject(PLATFORM_ID));
  if (ssr) {
    return () => {};
  }
  const body = doc.querySelector<HTMLBodyElement>('body')!;
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
    body.style.overflow = '';
  };
}
