## Validation groups 验证组

在不同的情况下，您可能希望使用同一对象的不同验证架构。在这种情况下，您可以使用验证组。


重要使用不会导致验证的组组合（例如：不存在的组名称）调用验证将导致未知值错误。当使用 groups 进行验证时，提供的 group 组合应至少匹配一个装饰器。

```typescript
import { validate, Min, Length } from 'class-validator';

export class User {
  @Min(12, {
    groups: ['registration'],
  })
  age: number;

  @Length(2, 20, {
    groups: ['registration', 'admin'],
  })
  name: string;
}

let user = new User();
user.age = 10;
user.name = 'Alex';

validate(user, {
  groups: ['registration'],
}); // this will not pass validation

validate(user, {
  groups: ['admin'],
}); // this will pass validation

validate(user, {
  groups: ['registration', 'admin'],
}); // this will not pass validation

validate(user, {
  groups: undefined, // the default
}); // this will not pass validation since all properties get validated regardless of their groups

validate(user, {
  groups: [],
}); // this will not pass validation, (equivalent to 'groups: undefined', see above)
```

在您可以使用的验证选项中还有一个特殊的标志 always: true。此标志表示无论使用哪个组，都必须始终应用此验证。
