import {Schema as ComponentSchema} from '@schematics/angular/component/schema';

export interface Schema extends ComponentSchema {
  /**
   * Specifies template name.
   */
  tplName?: string;
  /**
   * Without prefix to selectors
   */
  withoutPrefix?: boolean;
  /**
   * Specifies relative path.
   */
  target?: string;
  /**
   * Specifies using modal mode.
   */
  modal?: boolean;
}
