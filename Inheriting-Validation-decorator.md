## 继承 Validation 装饰器

当你定义一个从另一个子类继承而来的子类时，该子类将自动继承父类的装饰器。如果在 descendant 中重新定义了一个属性，那么 class 装饰器将从它自己的类和基类都应用于它。

```typescript
import { validate } from 'class-validator';

class BaseContent {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

class User extends BaseContent {
  @MinLength(10)
  @MaxLength(20)
  name: string;

  @Contains('hello')
  welcome: string;

  @MinLength(20)
  password: string;
}

let user = new User();

user.email = 'invalid email'; // inherited property
user.password = 'too short'; // password wil be validated not only against IsString, but against MinLength as well
user.name = 'not valid';
user.welcome = 'helo';

validate(user).then(errors => {
  // ...
}); // it will return errors for email, password, name and welcome properties

```
