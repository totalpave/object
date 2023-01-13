[@totalpave/object - v3.0.0](../README.md) / [Exports](../modules.md) / KeyValueAdapter

# Class: KeyValueAdapter<TMap\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMap` | extends `Record`<`any`, `any`\> = `Record`<`string`, `string`\> |

## Implements

- `IKeyValueAdapter`<`TMap`\>

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

[KeyValueAdapter.ts:7](https://github.com/totalpave/object/blob/82a84fa/src/KeyValueAdapter.ts#L7)

## Methods

### adapt

▸ **adapt**(`key`): `TMap`[keyof `TMap`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `TMap` |

#### Returns

`TMap`[keyof `TMap`]

#### Implementation of

IKeyValueAdapter.adapt

#### Defined in

[KeyValueAdapter.ts:19](https://github.com/totalpave/object/blob/82a84fa/src/KeyValueAdapter.ts#L19)

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

#### Implementation of

IKeyValueAdapter.setAdapterKey

#### Defined in

[KeyValueAdapter.ts:15](https://github.com/totalpave/object/blob/82a84fa/src/KeyValueAdapter.ts#L15)

___

### setAdapterMap

▸ **setAdapterMap**(`adapterMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adapterMap` | `TMap` |

#### Returns

`void`

#### Implementation of

IKeyValueAdapter.setAdapterMap

#### Defined in

[KeyValueAdapter.ts:11](https://github.com/totalpave/object/blob/82a84fa/src/KeyValueAdapter.ts#L11)
