export interface ResolverMap {
    [key: string]: {
        [key: string]: (parent:any, args: any, content: {}, info: any) => any;
    }
}