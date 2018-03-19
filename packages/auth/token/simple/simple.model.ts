import { ITokenModel } from '../interface';

export class SimpleTokenModel implements ITokenModel {

    [key: string]: any;

    token: string;
}
