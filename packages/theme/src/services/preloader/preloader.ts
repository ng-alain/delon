import { NzSafeAny } from 'ng-zorro-antd/core/types';

export function preloaderFinished(): void {
  const body = document.querySelector('body')!;
  const preloader = document.querySelector('.preloader')!;

  body.style.overflow = 'hidden';

  function remove(): void {
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
    }, 100);
  };
}
