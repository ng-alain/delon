import { bold, green, red } from 'chalk';
import { ProgramAwareRuleWalker, RuleFailure, Rules } from 'tslint';
import * as ts from 'typescript';

export class Rule extends Rules.TypedRule {
  applyWithProgram(
    sourceFile: ts.SourceFile,
    program: ts.Program,
  ): RuleFailure[] {
    return this.applyWithWalker(
      new Walker(sourceFile, this.getOptions(), program),
    );
  }
}

export class Walker extends ProgramAwareRuleWalker {
  visitPropertyAccessExpression(node: ts.PropertyAccessExpression) {
    const hostType = this.getTypeChecker().getTypeAtLocation(node.expression);
    const typeName = hostType && hostType.symbol && hostType.symbol.getName();

    if (
      typeName === 'st' &&
      [
        'checkboxChange',
        'radioChange',
        'sortChange',
        'filterChange',
        'rowClick',
        'rowDblClick',
      ].includes(node.name.text)
    ) {
      this.addFailureAtNode(
        node,
        `Found deprecated output property "${red(node.name.text)}" of "${bold(
          'simple-table',
        )}" component.` +
          `Use the "${green('change')}" output property instead.`,
      );
    }

    super.visitPropertyAccessExpression(node);
  }
}
