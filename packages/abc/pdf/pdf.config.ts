import { AlainPdfConfig } from '@delon/util/config';

export const PDF_DEFULAT_CONFIG: AlainPdfConfig = {
  lib: `https://cdn.jsdelivr.net/npm/pdfjs-dist@2.x/`,
  showAll: true,
  renderText: true,
  showBorders: false,
  originalSize: true,
  fitToPage: false,
  autoReSize: true
};
