/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {bold, green, red} from 'chalk';
import {RuleFailure, Rules} from 'tslint';
import * as ts from 'typescript';
import {findInputsOnElementWithTag, findOutputsOnElementWithTag} from '../html/angular';
import {ExternalResource} from '../tslint/component-file';
import {ComponentWalker} from '../tslint/component-walker';
import {findAllSubstringIndices} from '../typescript/literal';

/**
 * Rule that walks through every inline or external template and reports if there are outdated
 * usages of the Angular Material API that need to be updated manually.
 */
export class Rule extends Rules.AbstractRule {
  apply(sourceFile: ts.SourceFile): RuleFailure[] {
    return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
  }
}

export class Walker extends ComponentWalker {

  visitInlineTemplate(template: ts.StringLiteral) {
    this._createFailuresForContent(template, template.getText())
      .forEach(data => this.addFailureFromStartToEnd(data.start, data.end, data.message));
  }

  visitExternalTemplate(template: ExternalResource) {
    this._createFailuresForContent(template, template.getFullText()).forEach(data => {
      this.addFailure(new RuleFailure(
          template, data.start, data.end, data.message, this.getRuleName()));
    });
  }

  private _createFailuresForContent(node: ts.Node, content: string) {
    const failures: {message: string, start: number, end: number}[] = [];

    // findAllSubstringIndices(content, 'cdk-focus-trap').forEach(offset => {
    //   failures.push({
    //     start: node.getStart() + offset,
    //     end: node.getStart() + offset + 'cdk-focus-trap'.length,
    //     message: `Found deprecated element selector "${red('cdk-focus-trap')}" which has been ` +
    //         `changed to an attribute selector "${green('[cdkTrapFocus]')}".`
    //   });
    // });

    return failures;
  }
}
