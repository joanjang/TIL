# 모듈 번들러 Webpack

Webpack은 `모든 브라우저가 이해할 수 있는 형태로 변환`시켜주는 Module bundler이다. 압축/변경/최소화하여 하나의 output을 만들어낸다.

---

## install

webpack과 webpack-cli를 설치한다. webpack-cli는 콘솔에서 webpack을 실행할 수 있게 도와주는 커맨드 도구이다.

```md
npm i webpack webpack-cli -D
```

## config

웹팩이 실행될 때마다 참조하는 설정 파일을 생성해야 한다. 공식으로 지정한 <sup>[1]</sup>기본 파일명은 `webpack.config.js`이다. import 또는 export와 같은 최신 키워드를 사용하면 오류가 발생한다. 따라서, 보다 예전 문법을 사용해야 한다. 필수로 기재해야 하는 속성은 아래와 같다.

- entry: 변경 대상 소스 파일 (type = string | [string] | { entryChunkName: string })
- output: 변환된 결과물
  - filename: 파일명
  - path: 결과물을 위치할 **절대** 경로. path와 \_\_dirname으로 절대 경로를 얻을 수 있음
  - clean: **true** 로 지정하는 경우 old output은 지워지고 new output이 생성됨

```js
const path = require("path");
// 1. type: string
module.exports = {
  entry: "src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist", "js"), // (=) ./dist/js
  },
};

// 2. type: object
module.exports = {
  entry: {
    index: "src/index.js",
    setting: "src/setting.js",
  }
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

```json
// package.json
{
  "script": {
    //...
    "dist": "webpack"
  }
}
```

<div class="footnote">
    <sup>[1]</sup> 다른 설정 파일을 사용하고 싶으면, package.json에서 <code>webpack --config custom.config.js</code>
</div>

### rules

webpack은 loader를 통해 파일을 변환시킨다. module 속성의 rules 속성에서 변환 파일 대상과 loader를 지정한다. 복수 개의 loader 지정 시, 마지막에 작동될 loader부터 나열해야 한다. (loader가 뒤에서부터 작동함)

```js
module.exports = {
  // ..
  module: {
    rules: [
      {
        test: /\.scss$/, // 정규화 표현식으로 기재. (확장자가 .scss인 것)
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
```

### mode

개발 상태를 지정하며, 속성값으로는 development/production/none이 있다. config 파일 또는 packge.json에서 mode를 지정할 수 있다.

- 속성값
  1. development: (개발) 개발자가 소스를 보기 좋은 포맷으로 만든다.
  2. production: (배포) 소스를 압축해서 한 줄로 만든다.
  3. none: 미지정.

```js
module.exports = {
  // ..
  mode: "development",
};
```

또는

```json
// package.json
{
  "script": {
    //...
    "dist": "webpack mode=development"
  }
}
```

## plug-in

사이드 프로젝트 진행 시 참고할만한 플러그인을 정리한다. 플러그인은 output 바로 전에 수행된다. entry > loader > plug-in > output 순!

```js
const plugName = require("new-plugin");
module.exports = {
  // ..
  plugins: [
    new plugName({
      // 생성자 함수에 전달하는 옵션
    }),
  ],
};
```

### MiniCssExtractPlugin

css 별도의 파일로 추출하는 플러그인으로, "style-loader"는 css style이 적용된 js로 변환되는데 이를 별도의 css 파일로 추출하는 플러그인이다.

```md
npm i -D mini-css-extract-plugin
```

```js
{
  plugins: [
    new HtmlWebPackPlugin({
      filename: "styles.css",
    }),
  ];
}
```

### HtmlWebpackPlugin

/<script/>로 로드한 html 파일을 자동으로 생성해 주는 plugin. 설정의 따라 새로운 html 파일을 생성할 수도, 기존의 html에 번들된 파일을 <script />로 로드한 html 파일을 생성 할 수도 있다.

```md
npm i -D html-webpack-plugin
```

```js
{
  plugins: [
    new HtmlWebPackPlugin({
      template: "복사 대상 파일 경로",
      filename: "생성할 파일명",
    }),
  ];
}
```

### Reference

- [Webpack 공식 가이드 문서](https://webpack.js.org/concepts/)
- 노마드코더 [\[풀스택\] 유튜브 클론 코딩](https://nomadcoders.co/wetube)
