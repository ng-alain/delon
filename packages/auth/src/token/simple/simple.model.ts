import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {
  // tslint:disable-next-line:no-any
  [key: string]: any;

  token: string;
}
