# typestack/class - validator

## 传递选项
`validate`函数可选地期望一个`ValidatorOptions`对象作为第二个参数，例如：
```typescript
export interface ValidatorOptions {
    skipMissingProperties?: boolean;
    whitelist?: boolean;
    forbidNonWhitelisted?: boolean;
    groups?: string[];
    dismissDefaultMessages?: boolean;
    validationError?: {
        target?: boolean;
        value?: boolean;
    };

    forbidUnknownValues?: boolean;
    stopAtFirstError?: boolean;
}
```
重要提示：`forbidUnknownValues`的值默认设置为`true`，建议保持默认值。将其设置为`false`将导致未知对象通过验证。
