
import * as api from '../src/api';
import {ObjectUtils} from '../src/ObjectUtils';
import {KeyValueAdapter} from '../src/KeyValueAdapter';

describe('Public API', () => {
    it('ObjectUtils', () => {
        expect(api.ObjectUtils).toBe(ObjectUtils);
    });

    it('KeyValueAdapter', () => {
        expect(api.KeyValueAdapter).toBe(KeyValueAdapter);
    });

    describe('interfaces', () => {
        // Interfaces has no actual runtime representation so they
        // cannot really be tested with expects, however if they are 
        // not present on API, then ts-node should complain and fail.

        it('ICloneable', () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let type: api.ICloneable<any> = null;
        });

        it('ISerializable', () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let type: api.ISerializable = null;
        });

        it('IDictionary', () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let type: api.IDictionary = null;
        });

        it('IDictionary with generic', () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let type: api.IDictionary<string> = null;
        });
    });
});
