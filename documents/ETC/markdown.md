# MarkDown 작성

---

custom theme가 적용된 markdown이 표시된다.

## 1. Header

# H1

<h2> H2 </h2>

<h3> H3 </h3>

#### H4

##### H5

###### H6

## 2. Code

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

## 3. Code Block + Highlight

<h3> text </h3>

```
Look! You can see my backticks.
```

<h3> java </h3>

```java
function test() {
  console.log("notice the blank line before this function?");
}
```

<h3> HTML </h3>

```html {3-5}
<template>
  <div id="global-layout">
    <header><h1>Header</h1></header>
    <component :is="layout" />
    <footer><h1>Footer</h1></footer>
  </div>
</template>
```

<h3> javascript </h3>

```javascript {2,3}
function matchwo(a,b) {
  if (a < b && a < 0) then {
    return 1;
  } else {
    return 0;
  }
}
```

<h3> css </h3>

```css{1-3}
h1 {
  color: red;
}

p {
  color: blue;
}
```

<h3> json </h3>

```json{2}
"devDependencies": {
  "vuepress": "^1.5.2",
}
```

<h3> ruby </h3>

```ruby{2}
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

## 4. HR

---

## 5. Custom Block

::: tip
Tip입니다용
:::

::: warning
워닝1!
:::

::: danger
삐용삐용 댄저댄저
:::

::: details
Today  
I  
Learned  
:::

## 6. Link

[Google](http://google.com/)  
I get 10 times more traffic from [Naver](http://naver.com/ "Nave").

## 7. Table

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |

## 8. Task lists

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

## 9. BlockQuote

> This is a blockquote.
>
> > This is the second paragraph in the blockquote.

## 10. Emphasis

_single asterisks_  
_single underscores_  
**double asterisks**  
**double underscores**  
~~cancelline~~  
\*this text is surrounded by literal asterisks\*

## 11. List

1. 첫번째
2. 세번째
3. 두번째

- 1단계
  - 2단계
    - 3단계
      - 4단계

### Reference

- [Daringfireball Markdown 공식 가이드](https://daringfireball.net/projects/markdown/syntax#em)
- [Github Markdown Spec](https://github.github.com/gfm/)
- [Github 공식 가이드](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting)
