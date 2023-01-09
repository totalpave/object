
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
});
