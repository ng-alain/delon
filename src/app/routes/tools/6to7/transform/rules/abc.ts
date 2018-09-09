import { ConvertAction } from '../../interface';

export const ABCRULES: ConvertAction[] = [
    {
        type: 'name',
        name: 'pro-header',
        rules: [
            { type: 'name', value: 'page-header' },
            { type: 'remove-child', value: 'ng-template' }
        ]
    },
    {
        type: 'name',
        name: 'global-footer',
        rules: [
            { type: 'remove-child', value: 'ng-template' }
        ]
    }
];
