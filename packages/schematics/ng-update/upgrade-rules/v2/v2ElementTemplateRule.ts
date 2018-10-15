import { green, red } from 'chalk';
import { Replacement, RuleFailure, Rules } from 'tslint';
import * as ts from 'typescript';
import { ExternalResource } from '../../tslint/component-file';
import { ComponentWalker } from '../../tslint/component-walker';
import { getUpgradeDataFromWalker } from '../../upgrade-data';
import { DomService } from '../../dom/dom.service';
import { ConvertAction } from '../../dom/interfaces';

export class Rule extends Rules.AbstractRule {
  apply(sourceFile: ts.SourceFile): RuleFailure[] {
    return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
  }
}

export class Walker extends ComponentWalker {
  data = getUpgradeDataFromWalker(this, 'v2Element');
  dom = new DomService();

  visitInlineTemplate(node: ts.StringLiteralLike) {
    this._createReplacementsForContent(node, node.getText()).forEach(data => {
      this.addFailureAtReplacement(data.failureMessage, data.replacement);
    });
  }

  visitExternalTemplate(node: ExternalResource) {
    this._createReplacementsForContent(node, node.getText()).forEach(data => {
      this.addExternalFailureAtReplacement(
        node,
        data.failureMessage,
        data.replacement,
      );
    });
  }

  private _createReplacementsForContent(
    node: ts.Node,
    templateContent: string,
  ) {
    const replacements: {
      failureMessage: string;
      replacement: Replacement;
    }[] = [];

    this.dom.replace(templateContent, this.data as ConvertAction[], dom => {
      const newHtml = this.dom.prettify(dom);
      replacements.push({
        replacement: new Replacement(
          node.getStart(),
          templateContent.length,
          newHtml,
        ),
        failureMessage: ``,
      });
    });

    return replacements;
  }
}
