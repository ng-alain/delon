export function preloaderFinished() {
    const body = document.querySelector('body');
    const preloader = document.querySelector('.preloader');

    body.style.overflow = 'hidden';

    function remove() {
        // preloader value null when running --hmr
        if (!preloader) return;
        preloader.addEventListener('transitionend', function () {
            preloader.className = 'preloader-hidden';
        });

        preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    }

    (<any>window).appBootstrap = () => {
        setTimeout(() => {
            remove();
            body.style.overflow = '';
        }, 100);
    };
}
