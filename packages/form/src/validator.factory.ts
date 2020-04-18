import {Inject, Injectable} from '@angular/core';
import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {DelonFormConfig} from './config';
import {ErrorData} from './errors';
import {SFValue} from './interface';
import {SFSchema} from './schema';

declare var Ajv: NzSafeAny;

@Injectable()
export abstract class SchemaValidatorFactory {
  abstract createValidatorFn(
    schema: SFSchema,
    extraOptions: { ingoreKeywords: string[]; debug: boolean },
  ): (value: SFValue) => ErrorData[];
}

@Injectable()
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
  protected ajv: NzSafeAny;

  constructor(@Inject(DelonFormConfig) private options: DelonFormConfig) {
    super();
    this.ajv = new Ajv({
      ...options.ajv,
      errorDataPath: 'property',
      allErrors: true,
      jsonPointers: true,
    });
    this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
    this.ajv.addFormat(
      'color',
      /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    );
    this.ajv.addFormat('mobile', /^(0|\+?86|17951)?1[0-9]{10}$/);
    this.ajv.addFormat('id-card', /(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
  }

  createValidatorFn(schema: SFSchema, extraOptions: { ingoreKeywords: string[]; debug: boolean }): (value: SFValue) => ErrorData[] {
    const ingoreKeywords: string[] = [...(this.options.ingoreKeywords as string[]), ...((extraOptions.ingoreKeywords as string[]) || [])];

    return (value: SFValue): ErrorData[] => {
      try {
        this.ajv.validate(schema, value);
      } catch (e) {
        // swallow errors thrown in ajv due to invalid schemas, these
        // still get displayed
        if (extraOptions.debug) {
          console.warn(e);
        }
      }
      let errors: any[] = this.ajv.errors;
      if (this.options && ingoreKeywords && errors) {
        errors = errors.filter(w => ingoreKeywords.indexOf(w.keyword) === -1);
      }
      return errors;
    };
  }
}
