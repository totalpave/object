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
        return this._map[key];
    }
}
