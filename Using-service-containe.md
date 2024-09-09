## Using service container 使用服务容器


Validator 支持服务容器，前提是要将依赖项注入到自定义验证器 constraintclasses 中。以下是如何将其与 typedi 集成的示例：

```typescript
import { Container } from 'typedi';
import { useContainer, Validator } from 'class-validator';

// do this somewhere in the global application level:
useContainer(Container);
let validator = Container.get(Validator);

// now everywhere you can inject Validator class which will go from the container
// also you can inject classes using constructor injection into your custom ValidatorConstraint-s
```
