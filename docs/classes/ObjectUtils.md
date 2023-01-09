[@totalpave/object - v2.0.0](../README.md) / [Exports](../modules.md) / ObjectUtils

# Class: ObjectUtils

## Table of contents

### Methods

- [clone](ObjectUtils.md#clone)
- [compare](ObjectUtils.md#compare)
- [isVoid](ObjectUtils.md#isvoid)
- [merge](ObjectUtils.md#merge)
- [toArray](ObjectUtils.md#toarray)

## Methods

### clone

▸ `Static` **clone**(`o`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

`any`

#### Defined in

[ObjectUtils.ts:30](https://github.com/totalpave/object/blob/abf8cf9/src/ObjectUtils.ts#L30)

___

### compare

▸ `Static` **compare**(`o1`, `o2`): `boolean`

Recursively compares two objects to determine if they are the same
value wise. Will return true if the two objects
are referencing two different objects, but both
objects have the same keys and values.

If an object has a `compare()` method, it will be invoked via
`o1.compare(o2)`. See `IComparable` interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `o1` | `any` |
| `o2` | `any` |

#### Returns

`boolean`

#### Defined in

[ObjectUtils.ts:103](https://github.com/totalpave/object/blob/abf8cf9/src/ObjectUtils.ts#L103)

___

### isVoid

▸ `Static` **isVoid**<`T`\>(`o`): `boolean`

Returns true if the input object is null or undefined.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

#### Returns

`boolean`

#### Defined in

[ObjectUtils.ts:86](https://github.com/totalpave/object/blob/abf8cf9/src/ObjectUtils.ts#L86)

___

### merge

▸ `Static` **merge**<`T1`, `T2`\>(`o1`, `o2`): `Record`<`string`, `any`\>

Merges o2 into o1. Only does shallow merges.
o2 properties will overwrite o1 properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | `any` |
| `T2` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o1` | `T1` | The base object |
| `o2` | `T2` | The merging object |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[ObjectUtils.ts:22](https://github.com/totalpave/object/blob/abf8cf9/src/ObjectUtils.ts#L22)

___

### toArray

▸ `Static` **toArray**<`T`\>(`o`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `Object` |

#### Returns

`T`[]

#### Defined in

[ObjectUtils.ts:7](https://github.com/totalpave/object/blob/abf8cf9/src/ObjectUtils.ts#L7)
