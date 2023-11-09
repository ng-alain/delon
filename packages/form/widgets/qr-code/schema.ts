import type { SFUISchemaItem } from '@delon/form';
import type { ERROR_LEVEL_MAP } from 'ng-zorro-antd/qr-code/qrcode';

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
  /** Whether has border style */
  bordered?: boolean;
  /** QR code status */
  status?: 'active' | 'expired' | 'loading';
  /** Error Code Level */
  level?: keyof typeof ERROR_LEVEL_MAP;
  /** Callback */
  refresh?: (qr: string) => void;
}
