
import {IKeyValueAdapter} from '@totalpave/interfaces';

export class KeyValueAdapter<TIn, TOut> implements IKeyValueAdapter<TIn, TOut> {
    private $map: Record<Extract<keyof TIn, string>, Extract<keyof TOut, string>>;

    public constructor(adapterMap: Record<Extract<keyof TIn, string>, Extract<keyof TOut, string>>) {
        this.setAdapterMap(adapterMap);
    }

    public setAdapterMap(adapterMap: Record<Extract<keyof TIn, string>, Extract<keyof TOut, string>>): void {
        this.$map = adapterMap;
    }

    public setAdapterKey(key: Extract<keyof TIn, string>, value: Extract<keyof TOut, string>): void {
        this.$map[key] = value;
    }

    public hasMapping(key: Extract<keyof TIn, string>): boolean {
        return Object.keys(this.$map).indexOf(key as string) > -1
    }

    public adapt(key: Extract<keyof TIn, string>): Extract<keyof TOut, string> {
        if (!this.hasMapping(key)) {
            throw new Error(`Key "${String(key)}" doesn't exist in map.`);
        }
        
        return this.$map[key];
    }
}
