import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  ViewEncapsulation,
} from '@angular/core';
import { AlainConfigService, AlainPdfConfig, BooleanInput, InputBoolean, InputNumber, LazyService, NumberInput } from '@delon/util';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { PDF_DEFULAT_CONFIG } from './pdf.config';
import { PdfChangeEvent, PdfChangeEventType, PdfExternalLinkTarget, PdfTextLayerMode, PdfZoomScale } from './pdf.types';

const win: any = window;
const CSS_UNITS: number = 96.0 / 72.0;
const BORDER_WIDTH: number = 9;

@Component({
  selector: 'pdf',
  exportAs: 'pdf',
  template: `<div class="pdfViewer"></div>`,
  host: {
    '[class.pdf-container]': `true`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PdfComponent implements OnChanges, AfterViewInit, OnDestroy {
  static ngAcceptInputType_pi: NumberInput;
  static ngAcceptInputType_delay: NumberInput;
  static ngAcceptInputType_showAllPages: BooleanInput;
  static ngAcceptInputType_stickToPage: BooleanInput;
  static ngAcceptInputType_originalSize: BooleanInput;
  static ngAcceptInputType_fitToPage: BooleanInput;
  static ngAcceptInputType_disableTextLayer: BooleanInput;
  static ngAcceptInputType_removePageBorders: BooleanInput;

  private unsubscribe$ = new Subject<void>();
  private lib: string = '';
  private _pdf: any;
  private cog: AlainPdfConfig;
  private loadingTask: any;
  private inited = false;
  private _src: string;
  private lastSrc: string;
  private _pi = 1;
  private _total = 0;
  private _showAllPages = true;
  private _rotation = 0;
  private _zoom = 1;
  private _disableTextLayer = false;

  private multiPageViewer: any;
  private multiPageLinkService: any;
  private multiPageFindController: any;
  private singlePageViewer: any;
  private singlePageLinkService: any;
  private singlePageFindController: any;

  @Input() set src(data: string) {
    this._src = data;
    this.load();
  }
  @Input()
  @InputNumber()
  set pi(val: number) {
    this._pi = this.getValidPi(val);
    if (this._pdf) {
      this.pageViewer.scrollPageIntoView({ pageNumber: this._pi });
    }
  }
  @Input() @InputBoolean() set showAllPages(val: boolean) {
    this._showAllPages = val;
    this.resetDoc();
  }
  @Input() @InputBoolean() set disableTextLayer(val: boolean) {
    this._disableTextLayer = val;
    if (this._pdf) {
      this.pageViewer.textLayerMode = this._textLayerMode;
      this.resetDoc();
    }
  }
  @Input() @InputBoolean() removePageBorders = true;
  @Input() @InputBoolean() stickToPage = false;
  @Input() @InputBoolean() originalSize = true;
  @Input() @InputNumber() set zoom(val: number) {
    if (val <= 0) return;
    this._zoom = val;
  }
  @Input() zoomScale: PdfZoomScale = 'page-width';
  @Input() @InputBoolean() fitToPage = false;
  @Input() textLayerMode: PdfTextLayerMode = PdfTextLayerMode.ENABLE;
  @Input() externalLinkTarget: PdfExternalLinkTarget = PdfExternalLinkTarget.BLANK;
  @Input() @InputNumber() set rotation(val: number) {
    if (val % 90 !== 0) {
      console.warn(`Invalid rotation angle, shoule be divisible by 90.`);
      return;
    }
    this._rotation = val;
  }
  @Input() @InputBoolean() autoresize = true;
  @Input() @InputNumber() delay: number;
  // tslint:disable-next-line:no-output-native
  @Output() readonly change = new EventEmitter<PdfChangeEvent>();

  get pdf(): any {
    return this._pdf;
  }

  get findController(): any {
    return this._showAllPages ? this.multiPageFindController : this.singlePageFindController;
  }

  get pageViewer(): any {
    return this._showAllPages ? this.multiPageViewer : this.singlePageViewer;
  }

  get linkService(): any {
    return this._showAllPages ? this.multiPageLinkService : this.singlePageLinkService;
  }

  private get _textLayerMode(): PdfTextLayerMode {
    return this._disableTextLayer ? PdfTextLayerMode.DISABLE : this.textLayerMode;
  }

  constructor(
    private ngZone: NgZone,
    configSrv: AlainConfigService,
    private lazySrv: LazyService,
    private platform: Platform,
    private el: ElementRef<HTMLElement>,
  ) {
    this.cog = configSrv.merge('pdf', PDF_DEFULAT_CONFIG)!;
    Object.assign(this, this.cog);

    const lib = this.cog.lib!;
    this.lib = lib.endsWith('/') ? lib : `${lib}/`;
  }

  private getValidPi(pi: number): number {
    if (pi < 1) return 1;
    const pdf = this._pdf;
    return pdf && pi > pdf.numPages ? pdf.numPages : pi;
  }

  private emit(type: PdfChangeEventType, opt?: PdfChangeEvent): void {
    this.ngZone.run(() =>
      this.change.emit({
        type,
        pdf: this._pdf,
        pi: this._pi,
        total: this._total,
        ...opt,
      }),
    );
  }

  private initDelay(): void {
    this.inited = true;
    win.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.lib}build/pdf.worker.min.js`;

    setTimeout(() => this.load(), this.delay);
  }

  private load(): void {
    const { _src } = this;
    if (!this.inited || !_src) {
      return;
    }

    if (this.lastSrc === _src) {
      this.render();
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.destroy();
      const loadingTask = (this.loadingTask = win.pdfjsLib.getDocument(_src));
      loadingTask.onProgress = (progress: { loaded: number; total: number }) => this.emit('load-progress', { progress });
      loadingTask.promise.then(
        (pdf: any) => {
          this._pdf = pdf;
          this.lastSrc = _src;
          this._total = pdf.numPages;

          this.emit('loaded');

          if (!this.pageViewer) {
            this.setupPageViewer();
          }

          this.resetDoc();
          this.render();
        },
        (error: any) => this.emit('error', { error }),
      );
    });
  }

  private resetDoc(): void {
    const pdf = this._pdf;
    if (!pdf) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.cleanDoc();

      this.findController.setDocument(pdf);
      this.pageViewer.setDocument(pdf);
      this.linkService.setDocument(pdf, null);
    });
  }

  private cleanDoc(): void {
    this.multiPageViewer.setDocument(null);
    this.singlePageViewer.setDocument(null);

    this.multiPageLinkService.setDocument(null, null);
    this.singlePageLinkService.setDocument(null, null);

    this.multiPageFindController.setDocument(null);
    this.singlePageFindController.setDocument(null);
  }

  private render(): void {
    const currentViewer = this.pageViewer;
    if (!currentViewer) {
      return;
    }

    if (this._rotation !== 0 || currentViewer.pagesRotation !== this._rotation) {
      setTimeout(() => {
        currentViewer.pagesRotation = this._rotation;
      });
    }

    if (this.stickToPage) {
      setTimeout(() => {
        currentViewer.currentPageNumber = this._pi;
      });
    }

    this.updateSize();
  }

  private updateSize(): void {
    const currentViewer = this.pageViewer;
    this._pdf.getPage(currentViewer.currentPageNumber).then((page: any) => {
      const { _rotation, _zoom } = this;
      const rotation = _rotation || page.rotate;
      const viewportWidth =
        page.getViewport({
          scale: _zoom,
          rotation,
        }).width * CSS_UNITS;
      let scale = _zoom;
      let stickToPage = true;

      // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
      if (!this.originalSize || (this.fitToPage && viewportWidth > this.el.nativeElement.clientWidth)) {
        const viewPort = page.getViewport({ scale: 1, rotation });
        scale = this.getScale(viewPort.width, viewPort.height);
        stickToPage = !this.stickToPage;
      }

      currentViewer._setScale(scale, stickToPage);
    });
  }

  private getScale(viewportWidth: number, viewportHeight: number): number {
    const borderSize = !this.removePageBorders ? 2 * BORDER_WIDTH : 0;
    const el = this.el.nativeElement;
    const containerWidth = el.clientWidth - borderSize;
    const containerHeight = el.clientHeight - borderSize;

    if (containerHeight === 0 || viewportHeight === 0 || containerWidth === 0 || viewportWidth === 0) {
      return 1;
    }

    let ratio = 1;
    switch (this.zoomScale) {
      case 'page-fit':
        ratio = Math.min(containerHeight / viewportHeight, containerWidth / viewportWidth);
        break;
      case 'page-height':
        ratio = containerHeight / viewportHeight;
        break;
      case 'page-width':
      default:
        ratio = containerWidth / viewportWidth;
        break;
    }

    return (this._zoom * ratio) / CSS_UNITS;
  }

  private destroy(): void {
    this.ngZone.runOutsideAngular(() => {
      const { loadingTask } = this;
      if (loadingTask && !loadingTask.destroyed) {
        loadingTask.destroy();
      }
      if (this._pdf) {
        this._pdf.destroy();
        this._pdf = null;
        this.cleanDoc();
      }
    });
  }

  private setupPageViewer(): void {
    win.pdfjsLib.disableTextLayer = this._disableTextLayer;
    win.pdfjsLib.externalLinkTarget = this.externalLinkTarget;

    this.setupMultiPageViewer();
    this.setupSinglePageViewer();
  }

  private createEventBus(): any {
    const eventBus = new win.pdfjsViewer.EventBus();
    eventBus.on(`pagesinit`, (ev: any) => {
      this.emit('pages-init', { ev });
    });
    eventBus.on(`pagerendered`, (ev: any) => {
      this.emit('page-rendered', { ev });
    });
    eventBus.on(`pagechanging`, (ev: any) => {
      const nowPi = ev.pageNumber;
      if (nowPi !== this._pi) {
        this._pi = nowPi;
        this.emit('pi', { ev });
      }
    });
    eventBus.on(`textlayerrendered`, (ev: any) => {
      this.emit('text-layer-rendered', { ev });
    });
    return eventBus;
  }

  private setupMultiPageViewer(): void {
    const VIEWER = win.pdfjsViewer;

    const eventBus = this.createEventBus();
    const linkService = (this.multiPageLinkService = new VIEWER.PDFLinkService({
      eventBus,
    }));
    const findController = (this.multiPageFindController = new VIEWER.PDFFindController({
      eventBus,
      linkService,
    }));

    const viewer = (this.multiPageViewer = new VIEWER.PDFViewer({
      eventBus,
      container: this.el.nativeElement,
      removePageBorders: this.removePageBorders,
      textLayerMode: this._textLayerMode,
      linkService,
      findController,
    }));
    linkService.setViewer(viewer);
  }

  private setupSinglePageViewer(): void {
    const VIEWER = win.pdfjsViewer;

    const eventBus = this.createEventBus();
    const linkService = (this.singlePageLinkService = new VIEWER.PDFLinkService({
      eventBus,
    }));
    const findController = (this.singlePageFindController = new VIEWER.PDFFindController({
      eventBus,
      linkService,
    }));

    const pageViewer = (this.singlePageViewer = new VIEWER.PDFSinglePageViewer({
      eventBus,
      container: this.el.nativeElement,
      removePageBorders: this.removePageBorders,
      textLayerMode: this._textLayerMode,
      linkService,
      findController,
    }));
    linkService.setViewer(pageViewer);
    pageViewer._currentPageNumber = this._pi;
  }

  ngAfterViewInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if (win.pdfjsLib) {
      this.initDelay();
      return;
    }
    const { lib } = this;
    this.lazySrv
      .load(`${lib}build/pdf.min.js`)
      .then(() => this.lazySrv.load([`${lib}web/pdf_viewer.js`, `${lib}web/pdf_viewer.css`]))
      .then(() => this.initDelay());

    this.ngZone.runOutsideAngular(() => this.initResize());
  }

  private initResize(): void {
    fromEvent(win, 'resize')
      .pipe(
        debounceTime(100),
        filter(() => this.autoresize),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => this.updateSize());
  }

  ngOnChanges(changes: { [p in keyof PdfComponent]?: SimpleChange }): void {
    if (this.inited && !changes.src) {
      this.render();
    }
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();

    this.destroy();
  }
}
