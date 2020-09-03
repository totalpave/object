import { IDictionary } from './IDictionary';

export class KeyValueAdapter<TMap = IDictionary> {
    private _map: TMap;

    public constructor(adapterMap: TMap) {
        this.setAdapterMap(adapterMap);
    }

    public setAdapterMap(adapterMap: TMap): void {
        this._map = adapterMap;
    }

    public adapt(key: keyof TMap): TMap[keyof TMap] {
        if (Object.keys(this._map).indexOf(<string>key) === -1) {
            throw new Error(`Key "${key}" doesn't exist in map.`);
        }
        
        return this._map[key];
    }
}
