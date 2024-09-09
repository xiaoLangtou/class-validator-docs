## 验证数组

如果你的字段是一个数组，并且你想对数组中的每个项目执行验证，你必须指定 aspecial each: true 装饰器选项：

```typescript
import { MinLength, MaxLength } from "class-validator";

export class Post {
  @MaxLength(20, {
    each: true,
  })
  tags: string[];
}
```

这将验证 post.tags 数组中的每个项目。

## 验证集合

如果你的字段是一个集合，并且你想对集合中的每个项目执行验证，你必须指定 aspecial each: true 装饰器选项：

```typescript
import { MinLength, MaxLength } from "class-validator";

export class Post {
  @MaxLength(20, {
    each: true,
  })
  tags: Set<string>;
}
```

这将验证 post.tags set 中的每个项目。

## 验证映射 maps

如果你的字段是一个 map，并且你想对 map 中的每个项目执行验证，则必须指定 aspecial each: true decorator 选项：

```typescript
import { MinLength, MaxLength } from "class-validator";

export class Post {
  @MaxLength(20, {
    each: true,
  })
  tags: Map<string, string>;
}
```

这将验证 post.tags map 中的每个项目。

## 验证嵌套对象 objects

如果你的对象包含嵌套对象，并且你希望验证器也执行它们的验证，那么你需要使用 `@ValidateNested()` 装饰器：

```typescript
import { ValidateNested } from "class-validator";

export class Post {
  @ValidateNested()
  user: User;
}
```

请注意，嵌套对象必须是类的实例，否则@ValidateNested 不知道哪个类是验证目标。另请检查 Validating plain objects。

它也适用于多维数组，例如：

```typescript
import { ValidateNested } from "class-validator";

export class Plan2D {
  @ValidateNested()
  matrix: Point[][];
}

```
