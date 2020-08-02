import * as chalk from 'chalk';
import { RuleFailure, Rules } from 'tslint';
import * as ts from 'typescript';
import { findElementHasAttribute, findElementHasAttributes, findElements } from '../../html-parsing/elements';
import { ExternalResource } from '../../tslint/component-file';
import { ComponentWalker } from '../../tslint/component-walker';

export class Rule extends Rules.AbstractRule {
  apply(sourceFile: ts.SourceFile): RuleFailure[] {
    return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
  }
}

export class Walker extends ComponentWalker {
  visitInlineTemplate(node: ts.StringLiteralLike): void {
    this._createFailuresForContent(node, node.getText()).forEach(data => {
      this.addFailureFromStartToEnd(data.start, data.end, data.message);
    });
  }

  visitExternalTemplate(node: ExternalResource): void {
    this._createFailuresForContent(node, node.getText()).forEach(data => {
      this.addExternalFailureFromStartToEnd(node, data.start, data.end, data.message);
    });
  }

  private _createFailuresForContent(
    node: ts.Node,
    content: string,
  ): {
    message: string;
    start: number;
    end: number;
  }[] {
    const failures: Array<{ message: string; start: number; end: number }> = [];

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
          `Found removed @Output() "${chalk.red(list.attr)}" on "${chalk.bold('st(simple-table)')}". ` +
          `Use "${chalk.green('(change)')}" instead, Document: https://ng-alain.com/components/table#STChange`,
      });
    });

    findElementHasAttribute(content, 'st', '[sortReName]').forEach(offset => {
      failures.push({
        start: node.getStart() + offset,
        end: node.getStart() + offset + '[sortReName]'.length,
        message: `Found deprecated @Input() "${chalk.red('[sortReName]')}" which has been removed, Use "${chalk.green(
          'STColumn.sort.reName',
        )}" instead.`,
      });
    });

    findElementHasAttributes(content, 'sv', ['detailClass', '[detailClass]']).forEach(list => {
      failures.push({
        start: node.getStart() + list.offset,
        end: node.getStart() + list.offset + list.attr.length,
        message:
          `Found deprecated @Input() "${chalk.red(list.attr)}" on "${chalk.bold('sv(desc-list-item)')}". ` +
          `Use "${chalk.green('[type]')}" instead, Document: https://ng-alain.com/components/view#sv`,
      });
    });

    findElements(content, 'standard-form-row').forEach(offset => {
      failures.push({
        start: node.getStart() + offset,
        end: node.getStart() + offset + 'standard-form-row'.length,
        message: `Found deprecated component "${chalk.red('[standard-form-row]')}" which has been removed, you can use "${chalk.green(
          '[se]',
        )}" instead, Document: https://ng-alain.com/components/edit`,
      });
    });

    return failures;
  }
}
