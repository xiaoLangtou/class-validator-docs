## 验证错误
`validate`方法返回一个`ValidationError`对象数组，每个`ValidationError`对象包含被验证的对象、未通过验证的属性、属性值、约束条件以及所有嵌套验证错误等信息。
```typescript
{
    target: Object; // Object that was validated.
    property: string; // Object's property that haven't pass validation.
    value: any; // Value that haven't pass a validation.
    constraints?: { // Constraints that failed validation with error messages.
        [type: string]: string;
    };
    children?: ValidationError[]; // Contains all nested validation errors of the property
}
```
```typescript
[{
    target: /* post object */,
    property: "title",
    value: "Hello",
    constraints: {
        length: "$property must be longer than or equal to 10 characters"
    }
}, {
    target: /* post object */,
    property: "text",
    value: "this is a great post about hell world",
    constraints: {
        contains: "text must contain a hello string"
    }
},
// and other errors
]
```

如果你不希望在验证错误中暴露一个 “目标”，那么在使用验证器时有一种特殊的选项。
```typescript
validator.validate(post, { validationError: { target: false } });
```
这在通过 HTTP 发送错误时特别有用，并且你很可能不想暴露整个目标对象。
