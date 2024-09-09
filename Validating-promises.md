## 验证 Promise
如果你的对象包含具有 Promise 返回值的属性，并且应该进行验证，那么你需要使用 `@ValidatePromise()`装饰器：

```typescript
import { ValidatePromise, Min } from 'class-validator';

export class Post {
  @Min(0)
  @ValidatePromise()
  userId: Promise<number>;
}
```
它也与 @ValidateNested 装饰器配合得很好：

```typescript
import { ValidateNested, ValidatePromise } from 'class-validator';

export class Post {
  @ValidateNested()
  @ValidatePromise()
  user: Promise<User>;
}
```


