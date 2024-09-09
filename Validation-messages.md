## 验证消息


你可以在装饰器选项中指定验证消息，该消息将在 validate 方法返回的 ValidationError中返回（如果此字段的验证失败）。

```typescript
import { MinLength, MaxLength } from 'class-validator';

export class Post {
  @MinLength(10, {
    message: 'Title is too short',
  })
  @MaxLength(50, {
    message: 'Title is too long',
  })
  title: string;
}
```
您可以在消息中使用一些特殊令牌：
- $value - 正在验证的值
- $property - 正在验证的对象属性的名称
- $target - 正在验证的对象类的名称
- $constraint1， $constraint2， ...$constraintN - 由特定验证类型定义的约束

## 用法示例：

```typescript
import { MinLength, MaxLength } from 'class-validator';

export class Post {
  @MinLength(10, {
    // here, $constraint1 will be replaced with "10", and $value with actual supplied value
    message: 'Title is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(50, {
    // here, $constraint1 will be replaced with "50", and $value with actual supplied value
    message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  title: string;
}

```

此外，您还可以提供一个函数，该函数返回一条消息。这允许您创建更精细的消息：

```typescript
import { MinLength, MaxLength, ValidationArguments } from 'class-validator';

export class Post {
  @MinLength(10, {
    message: (args: ValidationArguments) => {
      if (args.value.length === 1) {
        return 'Too short, minimum length is 1 character';
      } else {
        return 'Too short, minimum length is ' + args.constraints[0] + ' characters';
      }
    },
  })
  title: string;
}

```
Message 函数接受 ValidationArguments，其中包含以下信息：

- value - 正在验证的值
- constraints - 由特定验证类型定义的约束数组
- targetName - 正在验证的对象类的名称
- object - 正在验证的对象
- property - 正在验证的对象的属性的名称
