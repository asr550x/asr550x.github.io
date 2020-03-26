# Python 编码规范

Python 是一个动态开发语言，在开发使用时比较灵活，甚至可以随心所欲的写，但随着项目代码行数的增加，没有良好的代码组织可能会造成项目后期维护变得比较困难。所以，我们应该在写代码前，就要做好充足的 “表面功夫”，严格遵守一个合理的编码规范，在项目的整个生命周期中都能很愉快的编写代码和重构。

## 本文适用范围和原则

* 不搞盲目信仰，奉承实用主义
* Python 2.7 - Python 3.x 没有特殊情形，一般使用 Python 3.6+ 进行项目开发
* 以 PEP8 为蓝本，结合现状做出适当调整，例如行宽由 80 改为 120

## 强制使用检查工具

* pylint
* flake8
* pytest

需要花一定的时间了解以上工具

## 单元测试

* 多写单元测试

## 文件编码和编辑器设置

* 使用 4 空格缩进，禁用 TAB 符号
* 源码文件使用 UTF-8 无 BOM 编码格式
* 总是使用 Unix \n 风格换行符

需要了解 editorconfig（我们定义一套适合目前自己情况的 editorconfig）

## 命名

* class，function 等命名严格遵循 PEP8
* 全局变量（凡是全局的，都是常量），应该始终使用下划线+大写
* 定义枚举，始终加 Enum 后缀
* 定义异常始终加 Exception 后缀
* 定义mixin，始终加 Mixin 后缀

## 强化 private 的概念

1. 实例属性，一般定义成 private 的
2. class，对外提供的方法越少越好
3. module，对外提供的接口越少越好
4. package，对外提供的 module 越少越好

所有东西，一开始就要定义成私有的，等到确实需要开放访问了，才开放出去。

## 关注公开 API 的复杂性

```python
def interface(p1, p2, **kwargs):
def interface(*args, **kwargs):
```

尽量不要使用 `**kwargs`，除非使用的场景非常明确，一旦使用同时需要辅以很明确的文档说明

## 以 package 去设计命名空间，而不是基于 module

使用 package 去组织代码

## 了解如下文件和代码的用途

* `__init__.py`
* `__main__.py`
* `if __name__ == '__main__':`
* `sys.path sys.modules`

## 合理设计项目目录结构

除了使用框架所推荐的项目结构外(如flake，Django)，都使用以下项目目录结构

```python
.
├── README.md
├── awesome_project
│   ├── __init__.py
│   ├── __main__.py
│   ├── constants
│   │   └── __init__.py
│   ├── core
│   │   └── __init__.py
│   ├── lib
│   │   └── __init__.py
│   └── utils
│       └── __init__.py
├── docs
│   └── README.md
├── examples
│   └── ex1.py
└── tests
    └── test1.py

```

[推荐项目结构](https://39.107.32.33/huitong/awesome-project)

（完）
