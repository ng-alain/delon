import { ConvertAction, VDom } from '../../interface';

export const ZORRORULES: ConvertAction[] = [
    {
        type: 'name',
        name: 'button',
        rules: [
            { type: 'change-tag-to-text', value: 'span' }
        ]
    },
    {
        type: 'attr',
        name: 'nz-checkbox',
        rules: [
            { type: 'change-tag-to-text', value: 'span' }
        ]
    },
    {
        type: 'attr',
        name: 'nz-form-item',
        rules: [
            { type: 'attr-to-name', extra_remove_attrs: [ 'nz-row' ] }
        ]
    },
    {
        type: 'attr',
        name: 'nz-form-label',
        rules: [
            { type: 'attr-to-name', extra_remove_attrs: [ 'nz-col' ] },
            { type: 'remove-child', value: 'label' }
        ]
    },
    {
        type: 'attr',
        name: 'nz-form-control',
        rules: [
            { type: 'attr-to-name', extra_remove_attrs: [ 'nzValidateStatus', '[nzValidateStatus]', 'nz-col', '[nz-col]' ] }
        ]
    },
    {
        type: 'attr',
        name: 'nz-form-explain',
        rules: [
            { type: 'attr-to-name' }
        ]
    },
    {
        type: 'attr',
        name: 'nz-form-split',
        rules: [
            { type: 'attr-to-name' }
        ]
    },
    {
        type: 'name',
        name: 'nz-input',
        rules: [
            { type: 'name-to-attr', value: 'input', extra_replace_attrs: { 'nzPlaceHolder': 'placeholder', '[nzPlaceHolder]': '[placeholder]' } }
        ],
        custom: (dom: VDom) => {
            if (dom.attribs && (dom.attribs[`nzType`] === `textarea` || dom.attribs[`[nzType]`] === `'textarea'`)) {
                dom.name = 'textarea';
                dom.attribs['nz-input'] = '';
                return ;
            }
            if (dom.children && dom.children.findIndex(w => w.name === 'ng-template') !== -1) {
                const wrap: VDom = {
                    type: 'tag',
                    name: 'nz-input-group',
                    attribs: {},
                    children: [
                        {
                            type: 'tag',
                            name: 'input',
                            attribs: Object.assign({ 'nz-input': '' }, dom.attribs)
                        },
                        ...dom.children
                    ],
                    next: dom.next,
                    prev: dom.prev
                };
                dom.type = 'tag';
                dom.name = 'nz-input-group';
                const refineAttribs = {};
                dom.children.filter(w => w.name === 'ng-template' && w.attribs)
                    .forEach(v => {
                        const key = Object.keys(v.attribs)[0].substr(1);
                        refineAttribs[`[nz${key.substr(0, 1).toUpperCase()}${key.substr(1)}]`] = key;
                    });
                dom.children = [
                    {
                        type: 'tag',
                        name: 'input',
                        attribs: Object.assign({ 'nz-input': '' }, dom.attribs)
                    },
                    ...dom.children
                ];
                dom.attribs = refineAttribs;
            }
        }
    },
    {
        type: 'attr',
        name: 'nz-row',
        rules: [
            { type: 'attr-to-name' }
        ]
    },
    {
        type: 'attr',
        name: 'nz-col',
        rules: [
            { type: 'attr-to-name' }
        ]
    },
    {
        type: 'attr',
        name: 'nz-thead',
        rules: [
            { type: 'extra', extra_remove_attrs: [ 'nz-thead' ] }
        ]
    },
    {
        type: 'attr',
        name: 'nz-th',
        rules: [
            { type: 'extra', extra_remove_attrs: [ 'nz-th' ] }
        ]
    },
    {
        type: 'attr',
        name: 'nz-tbody',
        rules: [
            { type: 'extra', extra_remove_attrs: [ 'nz-tbody' ] }
        ]
    },
    {
        type: 'attr',
        name: 'nz-tbody-tr',
        rules: [
            { type: 'extra', extra_remove_attrs: [ 'nz-tbody-tr' ] }
        ]
    },
    {
        type: 'attr',
        name: 'nz-td',
        rules: [
            { type: 'extra', extra_remove_attrs: [ 'nz-td' ] }
        ]
    },
    {
        type: 'attr',
        name: 'nz-table-divider',
        rules: [
            { type: 'name',  value: 'nz-divider', extra_insert_attrs: { 'nzType': 'vertical' }, extra_remove_attrs: [ 'nz-table-divider' ] }
        ]
    }
];
