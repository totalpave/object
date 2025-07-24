
export class Iterator<TArrayItem = any> {
    protected _data: TArrayItem[];
    protected _cursor: number;

    constructor(data: TArrayItem[]) {
        this._data = data;
        this._cursor = -1;
    }

    public hasNext(): boolean {
        let cursor = this._cursor + 1;
        return cursor >= 0 && cursor < this._data.length;
    }

    public hasPrevious(): boolean {
        let cursor = this._cursor;
        return cursor >= 0 && cursor < this._data.length;
    }

    public next(): TArrayItem {
        this._cursor++;
        return this._data[this._cursor];
    }

    public previous(): TArrayItem {
        return this._data[this._cursor--];
    }

    public iterate(fn: (value: TArrayItem, index: number, array: TArrayItem[]) => void): void {
        this._data.forEach(fn);
    }

    public hasReachedEnd(): boolean {
        return this._cursor > this._data.length;
    }

    public reset(): void {
        this._cursor = -1;
    }
}
