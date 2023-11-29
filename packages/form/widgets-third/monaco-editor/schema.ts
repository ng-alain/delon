import type { NuMonacoEditorEvent, NuMonacoEditorModel } from '@ng-util/monaco-editor';

import type { SFUISchemaItem } from '@delon/form';

export interface MonacoEditorWidgetSchema extends SFUISchemaItem {
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
  delay?: number;
  change?: (value: string) => void;
  model?: NuMonacoEditorModel;
  /**
   * Height of monaco editor, default: `200px`
   */
  height?: string;
  /**
   * Whether to automatically format the document
   */
  autoFormat?: boolean;
  event?: (ev: NuMonacoEditorEvent) => void;
}
