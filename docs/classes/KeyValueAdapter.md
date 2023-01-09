[@totalpave/object - v2.0.0](../README.md) / [Exports](../modules.md) / KeyValueAdapter

# Class: KeyValueAdapter<TMap\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMap` | extends `Record`<`any`, `any`\> = `Record`<`string`, `string`\> |

## Table of contents

### Constructors

- [constructor](KeyValueAdapter.md#constructor)

### Methods

- [adapt](KeyValueAdapter.md#adapt)
- [setAdapterKey](KeyValueAdapter.md#setadapterkey)
- [setAdapterMap](KeyValueAdapter.md#setadaptermap)

## Constructors

### constructor

• **new KeyValueAdapter**<`TMap`\>(`adapterMap`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TMap` | extends `Record`<`any`, `any`\> = `Record`<`string`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapterMap` | `TMap` |

#### Defined in

[KeyValueAdapter.ts:5](https://github.com/totalpave/object/blob/abf8cf9/src/KeyValueAdapter.ts#L5)

## Methods

### adapt

▸ **adapt**(`key`): `TMap`[keyof `TMap`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `TMap` |

#### Returns

`TMap`[keyof `TMap`]

#### Defined in

[KeyValueAdapter.ts:17](https://github.com/totalpave/object/blob/abf8cf9/src/KeyValueAdapter.ts#L17)

___

### setAdapterKey

▸ **setAdapterKey**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `TMap` |
| `value` | `TMap`[keyof `TMap`] |

#### Returns

`void`

#### Defined in

[KeyValueAdapter.ts:13](https://github.com/totalpave/object/blob/abf8cf9/src/KeyValueAdapter.ts#L13)

___

### setAdapterMap

▸ **setAdapterMap**(`adapterMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapterMap` | `TMap` |

#### Returns

`void`

#### Defined in

[KeyValueAdapter.ts:9](https://github.com/totalpave/object/blob/abf8cf9/src/KeyValueAdapter.ts#L9)
