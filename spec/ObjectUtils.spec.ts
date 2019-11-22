
import {ObjectUtils} from '../src/ObjectUtils';

describe('ObjectUtils', () => {
    it('toArray', () => {
        let obj: any = {
            1: '1',
            2: '2',
            3: '3'
        };

        expect(ObjectUtils.toArray(obj)).toEqual([
            '1',
            '2',
            '3'
        ]);
    });

    describe('clone', () => {
        it('number', () => {
            expect(ObjectUtils.clone(123)).toBe(123);
        });

        it('string', () => {
            expect(ObjectUtils.clone('123')).toBe('123');
        });

        it('boolean', () => {
            expect(ObjectUtils.clone(true)).toBe(true);
            expect(ObjectUtils.clone(false)).toBe(false);
        });

        it('object with clone function', () => {
            let obj: any = {
                clone: () => {
                    return 'cloned';
                }
            };

            expect(ObjectUtils.clone(obj)).toBe('cloned');
        });

        it('object without clone function', () => {
            let obj: any = {
                fname: 'John',
                lname: 'Smith'
            };

            let clone: any = ObjectUtils.clone(obj);
            expect(clone).toEqual(obj);
            expect(clone).not.toBe(obj);
        });

        it('array', () => {
            let arr: Array<number> = [
                1,
                2,
                3
            ];

            let clone: Array<number> = ObjectUtils.clone(arr);
            expect(clone).toEqual(arr);
            expect(clone).not.toBe(arr);
        });

        it('nested arrays', () => {
            let arr: Array<Array<Array<number>>> = [
                [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        3
                    ]
                ],
                [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        3
                    ]
                ],
                [
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        3
                    ],
                    [
                        1,
                        2,
                        3
                    ]
                ]
            ];

            let clone: Array<Array<Array<number>>> = ObjectUtils.clone(arr);
            expect(clone).toEqual(arr);
            expect(clone).not.toBe(arr);
        });

        it('Array of dates', () => {
            let arr: Array<Date> = [
                new Date(),
                new Date(),
                new Date()
            ];

            let clone: Array<any> = ObjectUtils.clone(arr);
            expect(clone).toEqual(arr);
            expect(clone).not.toBe(arr);
        });

        it('Array of objects', () => {
            let arr: Array<any> = [
                {
                    test: true
                },
                {
                    clone: () => {
                        return 'cloned';
                    }
                }
            ];

            let expectation: Array<any> = [
                {
                    test: true
                },
                'cloned'
            ];

            let clone: Array<any> = ObjectUtils.clone(arr);
            expect(clone).toEqual(expectation);
            expect(clone).not.toBe(arr);
        });

        it('date', () => {
            let date: Date = new Date();

            let clone: Date = ObjectUtils.clone(date);
            expect(clone).toEqual(date);
            expect(clone).not.toBe(date);
        });
    });

    describe('isVoid', () => {
        it('null to be true', () => {
            expect(ObjectUtils.isVoid(null)).toBe(true);
        });
        
        it('undefined to be true', () => {
            expect(ObjectUtils.isVoid(undefined)).toBe(true);
        });

        it('NaN to be false', () => {
            expect(ObjectUtils.isVoid(NaN)).toBe(false);
        });

        it('false to be false', () => {
            expect(ObjectUtils.isVoid(false)).toBe(false);
        });

        it('true to be false', () => {
            expect(ObjectUtils.isVoid(true)).toBe(false);
        });

        it('0 to be false', () => {
            expect(ObjectUtils.isVoid(0)).toBe(false);
        });

        it('1 to be false', () => {
            expect(ObjectUtils.isVoid(1)).toBe(false);
        });

        it('"test" to be false', () => {
            expect(ObjectUtils.isVoid('test')).toBe(false);
        });

        it('Date to be false', () => {
            expect(ObjectUtils.isVoid(new Date())).toBe(false);
        });

        it('[] to be false', () => {
            expect(ObjectUtils.isVoid([])).toBe(false);
        });

        it('{} to be false', () => {
            expect(ObjectUtils.isVoid({})).toBe(false);
        });

        it('Infinity to be false', () => {
            expect(ObjectUtils.isVoid(Infinity)).toBe(false);
        });
    });
});
