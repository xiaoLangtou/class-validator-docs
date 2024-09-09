## Custom validation classes 自定义验证类

如果您有自定义验证逻辑，则可以创建一个 Constraint 类：

1. 首先创建一个文件，比如CustomTextLength.ts，并定义一个新类：
    ```typescript
    import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

    @ValidatorConstraint({ name: 'customText', async: false })
    export class CustomTextLength implements ValidatorConstraintInterface {
      validate(text: string, args: ValidationArguments) {
        return text.length > 1 && text.length < 10; // for async validations you must return a Promise<boolean> here
      }

      defaultMessage(args: ValidationArguments) {
        // here you can provide default error message if validation failed
        return 'Text ($value) is too short or too long!';
      }
    }
    ```

    我们使用 @ValidatorConstraint 装饰器标记我们的类。您还可以提供验证约束名称 - 此名称将用作 ValidationError 中的“错误类型”。如果您不提供约束名称 - 它将自动生成。


    我们的类必须实现 ValidatorConstraintInterface 接口及其 validate 方法，该方法定义了验证逻辑。如果验证成功，则 method 返回 true，否则返回 false。自定义验证器可以是异步的，如果你想在一些异步操作后执行验证，只需在 validate 方法中返回一个带有布尔值的 Promise。

    此外，我们还定义了可选方法 defaultMessage，它定义了一个默认的错误消息，以防装饰器的实现没有设置错误消息。

2. 然后，你可以在 class 中使用新的 validation constraint：

    ```typescript
    import { Validate } from 'class-validator';
    import { CustomTextLength } from './CustomTextLength';

    export class Post {
      @Validate(CustomTextLength, {
        message: 'Title is too short or long!',
      })
      title: string;
    }
    ```

    在这里，我们为 Post.title 设置新创建的 CustomTextLength 验证约束。

3. 并像往常一样使用 validator：

    ```typescript
    import { validate } from 'class-validator';

    validate(post).then(errors => {
      // ...
    });
    ``````


您还可以将约束传递给验证者，如下所示：

```typescript
import { Validate } from 'class-validator';
import { CustomTextLength } from './CustomTextLength';

export class Post {
  @Validate(CustomTextLength, [3, 20], {
    message: 'Wrong post title',
  })
  title: string;
}
```

并从 validationArguments 对象中使用它们：

```typescript
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
export class CustomTextLength implements ValidatorConstraintInterface {
  validate(text: string, validationArguments: ValidationArguments) {
    return text.length > validationArguments.constraints[0] && text.length < validationArguments.constraints[1];
  }
}

```
