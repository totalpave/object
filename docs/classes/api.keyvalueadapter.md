[@totalpave/object - v1.0.0](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / KeyValueAdapter

# Class: KeyValueAdapter<TMap\>

[api](../modules/api.md).KeyValueAdapter

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`TMap` | IDictionary | IDictionary |

## Table of contents

### Constructors

- [constructor](api.keyvalueadapter.md#constructor)

### Methods

- [adapt](api.keyvalueadapter.md#adapt)
- [setAdapterKey](api.keyvalueadapter.md#setadapterkey)
- [setAdapterMap](api.keyvalueadapter.md#setadaptermap)

## Constructors

### constructor

\+ **new KeyValueAdapter**<TMap\>(`adapterMap`: TMap): [*KeyValueAdapter*](keyvalueadapter.keyvalueadapter-1.md)<TMap\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TMap` | *IDictionary*<any, TMap\> | *IDictionary*<any\> |

#### Parameters:

Name | Type |
:------ | :------ |
`adapterMap` | TMap |

**Returns:** [*KeyValueAdapter*](keyvalueadapter.keyvalueadapter-1.md)<TMap\>

Defined in: [KeyValueAdapter.ts:4](https://github.com/totalpave/object/blob/53c6978/src/KeyValueAdapter.ts#L4)

## Methods

### adapt

▸ **adapt**(`key`: keyof TMap): TMap[keyof TMap]

#### Parameters:

Name | Type |
:------ | :------ |
`key` | keyof TMap |

**Returns:** TMap[keyof TMap]

Defined in: [KeyValueAdapter.ts:18](https://github.com/totalpave/object/blob/53c6978/src/KeyValueAdapter.ts#L18)

___

### setAdapterKey

▸ **setAdapterKey**(`key`: keyof TMap, `value`: TMap[keyof TMap]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | keyof TMap |
`value` | TMap[keyof TMap] |

**Returns:** *void*

Defined in: [KeyValueAdapter.ts:14](https://github.com/totalpave/object/blob/53c6978/src/KeyValueAdapter.ts#L14)

___

### setAdapterMap

▸ **setAdapterMap**(`adapterMap`: TMap): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`adapterMap` | TMap |

**Returns:** *void*

Defined in: [KeyValueAdapter.ts:10](https://github.com/totalpave/object/blob/53c6978/src/KeyValueAdapter.ts#L10)
