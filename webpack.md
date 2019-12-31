## 从0搭建webpack环境

编写本文时`webpack`版本：

- `webpack`：`4.41.5`
- `webpack-cli`：`3.3.10`


### 1. 初始化项目

新建一个目录，并初始化`npm`

`npm init`

### 2. 安装`webpack`和`webpack-cli`

`npm i -D webpack webpack-cli`

新建`src/index.js`文件，修改`package.json`文件：

```JavaScript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack src/index.js"
},
```

运行`npm run build`能正常运行。生成`dist/main.js`文件。

**指定入口文件（`entry`）和输出文件（`output`）**

根目录新建`webpack.config.js`配置文件

```JavaScript
// webpack.config.js
module.exports = {
  mode:"development",              // 开发模式
  entry:path.resolve(__dirname,"./src/index.js"),// 入口文件
  output:{
    filename:"output.js",  // 出口文件名称
    path:path.resolve(__dirname,"./dist") // 出口文件目录
  }
}

```
此时重新打包将会生成`dist/output.js`文件。

> 在用`vue-cli`脚手架生成的项目中，文件名后面都有一串随机字符串，这个是怎么生成的呢？简单！

```JavaScript
module.exports = {
    // 省略其他配置
    output: {
      filename: '[name].[hash:8].js',      // 打包后的文件名称
      path: path.resolve(__dirname,'./dist')  // 打包后的目录
    }
}
```

### 配置html模板

打包生成的`js`文件总不可能自己手动复制到`html`文件里面吧，所以需要`webpack`打包的时候自动将依赖文件引入到`html`文件

使用`html-webpack-plugin`插件，下载插件

`npm i -D html-webpack-plugin`

新建`src/inedx.html`文件。然后配置插件

```JavaScript
module.exports={
  // 省略其他配置
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/inedx.html')
    })
  ]
}
```

此时打包后`dist/index.html`已经包含了引入依赖文件代码

### 配置打包前清除上次打包的内容

使用插件`clean-webpack-plugin`,下载

`npm i -D clean-webpack-plugin`;

```JavaScript
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports={
  // 省略其他配置
  plugins:[
    new CleanWebpackPlugin()
  ]
}
```

### 引入css，配置解析css

首先需要下载跟`css`相关的`loader`：

`npm i -D style-loader css-loader`

```JavaScript
module.exports = {
  rules:[
    {
      test:/\.css$/,
      use:['style-loader','css-loader'] // 从右向左解析
    }
  ]
}
```
这个时候在`src/index.js`文件引入`css`文件：

```JavaScript
// src/index.js
import './demo.css';
```

打包后将在`index.html`生成内部样式。

如果我们使用`sass`来构建样式，则需要多下载两个loader：

`npm i -D sass-loader node-sass`

```JavaScript
// 省略其他配置
module.exports = {
  rules:[
    {
      test:/\.css$/,
      use:['style-loader','css-loader'] // 从右向左解析
    },
    {
      test:/\.css$/,
      use:['style-loader','css-loader','sass-loader'] // 从右向左解析
    }
  ]
}
```

### 自动给css添加前缀

下载`postcss-loader`和`autoprefix`：

`npm i -D postcss-loader autoprefixer`

```JavaScript
// 省略其他配置
module.exports = {
  rules:[
    {
      test:/\.css$/,
      use:['style-loader','css-loader','postcss-loader'] // 从右向左解析
    },
    {
      test:/\.css$/,
      use:['style-loader','css-loader','postcss-loader','sass-loader'] // 从右向左解析
    }
  ]
}
```
接下来，我们还需要引入`autoprefixer`使其生效,这里有两种方式

1. 在根目录新建`postcss.config.js`文件

```JavaScript
module.exports = {
    plugins: [require('autoprefixer')]  // 引用该插件即可了
}
```

2. 直接在使用`postcss-loader`的时候配置

```JavaScript
// 省略其他配置
module.exports = {
  rules:[
    {
      test:/\.css$/,
      use:['style-loader','css-loader',{
        loader:'postcss-loader',
        options:{
          plugins: [require('autoprefixer')]
        }
      }] // 从右向左解析
    },
    {
      test:/\.css$/,
      use:['style-loader','css-loader',{
        loader:'postcss-loader',
        options:{
          plugins: [require('autoprefixer')]
        }
      },'sass-loader'] // 从右向左解析
    }
  ]
}
```

### 拆分为css文件

走到上一步，样式都是通过`style`标签添加到`html`文件中。但是随着样式慢慢增多，难免显得混乱，所以需要我们将`css`打包为文件，并通过外联的形式引入到`html`文件中。

`npm i -D mini-css-extract-plugin`

配置如下：

```JavaScript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // 省略其他配置
  rules:[
    {
      test:/\.css$/,
      use:[MiniCssExtractPlugin.loader,'css-loader',{
        loader:'postcss-loader',
        options:{
          plugins: [require('autoprefixer')]
        }
      }] // 从右向左解析
    },
    {
      test:/\.css$/,
      use:[MiniCssExtractPlugin.loader,'css-loader',{
        loader:'postcss-loader',
        options:{
          plugins: [require('autoprefixer')]
        }
      },'sass-loader'] // 从右向左解析
    }
  ],
  plugins:[
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ]
}
```

未完待续。。。



