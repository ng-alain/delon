import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {
  [key: string]: NzSafeAny;

  token: string;

  expired?: number;
}
