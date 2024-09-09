## Skipping missing properties 跳过缺失的属性


有时，您可能希望跳过对验证对象中不存在的属性的验证。当您想要更新对象的某些部分，并且只想验证更新的部分，但跳过其他所有内容（例如跳过缺少的属性）时，这通常是可取的。在这种情况下，您需要传递一个特殊标志来validate方法：

```typescript
import { validate } from 'class-validator';
// ...
validate(post, { skipMissingProperties: true });

```
跳过缺少的属性时，有时您不希望跳过所有缺少的属性，即使 skipMissingProperties 设置为 true，其中一些属性可能也是必需的。对于这种情况，你应该使用 @IsDefined() 装饰器。@IsDefined() 是唯一忽略 skipMissingProperties 选项的装饰器。
