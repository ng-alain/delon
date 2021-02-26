import { Inject, Injectable } from '@angular/core';
import { AlainConfigService, AlainSFConfig } from '@delon/util/config';
import { REGEX } from '@delon/util/format';
import Ajv from 'ajv';
import { mergeConfig } from './config';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { SFSchema } from './schema';

@Injectable()
export abstract class SchemaValidatorFactory {
  abstract createValidatorFn(schema: SFSchema, extraOptions: { ingoreKeywords: string[]; debug: boolean }): (value: SFValue) => ErrorData[];
}

@Injectable()
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
  protected ajv: Ajv;
  protected options: AlainSFConfig;

  constructor(@Inject(AlainConfigService) cogSrv: AlainConfigService) {
    super();
    if (!(typeof document === 'object' && !!document)) {
      return;
    }
    this.options = mergeConfig(cogSrv);
    this.ajv = new Ajv({
      ...this.options.ajv,
      // errorDataPath: 'property',
      allErrors: true,
    });
    this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
    this.ajv.addFormat('color', REGEX.color);
    this.ajv.addFormat('mobile', REGEX.mobile);
    this.ajv.addFormat('id-card', REGEX.idCard);
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
      let errors = this.ajv.errors;
      if (this.options && ingoreKeywords && errors) {
        errors = errors.filter(w => ingoreKeywords.indexOf(w.keyword) === -1);
      }
      return errors as ErrorData[];
    };
  }
}
