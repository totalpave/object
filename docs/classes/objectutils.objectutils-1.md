[@totalpave/object - v1.0.0](../README.md) / [Exports](../modules.md) / [ObjectUtils](../modules/objectutils.md) / ObjectUtils

# Class: ObjectUtils

[ObjectUtils](../modules/objectutils.md).ObjectUtils

## Table of contents

### Methods

- [clone](objectutils.objectutils-1.md#clone)
- [compare](objectutils.objectutils-1.md#compare)
- [isVoid](objectutils.objectutils-1.md#isvoid)
- [merge](objectutils.objectutils-1.md#merge)
- [toArray](objectutils.objectutils-1.md#toarray)

## Methods

### clone

▸ `Static`**clone**(`o`: *any*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`o` | *any* |

**Returns:** *any*

Defined in: [ObjectUtils.ts:29](https://github.com/totalpave/object/blob/53c6978/src/ObjectUtils.ts#L29)

___

### compare

▸ `Static`**compare**(`o1`: *any*, `o2`: *any*): *boolean*

Recursively compares two objects to determine if they are the same
value wise. Wil return true if the two objects
are referencing two different objects, but both
objects have the same keys and values.

If an object has a `compare()` method, it will be invoked via
`o1.compare(o2)`. See `IComparable` interface

#### Parameters:

Name | Type |
:------ | :------ |
`o1` | *any* |
`o2` | *any* |

**Returns:** *boolean*

Defined in: [ObjectUtils.ts:91](https://github.com/totalpave/object/blob/53c6978/src/ObjectUtils.ts#L91)

___

### isVoid

▸ `Static`**isVoid**(`o`: *any*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`o` | *any* |

**Returns:** *boolean*

Defined in: [ObjectUtils.ts:74](https://github.com/totalpave/object/blob/53c6978/src/ObjectUtils.ts#L74)

___

### merge

▸ `Static`**merge**<T1, T2\>(`o1`: T1, `o2`: T2): *IDictionary*<any\>

Merges o2 into o1. Only does shallow merges.
o2 properties will overwrite o1 properties.

#### Type parameters:

Name | Default |
:------ | :------ |
`T1` | *any* |
`T2` | *any* |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`o1` | T1 | The base object   |
`o2` | T2 | The merging object    |

**Returns:** *IDictionary*<any\>

Defined in: [ObjectUtils.ts:21](https://github.com/totalpave/object/blob/53c6978/src/ObjectUtils.ts#L21)

___

### toArray

▸ `Static`**toArray**<T\>(`o`: { [key: string]: T;  }): T[]

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`o` | *object* |

**Returns:** T[]

Defined in: [ObjectUtils.ts:6](https://github.com/totalpave/object/blob/53c6978/src/ObjectUtils.ts#L6)
