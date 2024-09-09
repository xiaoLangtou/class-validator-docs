## Whitelisting 白名单

即使您的对象是验证类的实例，它也可以包含未定义的其他属性。如果你不想在你的对象上拥有这样的属性，请传递特殊标志来validate方法：

```typescript
import { validate } from 'class-validator';
// ...
validate(post, { whitelist: true });

```

这将去除所有没有任何装饰器的属性。如果没有其他装饰器适合您的财产，您可以使用@Allow装饰器：

```typescript
import {validate, Allow, Min} from "class-validator";

export class Post {

    @Allow()
    title: string;

    @Min(0)
    views: number;

    nonWhitelistedProperty: number;
}

let post = new Post();
post.title = 'Hello world!';
post.views = 420;

post.nonWhitelistedProperty = 69;
(post as any).anotherNonWhitelistedProperty = "something";

validate(post).then(errors => {
  // post.nonWhitelistedProperty is not defined
  // (post as any).anotherNonWhitelistedProperty is not defined
  ...
});

```

如果你希望在存在任何非白名单属性时抛出错误，请将另一个标志传递给validate 方法：

```typescript
import { validate } from 'class-validator';
// ...
validate(post, { whitelist: true, forbidNonWhitelisted: true });
```
