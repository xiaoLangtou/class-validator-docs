## Passing context to decorators 将上下文传递给装饰器

如果验证失败，可以将自定义对象传递给装饰器，该装饰器可以在属性的 ValidationError 实例上访问。

```typescript
import { validate } from 'class-validator';

class MyClass {
  @MinLength(32, {
    message: 'EIC code must be at least 32 characters',
    context: {
      errorCode: 1003,
      developerNote: 'The validated string must contain 32 or more characters.',
    },
  })
  eicCode: string;
}

const model = new MyClass();

validate(model).then(errors => {
  //errors[0].contexts['minLength'].errorCode === 1003
});

```
