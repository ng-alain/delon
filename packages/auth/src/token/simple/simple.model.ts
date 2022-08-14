import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  token: string | null | undefined;

  expired?: number;
}
