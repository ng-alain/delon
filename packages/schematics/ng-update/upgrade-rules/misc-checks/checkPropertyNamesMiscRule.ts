import { green, red, bold } from 'chalk';
import { RuleFailure, Rules } from 'tslint';
import * as ts from 'typescript';
import { ExternalResource } from '../../tslint/component-file';
import { ComponentWalker } from '../../tslint/component-walker';
import {
  findElements,
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
          `Found deprecated @Output() "${red(list.attr)}" on "${bold(
            'st(simple-table)',
          )}". ` +
          `Use "${green(
            '(change)',
          )}" instead, Document: https://ng-alain.com/components/table#STChange`,
      });
    });

    findElementHasAttribute(content, 'st', '[sortReName]').forEach(offset => {
      failures.push({
        start: node.getStart() + offset,
        end: node.getStart() + offset + '[sortReName]'.length,
        message: `Found deprecated @Input() "${red(
          '[sortReName]',
        )}" which has been removed, Use "${green(
          'STColumn.sort.reName',
        )}" instead.`,
      });
    });

    findElementHasAttributes(content, 'sv', [
      'detailClass',
      '[detailClass]',
    ]).forEach(list => {
      failures.push({
        start: node.getStart() + list.offset,
        end: node.getStart() + list.offset + list.attr.length,
        message:
          `Found deprecated @Input() "${red(list.attr)}" on "${bold(
            'sv(desc-list-item)',
          )}". ` +
          `Use "${green(
            '[type]',
          )}" instead, Document: https://ng-alain.com/components/view#sv`,
      });
    });

    findElements(content, 'standard-form-row').forEach(offset => {
      failures.push({
        start: node.getStart() + offset,
        end: node.getStart() + offset + 'standard-form-row'.length,
        message: `Found deprecated component "${red(
          '[standard-form-row]',
        )}" which has been removed, you can use "${green(
          '[se]',
        )}" instead, Document: https://ng-alain.com/components/edit`,
      });
    });

    return failures;
  }
}
