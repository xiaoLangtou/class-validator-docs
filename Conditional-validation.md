## Conditional validation 条件验证


条件验证装饰器 （@ValidateIf） 可用于在提供的条件函数返回 false 时忽略属性上的验证器。condition 函数采用正在验证的对象，并且必须返回boolean。

```typescript
import { ValidateIf, IsNotEmpty } from 'class-validator';

export class Post {
  otherProperty: string;

  @ValidateIf(o => o.otherProperty === 'value')
  @IsNotEmpty()
  example: string;
}
```
在上面的示例中，除非对象的 otherProperty 为 "value"，否则不会运行应用于 example 的验证规则。

请注意，当条件为 false 时，将忽略所有验证装饰器，包括 isDefined。
