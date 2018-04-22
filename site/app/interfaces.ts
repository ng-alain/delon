export interface Meta {
    name?: string;
    github?: string;
    types?: { [key: string]: string }[];
    list?: MetaList[];
    module?: string;
}

export interface MetaList {
    [key: string]: any;

    name?: string;

    i18n?: boolean;

    cols?: number;

    order?: number;
}
