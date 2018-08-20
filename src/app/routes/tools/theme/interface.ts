export interface EditorItem {
    value: string;
    default: string;
    revising: boolean;
    type: string;
    label: string;
    min?: number;
    max?: number;
    step?: number;
    rgba?: boolean;
    tip?: string;
    rel?: string;
}
