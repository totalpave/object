
import {IKeyValueAdapter} from '@totalpave/interfaces';

export class KeyValueAdapter<TMap extends Record<any, any> = Record<string, string>> implements IKeyValueAdapter<TMap> {
    private $map: TMap;

    public constructor(adapterMap: TMap) {
        this.setAdapterMap(adapterMap);
    }

    public setAdapterMap(adapterMap: TMap): void {
        this.$map = adapterMap;
    }

    public setAdapterKey(key: keyof TMap, value: TMap[keyof TMap]): void {
        this.$map[key] = value;
    }

    public hasMapping(key: keyof TMap): boolean {
        return Object.keys(this.$map).indexOf(key as string) > -1
    }

    public adapt(key: keyof TMap): TMap[keyof TMap] {
        if (!this.hasMapping(key)) {
            throw new Error(`Key "${String(key)}" doesn't exist in map.`);
        }
        
        return this.$map[key];
    }
}
