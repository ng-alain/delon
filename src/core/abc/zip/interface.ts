import { InjectionToken } from '@angular/core';

export const DA_ZIP_CONFIG = new InjectionToken<ZipConfig>('DA_ZIP_CONFIG');

export interface ZipConfig {
    /**
     * Zip library path
     * @default //cdn.bootcss.com/jszip/3.1.5/jszip.min.js
     */
    url?: string;
    /**
     * Defines which zip optional utils should get loaded
     */
    utils?: string[];
}

export interface ZipWriteOptions {
    /** save file name, default: `download.zip` */
    filename?: string;
    options?: any;
    /** The optional function called on each internal update with the metadata. */
    update?: (metadata: any) => void;
    /** triggers when saveas */
    callback?: () => void;
}
