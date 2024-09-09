## Custom validation decorators 自定义验证装饰器


您还可以创建自定义装饰器。这是使用自定义验证的最优雅方式。让我们创建一个名为 `@IsLongerThan` 的装饰器：

1. 创建一个装饰器本身：

    ```typescript
    import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

    export function IsLongerThan(property: string, validationOptions?: ValidationOptions) {
      return function (object: Object, propertyName: string) {
        registerDecorator({
          name: 'isLongerThan',
          target: object.constructor,
          propertyName: propertyName,
          constraints: [property],
          options: validationOptions,
          validator: {
            validate(value: any, args: ValidationArguments) {
              const [relatedPropertyName] = args.constraints;
              const relatedValue = (args.object as any)[relatedPropertyName];
              return typeof value === 'string' && typeof relatedValue === 'string' && value.length > relatedValue.length; // you can return a Promise<boolean> here as well, if you want to make async validation
            },
          },
        });
      };
    }
    ```
2. 投入使用：

    ```typescript
    import { IsLongerThan } from './IsLongerThan';

    export class Post {
      title: string;

      @IsLongerThan('title', {
        /* you can also use additional validation options, like "groups" in your custom validation decorators. "each" is not supported */
        message: 'Text must be longer than the title',
      })
      text: string;
    }
    ```

在自定义装饰器中，您还可以使用 ValidationConstraint。让我们创建另一个名为 IsUserAlreadyExist 的自定义验证装饰器：

1. 创建 ValidationConstraint 和装饰器：
    ```typescript
    import {
      registerDecorator,
      ValidationOptions,
      ValidatorConstraint,
      ValidatorConstraintInterface,
      ValidationArguments,
    } from 'class-validator';

    @ValidatorConstraint({ async: true })
    export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {
      validate(userName: any, args: ValidationArguments) {
        return UserRepository.findOneByName(userName).then(user => {
          if (user) return false;
          return true;
        });
      }
    }

    export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
      return function (object: Object, propertyName: string) {
        registerDecorator({
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          constraints: [],
          validator: IsUserAlreadyExistConstraint,
        });
      };
    }
    ```
    请注意，我们通过在验证选项中添加 { async: true } 来标记它将通过 async 的约束。

2. 并投入使用：

    ```typescript
    import { IsUserAlreadyExist } from './IsUserAlreadyExist';

    export class User {
      @IsUserAlreadyExist({
        message: 'User $value already exists. Choose another name.',
      })
      name: string;
    }
    `
