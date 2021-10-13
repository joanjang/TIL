# MarkDown 작성

---

custom theme가 적용된 markdown이 표시된다.

## 1. Header

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 2. Code

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

## 3. Code Block

### text

````
```
Look! You can see my backticks.
```
````

### java

```java
function test() {
  console.log("notice the blank line before this function?");
}
```

### javascript

```javascript
function matchwo(a,b) {
  if (a < b && a < 0) then {
    return 1;
  } else {
    return 0;
  }
}
```

### css

```css
h1 {
  color: red;
}

p {
  color: blue;
}
```

### ruby

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

## 4. HR

---

## 5. Link

[Google](http://google.com/)  
I get 10 times more traffic from [Naver](http://naver.com/ "Nave").

## 6. table

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |

## 7. Task lists

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

## 8. BlockQuote

> This is a blockquote.
>
> > This is the second paragraph in the blockquote.

## 9. Emphasis

_single asterisks_  
_single underscores_  
**double asterisks**  
**double underscores**  
~~cancelline~~  
\*this text is surrounded by literal asterisks\*

## 10. List

1. 첫번째
2. 세번째
3. 두번째

- 1단계
  - 2단계
    - 3단계
      - 4단계

### Reference

- [Daringfireball Markdown 공식 가이드 문서](https://daringfireball.net/projects/markdown/syntax#em)
- [Github Markdown Spec](https://github.github.com/gfm/)
- [Github 공식 가이드 문서](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting)
