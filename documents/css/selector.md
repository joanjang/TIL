# 선택자

---

선택자(selector)는 `style을 적용할 대상을 선택하기 위한 것` 이다. 개념이 헷갈리는 몇 가지만 정리해본당

## 동위 선택자

동위 관계에 있는 대상 중 뒤에 존재하는 요소를 선택하는 선택자이다.

### 일반 동위 선택자: ~

대상 뒤에 존재하는 요소를 선택하는 선택자이다.

```css
div ~ p {
  background-color: skyblue;
}
```

<iframe height="330" style="width: 100%;" scrolling="no" title="CSS Selector_adjacent-sibling-selector" src="https://codepen.io/je0489/embed/YzxJMRK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/YzxJMRK">
  CSS Selector_adjacent-sibling-selector</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 인접 동위 선택자: +

대상 `바로 뒤에` 존재하는 요소를 선택하는 선택자이다. 즉, 대상과 **인접**한 요소를 선택하는 선택자이다.

```css
div + p {
  background-color: skyblue;
}
```

<iframe height="340" style="width: 100%;" scrolling="no" title="CSS Selector_general-sibling-selector" src="https://codepen.io/je0489/embed/eYEPodG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/eYEPodG">
  CSS Selector_general-sibling-selector</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 속성 선택자

특정 속성이나 속성값을 가지고 있는 요소를 선택한다. 문법은 아래와 같다.

```
[속성이름]
[속성이름="속성값"]
```

### 문자열 속성 선택자

문자열 연산자를 이용해 속성값 내에 특정 문자열을 가지고 있는 요소를 선택할 수도 있다.

- [속성이름<strong>~=</strong>"값"]: 하나의 단어로 포함되는 요소 (띄어쓰기 기준으로 단어 인식) [> link](#속성이름-속성값)
- [속성이름<strong>|=</strong>"값"]: 특정 문자열로 시작하는 요소 (단어 완전체 미포함) [> link](#속성이름-속성값-2)
- [속성이름<strong>^=</strong>"값"]: 특정 문자열로 시작하는 요소 (단어 완전체 포함) [> link](#속성이름-속성값-3)
- [속성이름<strong>$=</strong>"값"]: 특정 문자열로 끝나는 요소
- [속성이름<strong>\*=</strong>"값"]: 특정 문자열을 포함하는 요소

#### [속성이름~="속성값"]

"속성값"이 하나의 단어로 포함되는 요소인 경우 style이 적용된다. 단어는 띄어쓰기를 기준으로 인식되며 [title~="food"]인 경우 `food apple`은 포함되지만 `food-banana`은 포함되지 않는다.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selector_selector-attribute" src="https://codepen.io/je0489/embed/bGrmyav?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/bGrmyav">
  CSS Selector_selector-attribute</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### [속성이름|="속성값"]

"속성값"으로 시작하는 단어의 요소인 경우 style이 적용된다. 하지만, "속성값"이 <u>단어 완전체라면 포함되지 않는다.</u> [title|="food"]인 경우 `food-banana`는 포함되지만 `food apple`은 포함되지 않는다.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selector_selector-attribute" src="https://codepen.io/je0489/embed/NWvOVXM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/NWvOVXM">
  CSS Selector_selector-attribute</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### [속성이름^="속성값"]

"속성값"으로 시작되는 단어의 요소인 경우 style이 적용된다. "속성값"이 단어 완전체여도 포함된다. [title^="food"]인 경우 `food apple`와 `food-banana`가 모두 포함된다.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selector_selector-attribute-3" src="https://codepen.io/je0489/embed/WNEaVNQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/WNEaVNQ">
  CSS Selector_selector-attribute-3</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Reference

- TCP SCHOOL
  1. [selector basic](https://www.tcpschool.com/css/css_selector_basic)
  2. [selector attribute](https://www.tcpschool.com/css/css_selector_attribute)
