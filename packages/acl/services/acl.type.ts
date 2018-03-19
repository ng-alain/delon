export interface ACLType {
    /**
     * 角色
     */
    role?: string[];
    /**
     * 权限点
     */
    ability?: number[] | string[];

    [key: string]: any;
}

export type ACLCanType = number | number[] | string | string[] | ACLType;
