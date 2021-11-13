# VuePress 시작하기

<hr>

TIL(Today I Learned)를 제작하며 VuePress에 대해 학습한 것을 첫 기록으로 남긴다.

## intro

VuePress 학습 정리에 앞서 이를 구축하게 된 이유는 TIL 문서, 단 하나였다.

개발 욕심이 많아졌을 당시 다양한 형태의 기술 블로그를 쉽게 접할 수 있었다. 나도 그런 멋진 블로그를 제작하고 싶었지만, 거창하고 뭔가 부담스러웠다. (?)

그러던 중 한재엽님의 [나는 어떻게 개발 공부를 했나, 2편]를 읽으며 <sup>[1]</sup> 잘못된 정보를 포스팅할까 지레 겁먹지 말라는 글을 보고 큰 용기를 얻었고 그 후로, 직접 구축할 기술 블로그를 본격적으로 찾아보게 됐다.

Github page를 이용해 블로그를 호스팅하고 싶어서 <strong>Static Site Generator(SSG)</strong> 위주로 알아보았다. SSG 중 비교적 `설치가 간단`하고 `레이아웃이 간단 + 직관적인` 프레임워크를 고르는데 생각보다 많은 시간이 걸렸다.

[나는 어떻게 개발 공부를 했나, 2편]: https://jbee.io/essay/how_do_i_study_2/#2-daily-commit-or-today-i-learned

<div class="footnote"><sup>[1]</sup> 물론 오류를 최소화하는게 우선이고, 댓글 기능을 추가하여 피드백을 받을 예정이다.</div>

## Static Site Generator

Static Site Generator(SSG)는 정적 사이트를 만들어주는 툴이고 [Jamstack Sites]를 참고하여 아래의 후보 중 고민했다.

- Jekyll: `Ruby 기반` 다양한 테마가 지원되나 심플하면서 직관적인 테마가 없음. custom 하기엔 Ruby 언어를 경험해 본 적이 없음.
- Hugo: `Go 기반` 빌드가 제일 빠르고 테마가 다양하나 Jekyll와 동일한 이유임.
- VuePress: `Vue 기반` 기본적으로 제공하는 UI에서 필요한 부분을 custom 하여 나만의 블로그를 만들 수 있음. 현재 UI도 딱 깔끔함 💚
- Notion: jamstack엔 없지만, 마크다운 기반으로 레이아웃이 심플하나.. 개인 블로그로 관리하기엔 한계가 있을 것 같음.

따라서, **VuePress**로 결정!

> (+) SSG 조사하다가 본 Gitbook의 우측 사이드바 custom theme 구현이 가능하다면 추가하기로!!

[jamstack sites]: https://jamstack.org/generators/

## VuePress 시작하기

### 1. 설치

공식 문서는 `create-vuepress-site`를 통해 기본 vuepress site 구조를 설치했지만, 필자는 빈 폴더에서 필요한 파일을 생성하는 방식으로 진행했다.

```sh
#1. 폴더 생성
mkdir TIL && code TIL

#2. package.json 및 VuePress 설치
npm init
npm i -D vuepress

#3. 폴더 생성
mkdir documents && echo '# Hello VuePress' > documents/README.md
```

### 2. 실행

```json
// package.json의 scripts 수정
{
  "scripts": {
    "docs:dev": "vuepress dev documents",
    "docs:build": "vuepress build documents"
  }
}
```

```sh
# VuePress 실행
npm run docs:dev
```

package.json의 scripts를 수정한 후 VuePress가 실행이 되면 <http://localhost:8080> 에 `Hello VuePress`가 표시된다.

### 3. 설정

설치 완료 후 아래와 같은 구조로 디레토리 및 파일을 생성했다. [공식 문서 (디렉토리 구조)]을 참고하여 필요한 파일을 생성하면 된다.

```{3-8}
// .vuepress
.TIL
├── documents
│   ├── .vuepress (Optional)
│   │    ├── public (Optional)
│   │    ├── styles (Optional)  /* 일부 custom을 위해 추가 */
│   │    │   ├── index.styl
│   │    │   └── palette.styl
│   │    ├── config.js (Optional)
│   ├── README.md
└── package.json
```

```javascript
// .vuepress/config.js
module.exports = {
  title: "Today Jieun Learned",
  description: "TIL by vuepress",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [{ text: "HOME", link: "/" }],
    sidebar: "auto",
    sidebarDepth: 3,
  },
};
```

- `title`: 사이트의 Title 명
- `description`: 사이트의 Desciption. HTML의 \<meta\> 로 랜더링된다.
- `head`: HTML의 \<head\> 내에서 사용되는 태그 기재. 필자는 로고를 넣었고 파일 위치는 **.vuepress/public 폴더**에 위치해야 한다.
- `themeConfig`: 기본 테마와 관련된 옵션이며 Navbar, Search Box 등 관리할 수 있다.
  - `nav`: Navbar 추가 옵션이며 dropdown 기능이 있는 nav도 있다. 자세한건 [공식 문서 Nav] 참고
  - `sidebar`: 'auto' 값 지정시 **documents/README.md**내에 정의한 Header 태그 기준으로 sidebar가 표시된다.
  - `sidebarDepth`: 사이드바에 표시되는 Header depth를 설정할 수 있다. (기본값: 2)

> 그 외에 필요한 config는 [공식 문서 Basic Config]를 참고하도록 한다.

[공식 문서 (디렉토리 구조)]: https://vuepress.vuejs.org/guide/directory-structure.html
[공식 문서 nav]: https://vuepress.vuejs.org/theme/default-theme-config.html#navbar-links
[공식 문서 basic config]: https://vuepress.vuejs.org/config/#basic-config

### Reference

- [Vuepress 공식 문서](https://vuepress.vuejs.org/guide/getting-started.html#prerequisites)
