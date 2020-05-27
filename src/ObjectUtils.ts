
export class ObjectUtils {
    private constructor() {}

    public static toArray(o: any): Array<any> {
        let arr: Array<any> = [];
        for (let i in o) {
            arr.push(o[i]);
        }
        return arr;
    }

    /**
     * Merges o2 into o1. Only does shallow merges.
     * o2 properties will overwrite o1 properties.
     * 
     * @param o1 The base object
     * @param o2 The merging object
     */
    public static merge(o1: any, o2: any): any {
        return {
            ...o1,
            ...o2
        };
    }

    public static clone(o: any): any {
        // Check for pass-by-val types
        if (!o || o === true || typeof o === 'string' || typeof o === 'number') {
            return o;
        }

        if (typeof o.clone === 'function') {
            return o.clone();
        }

        if (o instanceof Date) {
            return new Date(o.getTime());
        }

        let isArray: boolean = o instanceof Array;
        let obj: any = isArray ? [] : {};
        
        for (const i in o) {
            let value = o[i];

            if (!value || value === true || typeof value === 'string' || typeof value === 'number') { // typeof null === 'object'
                // Don't do anything for pass-by-val types
            }
            else if (value instanceof Array) {
                value = ObjectUtils.clone(value);
            }
            else if (value instanceof Date) {
                value = new Date(value.getTime());
            }
            else if (typeof value === 'object') {
                if (value !== null && typeof value.clone === 'function') {
                    value = value.clone();
                }
                else if (value !== null) {
                    value = ObjectUtils.clone(value);
                }
            }

            obj[i] = value;
        }

        return obj;
    }

    public static isVoid(o: any): boolean {
        return o === null || o === undefined;
    }
}
