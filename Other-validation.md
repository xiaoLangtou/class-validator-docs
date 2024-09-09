## Synchronous validation 同步验证

如果要执行简单的非异步验证，可以使用 validateSync 方法而不是常规 validate方法。它具有与 validate 方法相同的参数。但请注意，此方法会忽略您拥有的所有异步验证。

## Manual validation 手动验证

Validator 中存在几种方法，允许执行基于非装饰器的验证：

```typescript
import { isEmpty, isBoolean } from 'class-validator';

isEmpty(value);
isBoolean(value);
```

## Defining validation schema without decorators定义不带装饰器的验证模式

class-validator器不再支持没有装饰器的基于 schema 的验证。此功能在 0.12 版本中已损坏，并且不会修复。如果您对基于 schema 的验证感兴趣，可以在 zod readme 的比较部分找到几个这样的框架。

## Validating plain objects 验证普通对象

由于装饰器的性质，必须使用new Class() 语法来实例化已验证的对象。如果你使用类验证器装饰器定义了你的类，并且你想验证普通的 JS 对象（文字对象或由 JSON.parse 返回），你需要通过使用 class-transformer 将其转换为类实例。
