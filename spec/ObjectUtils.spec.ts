
import {ObjectUtils} from '../src/ObjectUtils';
import {IComparable} from '../src/IComparable';

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

    describe('Merge', () => {
        it('merges', () => {
            let o1 = {
                fname: 'John',
                lname: 'Smith',
                age: 30,
                canSwim: false
            };

            let o2 = {
                fname: 'Norman',
                lname: 'Breau',
                age: 31,
                handicapped: true
            };

            expect(ObjectUtils.merge(o1, o2)).toEqual({
                fname: 'Norman',
                lname: 'Breau',
                age: 31,
                canSwim: false,
                handicapped: true
            });
        });
    });

    describe('Compare', () => {
        describe('NaNs', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare(NaN, NaN)).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare(NaN, 123)).toBe(false);
            });
        });

        describe('Strings', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare("test", "test")).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare("test", "123")).toBe(false);
            });

            it('should return false (type mismatch)', () => {
                expect(ObjectUtils.compare('adsf', 123)).toBe(false);
            });
        });

        describe('Numbers', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare(123, 123)).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare(123, 1234)).toBe(false);
            });

            it('should return false (type mismatch)', () => {
                expect(ObjectUtils.compare(123, [])).toBe(false);
            });
        });

        describe('Dates', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare(new Date(1234), new Date(1234))).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare(new Date(123), new Date(1234))).toBe(false);
            });

            it('should return false (type mismatch)', () => {
                expect(ObjectUtils.compare(new Date(), 'asdf')).toBe(false);
            });
        });

        describe('Functions', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare(function () {
                    return "hi";
                }, function() {
                    return "hi";
                })).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare(function() {
                    return "hi";
                }, function() {
                    return "world";
                })).toBe(false);
            });

            it('should return false (type mismatch)', () => {
                expect(ObjectUtils.compare(() => {}, 123)).toBe(false);
            });
        });

        describe('Booleans', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare(true, true)).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare(false, true)).toBe(false);
            });

            it('should return false (type mismatch)', () => {
                expect(ObjectUtils.compare(true, 123)).toBe(false);
            });
        });

        describe('Arrays', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare([
                    1,
                    2,
                    3
                ], [
                    1,
                    2,
                    3
                ])).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare([
                    1,
                    2,
                    3
                ], [
                    1,
                    2,
                    3,
                    4
                ])).toBe(false);

                expect(ObjectUtils.compare([
                    1,
                    2,
                    3
                ], [
                    1,
                    3,
                    4
                ])).toBe(false);
            });

            it('should return false (type mismatch)', () => {
                expect(ObjectUtils.compare([], 123)).toBe(false);
            });
        });

        describe('Arrays recursive', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare([
                    [
                        1,
                        2,
                        3
                    ]
                ], [
                    [
                        1,
                        2,
                        3
                    ]
                ])).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare([
                    [
                        1,
                        2,
                        3
                    ]
                ], [
                    [
                        1,
                        2,
                        4
                    ]
                ])).toBe(false);
            });
        });

        describe('Objects', () => {
            it('should return true', () => {
                expect(ObjectUtils.compare({
                    "hi": "world"
                }, {
                    "hi": "world"
                })).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare({
                    "hi" : "world"
                }, {
                    "hi": "mom"
                })).toBe(false);
            });

            it('should return false (type mismatch)', () => {
                expect(ObjectUtils.compare({}, 123)).toBe(false);
            });

            it('should return false (key length mismatch)', () => {
                expect(ObjectUtils.compare({}, {hi:true})).toBe(false);
            });
        });

        describe('compare method', () => {
            let obj: IComparable = {
                compare: (o: any): boolean => {
                    return o.hi === true;
                }
            };

            it('should return true', () => {
                expect(ObjectUtils.compare(obj, {hi:true, test:123})).toBe(true);
            });

            it('should return false', () => {
                expect(ObjectUtils.compare(obj, {hi:false, test:123})).toBe(false);
            });
        });

        describe('nulls/undefined', () => {
            it('null - null', () => {
                expect(ObjectUtils.compare(null, null)).toBe(true);
            });

            it('null - undefined', () => {
                expect(ObjectUtils.compare(null, undefined)).toBe(false);
            });
        })
    });
});
