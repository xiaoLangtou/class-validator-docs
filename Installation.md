# typestack/class - validator

## 简介
`class - validator`是一个基于装饰器的类属性验证库，可在浏览器和 Node.js 平台上使用，内部使用`validator.js`进行验证。

## 安装
使用`npm install class - validator --save`进行安装。
注意：需至少使用`npm@6`，因为从`npm@6`开始，依赖树被扁平化，这是`class - validator`正常运行所必需的。

## 使用

### 创建类并添加装饰器
1. 创建类并在要验证的属性上添加验证装饰器，例如：
```typescript
import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
} from 'class - validator';

export class Post {
    @Length(10, 20)
    title: string;

    @Contains('hello')
    text: string;

    @IsInt()
    @Min(0)
    @Max(10)
    rating: number;

    @IsEmail()
    email: string;

    @IsFQDN()
    site: string;

    @IsDate()
    createDate: Date;
}
```

### 进行验证
可使用`validate`或`validateOrReject`方法，例如：
```typescript
let post = new Post();
post.title = 'Hello'; // 应不通过验证
post.text = 'this is a great post about hell world'; // 应不通过验证
post.rating = 11; // 应不通过验证
post.email = 'google.com'; // 应不通过验证
post.site = 'googlecom'; // 应不通过验证

validate(post).then(errors => {
    // errors 是一个验证错误数组
    if (errors.length > 0) {
        console.log('验证失败。错误：', errors);
    } else {
        console.log('验证成功');
    }
});

validateOrReject(post).catch(errors => {
    console.log('Promise 拒绝（验证失败）。错误：', errors);
});
```
