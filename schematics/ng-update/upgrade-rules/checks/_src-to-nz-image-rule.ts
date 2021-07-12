import {
  findInputsOnElementWithAttr,
  Migration,
  ResolvedResource,
  TargetVersion,
  UpgradeData
} from '@angular/cdk/schematics';

export class SrcToNzImageRule extends Migration<UpgradeData> {
  enabled = this.targetVersion === TargetVersion.V12;

  visitTemplate(template: ResolvedResource): void {
    const deprecatedComponent = (deprecated: string) => {
      findInputsOnElementWithAttr(template.content, '_src', [deprecated]).forEach(offset => {
        this.failures.push({
          filePath: template.filePath,
          position: template.getCharacterAndLineOfPosition(offset),
          message: `Found deprecated "${deprecated}" component. Use "nz-image" to instead please.`
        });
      });
    };

    deprecatedComponent('_src');
    deprecatedComponent('[_src]');
  }
}
