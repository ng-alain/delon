import {Schema as ComponentSchema} from '@schematics/angular/component/schema';

export interface Schema extends ComponentSchema {
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
