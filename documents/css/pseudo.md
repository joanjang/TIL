# 의사 클래스와 의사 요소

---

의사 클래스와 의사 요소에서 헷갈리는 몇 가지만 정리해본다!

- 의사 클래스(pseudo class) - 선택된 대상에 상태별 style을 적용시키기 위한 것
- 의사 요소(pseudo element) - 선택된 대상의 특정 부분만 선택하기 위한 것

## 의사 클래스(psedo class)

선택된 대상에 상태별 style을 적용시키기 위한 것으로, [동적](#focus-focus-within) / [상태](#target) / [구조](#구조-의사-클래스) 의사 클랙스가 있다. (대소문자는 구분하지 않음)

```
선택자:의사클래스 {
  .. style ..
}
```

### :focus, :focus-within

본인 또는 자손이 focusing된 요소를 선택하는 동적 의사 클래스이다.

<iframe height="250" style="width: 100%;" scrolling="no" title="CSS Psedo-focus" src="https://codepen.io/je0489/embed/gOxqjWR?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/gOxqjWR">
  CSS Psedo-focus</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### :target

현재 활성화된 target 요소를 선택하는 상태 의사 클래스이다. 반드시 `ID와 함께` 써야한다!

<iframe height="270" style="width: 100%;" scrolling="no" title="CSS Psedo-enabled" src="https://codepen.io/je0489/embed/gOxqjJe?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/gOxqjJe">
  CSS Psedo-enabled</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### :in-range, :out-of-range

특정 범위 내의 값과 특정 범위를 벗어나는 값을 가지는 input 요소를 선택하는 상태 의사 클래스이다.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Psedo-range" src="https://codepen.io/je0489/embed/YzxBONe?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/YzxBONe">
  CSS Psedo-range</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 그 외 상태 의사 클래스

그 외로 아래와 같은 상태 의사 클래스가 존재한다.

|       의사 클래스       | 설명                                 |
| :---------------------: | :----------------------------------- |
|   :enabled, :disabled   | 사용할 수 있는/없는 input 요소 선택  |
| :read-only, :read-write | readonly 속성에 대한 input 요소 선택 |
|  :required, :optional   | required 속성에 대한 input 요소 선택 |
|    :valid, :invalid     | 유효한 값에 대한 input 요소 선택     |

### 구조 의사 클래스

- `:nth-last-child(num)`: 뒤에서 n번째에 위치하는 자식 요소 선택
- `:only-child`: 자식 요소를 단 하나만 가지는 요소 선택
- `:empty`: 자식 요소를 가지고 있지 않는 요소 선택. **자식뿐 아니라 text도 없어야함**
- `:root`: 최상위 요소. 즉, **html 태그**를 의미함!

<iframe height="410" style="width: 100%;" scrolling="no" title="CSS Psedo-structure" src="https://codepen.io/je0489/embed/Jjyxagv?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/Jjyxagv">
  CSS Psedo-structure</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: details xx-child와 xx-of-type의 차이
first-child와 first-of-type을 기준으로 설명하자면,

1. first-child는 자식 요소가 첫 번째로 위치하는 경우 style이 적용된다. (첫 번째가 아니면 적용되지 않음)
2. first-of-type은 첫 번째로 위치하는 자식 요소에 style이 적용된다.
   :::

## 의사 요소(psedo element)

선택된 대상의 특정 부분에 style을 적용시킨다. 의사 요소를 사용할 때는 콜론 2개를 사용한다!

```
선택자::의사요소 {
  .. style ..
}
```

### ::selection

사용자가 선택한 부분만 style이 적용된다.

<p class="codepen" data-height="230" data-default-tab="css,result" data-slug-hash="eYExPbj" data-editable="true" data-user="je0489" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/je0489/pen/eYExPbj">
  Untitled</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Reference

- [MDN 공식 문서](https://developer.mozilla.org/en-US/docs/Web/CSS)
- TCP SCHOOL
  1. [pseudo class](https://www.tcpschool.com/css/css_selector_pseudoClass)
  2. [pseudo element](https://www.tcpschool.com/css/css_selector_pseudoElement)
