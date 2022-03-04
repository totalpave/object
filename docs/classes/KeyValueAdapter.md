[@totalpave/object - v1.1.1](../README.md) / [Exports](../modules.md) / KeyValueAdapter

# Class: KeyValueAdapter<TMap\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMap` | extends `IDictionary` = `IDictionary` |

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
| `TMap` | extends `IDictionary`<`any`, `TMap`\> = `IDictionary`<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapterMap` | `TMap` |

#### Defined in

[KeyValueAdapter.ts:6](https://github.com/totalpave/object/blob/0eede96/src/KeyValueAdapter.ts#L6)

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

[KeyValueAdapter.ts:18](https://github.com/totalpave/object/blob/0eede96/src/KeyValueAdapter.ts#L18)

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

[KeyValueAdapter.ts:14](https://github.com/totalpave/object/blob/0eede96/src/KeyValueAdapter.ts#L14)

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

[KeyValueAdapter.ts:10](https://github.com/totalpave/object/blob/0eede96/src/KeyValueAdapter.ts#L10)
