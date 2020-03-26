# RESTful API 规范

## RESTful API 约定

### HTTP 动词

 使用 HTTP 动词，如 POST， GET， PUT， DELETE，HEAD 等。文档使用 HTTP/1.1 [rfc2616](http://tools.ietf.org/html/rfc2616)。

### RESTful URL

* 在可能的情况下, 要保持 URL 中不作出现动词，URL 仅作为资源描述， 同时结合 HTTP 动词实现动作， 如删除某个资源： DELETE URL。
* 另外可以通过 Query String 传递参数使 URL 变得灵活
* URL 全部使用小写字母，并且使用下划线分割单词。

### HTTP Status Code

合理的使用 20X， 30X，40X，50X 等返回码。例如一个 URL 不存在，那么服务器 HTTP Status Code 就不应该假装正常来返回 200 和一些描述错误的数据，而应该返回错误代码 404 和 错误描述的数据, 约定如下：

| 状态码 | 含义                   |      说明        |
| ---    | -------------------    | ------------     |
| 200    | OK                     | 请求成功         |
| 201    | CREATED                | 创建成功         |
| 202    | ACCEPTED               | 更新成功         |
| 400    | BAD REQUEST            | 包含不支持的参数 |
| 401    | UNAUTHORIZED           | 未授权           |
| 403    | FORBIDDEN              | 被禁止访问       |
| 404    | NOT FOUND              | 请求的资源不存在 |
| 500    | INTERNAL SERVER ERROR  | 内部错误         |

### HTTP Header

除了 HTTP 协议相关文档定义的头外，所有私有的头，都以 ```X-HUITEK-``` 开头

### Response Content 

目前我们的 Response Content 使用 JSON 规范 [json.org](http://json.org) 数据，无论 HTTP 返回码是 20X或者40X或者50X，如果 HTTP 协议中定义的动作的 Response Content 不为空，那么该接口都应该返回 JSON 格式的数据作为 Response Content。

### 编码

使用 UTF-8 编码, 且JSON 返回的数据为 Content-Type:application/json; charset=UTF-8

## 数据模型定义

### 数据字段和参数命名约定

驼峰命名

### 数据字段类型或者数据格式约定

* 时间类型格式为 ```yyyy-MM-dd'T'HH:mm:ss.SSSZ```, 如 ```2015-02-12T17:08:49.682+0800``` 

| 字母 | 含义   |   格式 |   示例  |
| ---  | ------ | ------ | ------- |
| y    | AD 年  |   yyyy |   2015  |
| M    | 月     |   MM   |   02    |
| d    | 日     |   dd   |   12    |
| H    | 小时   |   HH   |   17    |
| m    | 分钟   |   mm   |   08    |
| s    | 秒     |   ss   |   49    |
| S    | 毫秒   |   SSS  |   682   |
| Z    | 时区   |   Z    |   +0800 |

* 所有接口中相同意义的字段，没有特殊原因，都使用同一个名称 (创建一个文件放通用的字段名称和涵义，以及命名规范，比如time还是datetime, 比如单数还是复数的命名约定，什么时候可以用拼音，等等，并放链接指向这个文件)

### 返回内容格式定义

JSON Object 是 [json.org](json.org) 定义的合法的 json 对象(可为 null)

* 正确数据格式

```json
{
    "data": [JSON Object]
}

// or

{
    "data": [JSON Object]
}


```

除了必含属性 data 以外，还可以定义可选属性 meta 和 debug，除这两个属性外，没有特别的需求，不再定义其它属性, 此时格式如下。其中建议 meta 属性存放接口内容无关的信息，而 debug 属性可以在 URL 中传入 debug 参数来开启。这两个属性在数据功能上不影响接口的使用。

```json
{
    "meta": [JSON Object],
    "data": [JSON Object],
    "debug": [JSON Object]
}

// or

{
    "meta": [JSON Object],
    "data": [JSON Object],
    "debug": [JSON Object]
}


```

* 出错返回数据格式

```json
{
    "code": "",
    "message": "",
}
```

所有的错误返回 JSON 数据中必须包含属性：code, message；可选属性： path, queryString, timestamp，除此之外，各个模块可以根据需要添加 meta 和 debug 属性，以便给开发者可能提供更多信息。

必含属性值格式定义如下：

| 属性         | 类型   |  可选   |格式定义 |
| ------------ | ------ |  ------ |-------- |
| code         | string |  required |  数字 |
| message          | string |  required |简短的字符串, 仅供 API 调用者参考，而不推荐 API 调用者直接使用 code 和 message 显示给最终用户 |

* 错误码定义

这里的错误码指业务中各 API 对自身出错情况类型的定义，与 HTTP Status Code 没有一一对应的关系，但是 API 返回错误码时需要合理的使用 HTTP Status Code。

错误码定义示例：

| 错误代码 | 错误描述           | HTTP Status Code |
| ------   | --------           | ----             |
| 1000000 | 未知错误           | 400              |
| 1000001 | 需要权限           | 403              |
| 1000002 | 资源不存在         | 404              |
| 1000003 | 参数不全           | 400              |
| 1000004 | 认证错误           | 401              |
| 1000005 | 签名错误           | 400              |
| 1000006 | 请求失效           | 400              |

各服务的 API 错误码需要自行定义。

这就要求所有业务服务的实现时的一个交付项必须是该服务的错误码表。（建议有一个约定的文件名/URL）

## 接口版本

------

使用阿拉伯数字在 Path 的第一段中标示
