
import {KeyValueAdapter} from '../src/KeyValueAdapter';

describe('KeyValueAdapter', () => {
    it('adapt', () => {
        interface ITestMap {
            test: string;
            value: string;
        }

        let adapter: KeyValueAdapter<ITestMap> = new KeyValueAdapter({
            test: "hi",
            value: "world"
        });

        expect(adapter.adapt('test')).toBe('hi');
        expect(adapter.adapt('value')).toBe('world');
    });

    it('should error', () => {
        interface ITestMap {
            test: string;
            value: string;
        }

        let adapter: KeyValueAdapter<ITestMap> = new KeyValueAdapter({
            test: "hi",
            value: "world"
        });

        expect(() => {
            adapter.adapt(<any>"asdf");
        }).toThrowError(/doesn't exist in map\.$/);
    });
});
