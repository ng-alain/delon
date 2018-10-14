import { green, red, bold } from 'chalk';
import { RuleFailure, Rules } from 'tslint';
import * as ts from 'typescript';
import { ExternalResource } from '../../tslint/component-file';
import { ComponentWalker } from '../../tslint/component-walker';
import {
  findAttributeOnElementWithAttrs,
  findElementHasAttributes,
  findElementHasAttribute,
} from '../../html-parsing/elements';

export class Rule extends Rules.AbstractRule {
  apply(sourceFile: ts.SourceFile): RuleFailure[] {
    return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
  }
}

export class Walker extends ComponentWalker {
  visitInlineTemplate(node: ts.StringLiteralLike) {
    this._createFailuresForContent(node, node.getText()).forEach(data => {
      this.addFailureFromStartToEnd(data.start, data.end, data.message);
    });
  }

  visitExternalTemplate(node: ExternalResource) {
    this._createFailuresForContent(node, node.getText()).forEach(data => {
      this.addExternalFailureFromStartToEnd(
        node,
        data.start,
        data.end,
        data.message,
      );
    });
  }

  private _createFailuresForContent(node: ts.Node, content: string) {
    const failures: { message: string; start: number; end: number }[] = [];

    findElementHasAttributes(content, 'st', [
      '(checkboxChange)',
      '(radioChange)',
      '(sortChange)',
      '(filterChange)',
      '(rowClick)',
      '(rowDblClick)',
    ]).forEach(list => {
      failures.push({
        start: node.getStart() + list.offset,
        end: node.getStart() + list.offset + list.attr.length,
        message:
          `Found deprecated output property "${red(list.attr)}" of "${bold(
            'simple-table (st)',
          )}" component. ` +
          `Use the "${green(
            '(change)',
          )}" output property instead. Document: https://ng-alain.com/components/table#STChange`,
      });
    });

    findElementHasAttribute(content, 'st', '[sortReName]').forEach(offset => {
      failures.push({
        start: node.getStart() + offset,
        end: node.getStart() + offset + '[sortReName]'.length,
        message: `Found deprecated property "${red(
          '[sortReName]',
        )}" which has been removed, Just only via "STColumn.sort.reName"`,
      });
    });

    return failures;
  }
}
