import type { SFUISchemaItem } from '@delon/form';

export interface SFQrCodeWidgetSchema extends SFUISchemaItem {
  /** QR code Padding */
  padding?: number;
  /** QR code Color */
  color?: string;
  /** QR code background color */
  bgColor?: string;
  /** QR code Size */
  qrSize?: number;
  /** Icon address in QR code */
  icon?: string;
  /** The size of the icon in the QR code */
  iconSize?: number;
  /** Whether has border style, default: `true` */
  bordered?: boolean;
  /** Rendering type, default: `canvas` */
  type?: 'canvas' | 'svg';
  /** QR code status */
  status?: 'active' | 'expired' | 'loading' | 'scanned';
  /** Error Code Level */
  level?: 'L' | 'M' | 'Q' | 'H';
  /** If enabled, automatically raises the error correction level, default: `true` */
  boostLevel?: boolean;
  /** Callback */
  refresh?: (qr: string) => void;
}
