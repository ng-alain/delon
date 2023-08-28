// import type { PDFDocumentProxy } from 'pdfjs-dist';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

type PDFDocumentProxy = NzSafeAny;

export type PdfChangeEventType =
  | 'loaded'
  | 'load-progress'
  | 'pages-init'
  | 'page-rendered'
  | 'text-layer-rendered'
  | 'pi'
  | 'error';
export type PdfZoomScale = 'page-height' | 'page-fit' | 'page-width';

export interface PdfChangeEvent {
  type?: PdfChangeEventType;
  pi?: number;
  total?: number;
  pdf?: PDFDocumentProxy | null;
  ev?: NzSafeAny;
  progress?: { loaded: number; total: number };
  error?: NzSafeAny;
}

export enum PdfTextLayerMode {
  DISABLE = 0,
  ENABLE = 1,
  ENABLE_ENHANCE = 2
}

export enum PdfExternalLinkTarget {
  NONE = 0, // Default value.
  SELF = 1,
  BLANK = 2,
  PARENT = 3,
  TOP = 4
}
