# 一、Babel概述

- Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码；
- Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。