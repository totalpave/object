[@totalpave/object - v1.1.0](../README.md) / [Exports](../modules.md) / [KeyValueAdapter](../modules/KeyValueAdapter.md) / KeyValueAdapter

# Class: KeyValueAdapter<TMap\>

[KeyValueAdapter](../modules/KeyValueAdapter.md).KeyValueAdapter

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMap` | extends `IDictionary``IDictionary` |

## Table of contents

### Constructors

- [constructor](KeyValueAdapter.KeyValueAdapter-1.md#constructor)

### Methods

- [adapt](KeyValueAdapter.KeyValueAdapter-1.md#adapt)
- [setAdapterKey](KeyValueAdapter.KeyValueAdapter-1.md#setadapterkey)
- [setAdapterMap](KeyValueAdapter.KeyValueAdapter-1.md#setadaptermap)

## Constructors

### constructor

• **new KeyValueAdapter**<`TMap`\>(`adapterMap`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TMap` | extends `IDictionary`<`any`, `TMap`\>`IDictionary`<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapterMap` | `TMap` |

#### Defined in

[KeyValueAdapter.ts:6](https://github.com/totalpave/object/blob/539a0d4/src/KeyValueAdapter.ts#L6)

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

[KeyValueAdapter.ts:18](https://github.com/totalpave/object/blob/539a0d4/src/KeyValueAdapter.ts#L18)

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

[KeyValueAdapter.ts:14](https://github.com/totalpave/object/blob/539a0d4/src/KeyValueAdapter.ts#L14)

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

[KeyValueAdapter.ts:10](https://github.com/totalpave/object/blob/539a0d4/src/KeyValueAdapter.ts#L10)
