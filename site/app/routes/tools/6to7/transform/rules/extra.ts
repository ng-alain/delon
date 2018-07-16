import { ConvertAction } from '../../interface';

export const EXTRARULES: ConvertAction[] = [
    {
        type: 'name',
        name: 'nz-card',
        rules: [
            { type: 'remove-child-template-attr', value: '#body' },
            { type: 'add-template-atrr', value: 'extra', extra_name: 'nzExtra' },
            { type: 'add-template-atrr', value: 'cover', extra_name: 'nzCover' }
        ]
    },
    {
        type: 'name',
        name: 'nz-icon',
        rules: [
            { type: 'name', value: 'i', extra_replace_attrs: { 'nzType': 'class' }, extra_update_attrs: { 'class': 'anticon anticon-{0}' } }
        ]
    },
    {
        type: 'name',
        name: 'nz-divider',
        rules: [
            { type: 'extra', extra_replace_attrs: { 'nzTitle': 'nzText' } }
        ]
    },
    {
        type: 'name',
        name: 'nz-list',
        rules: [
            { type: 'add-template-atrr', value: 'item', extra_name: 'nzRenderItem' },
            { type: 'add-template-atrr', value: 'loadMore', extra_name: 'nzLoadMore' },
            { type: 'add-template-atrr', value: 'pagination', extra_name: 'nzPagination' }
        ]
    }
];
