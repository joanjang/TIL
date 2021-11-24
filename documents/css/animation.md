# CSS Animation

---

CSS의 Animation 효과가 Web Front를 풍부하게 만드는 요소 중 하나라고 생각한다. CSS3에 추가된 속성 중 하나로, 애니메이션 효과를 적용할 수 있는 키워드로는 transform, transition, animation, @keyframes가 있다.

## transform

회전, 크기 조절, 기울이기, 이동 효과에 대한 속성이다. 혼합하여 사용이 가능하고 <sup>[1]</sup>모든 효과는 x축과 y축 중 하나를 지정하여 효과를 적용할 수 있다.

<div class="footnote">
  <sup>[1]</sup> 기울이기를 제외한 다른 효과는 z축에 대한 효과도 적용할 수 있다. (3d 가능)
</div>

### 회전

값의 단위는 deg(각도), turn(회전) 등을 사용하고 양수(+)는 시계 방향을, 음수(-)는 시계 반대 방향을 의미한다.

```css
selector {
  transform: rotate(90deg); /* = rotate(0.25turn) */
  transform: rotateX(720deg); /* or rotateY() */
}
```

### 크기

조절할 크기 비율을 기재한다.

```css
selector {
  transform: scale(1.5); /* = scale(1.5, 1.5) */
  transform: scaleX(3); /* or scaleY() */
}
```

### 기울이기

x축과 y축의 기울기를 지정할 수 있다. x축은 좌측에서 우측으로, y축은 상단에서 하단으로 기울이는 효과를 준다. 값이 음수인 경우, 방향은 그 반대가 된다.

```css
selector {
  transform: skew(-10deg); /* = skew( -10deg, -10deg) */
  transform: skewX(15deg); /* or skewY() */
}
```

::: details 양수, 음수에 따른 기울이기

1. x축
   - 양수: 우측으로 기울이기
   - 음수: 좌측으로 기울이기
2. y축
   - 양수: 하단으로 기울이기
   - 음수: 상단으로 기울이기

:::

### 이동

좌/우/상/하 위치를 조정한다.

```css
selector {
  transform: translate(1rem); /* = translate(1rem, 1rem) */
  transform: translateX(1rem); /* or translateY() */
}
```

## transition

transition과 관련된 속성들의 축약형 속성이다. transition-property 속성에 명시한 속성의 값이 변한 만큼 애니메이션을 실행시킨다.

```css
selector {
  /** (initial value)
  * 1. transition-property (all)
  * 2. transition-duration (0s)
  * 3. transition-timing-function (ease)
  * 4. transition-delay (0s)
 **/
  transition: 속성 | 애니메이션 지속 시간 | 타이밍 방식(시간당 속도) | 지연 시간;
}
```

모든 속성은 생략이 가능하다. 단, 시간을 나타내는 값은 순서에 주의해야 한다! 첫 번째 시간은 무조건 duration 값, 두 번째는 delay 값으로 인식한다. (시간 단위: s)

### timing-function

특정한 시점의 속도를 정하는 속성으로, 기본적으로 사용할 수 있는 키워드들은 아래의 예제와 같다.

기본 키워드 외로 **cubic-bezier(p0,p1,p2,p3)** 또는 **steps(count, term)** 으로 값을 지정할 수 있다. cubic-bezier는 [www.cubic-bezier.com](https://cubic-bezier.com/)을 참고하여 원하는 속도 값을 가져올 수 있다!

<p class="codepen" data-height="450" data-default-tab="result" data-slug-hash="RwZOGZj" data-editable="true" data-user="je0489" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/je0489/pen/RwZOGZj">
  CSS  Animation_transition-timing-function</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## animation

transition과 마찬가지로 animation과 관련된 속성들의 축약형 속성이다. 이 속성은 @keyframes와 아주 밀접한 관계가 있다.

```css
selector {
  /** (initial value)
  * 1. animation-name (none)
  * 2. animation-duration (0s)
  * 3. animation-timing-function (ease)
  * 4. animation-delay (0s)
  * 5. animation-iteration-count (1)
  * 6. animation-direction (normal)
  * 7. animation-fill-mode (none)
  * 8. animation-play-state (running)
 **/
  animation: 이름 | 재생 시간 | 타이밍 방식(시간당 속도) | 지연 시간 | 효과 반복
    횟수 | 효과 진행 방향 | 효과 실행 전과 종료 후 상태 | 실행 상태;
}
```

숫자나 특수문자로 시작한 애니메이션 이름은 유효하지 않는다.

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/je0489/embed/JjyQNMN?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/JjyQNMN">
  Untitled</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### direction

애니메이션 진행 방향을 정의하는 속성이다. 속성값은 아래와 같다.

- normal: 정방향으로 재생
- reverse: 역방향으로 재생
- alternate: 정방향과 역방향을 번갈아가며 애니메이션 재생시킴. (홀수는 정방향/짝수는 역방향)
- alternate-reverse: 역방향과 정방향을 번갈아가며 애니메이션 재생시킴. (홀수는 역방향/짝수는 정방향)

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS  Animation_animation-direction" src="https://codepen.io/je0489/embed/XWaLaGr?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/XWaLaGr">
  CSS  Animation_animation-direction</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### fill-mode

애니메이션이 시작되기 전이나 종료 후 적용될 애니메이션 상태를 정의하는 속성이다. 속성값은 아래와 같다.

- forwards: 애니메이션 시작전까지는 원래 위치에서 대기 > 요소가 애니메이션 끝나는 위치에서 멈춤
- backwards: 페이지가 로딩되면 곧장 애니메이션 시작 위치로 이동 > 끝나면 원래 위치로 돌아감
- both: 위 둘 효과를 모두 적용
- none: 애니메이션 시작전까지는 원래 위치에서 대기 > 끝나면 원래 위치로 돌아감

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS  Animation_animation-fill-mode" src="https://codepen.io/je0489/embed/RwZzZOg?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/RwZzZOg">
  CSS  Animation_animation-fill-mode</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### play-state

애니메이션 실행 상태를 정의하는 속성이다. 속성값으로는 running(재생)과 paused(일시정지)가 있다.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS  Animation_animation-play-state" src="https://codepen.io/je0489/embed/wvqLqbj?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/je0489/pen/wvqLqbj">
  CSS  Animation_animation-play-state</a> by jieun jang (<a href="https://codepen.io/je0489">@je0489</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## @keyframes

세밀한 애니메이션 효과를 위해 특정한 지점의 style을 지정하는 키워드로, animation-name 속성과 연결해서 사용한다. from, to 키워드를 사용하거나 0% ~ 100%로 원하는 구간을 지정하여 키 프레임을 생성할 수 있다.

```css
selector {
  animation: greeting 3s;
}
@keyframes greeting {
  30% {
  }
  60% {
  }
  /* 또는 from {} to {} */
}
```

### Reference

- MDN 공식 문서
  1. [transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
  2. [angle](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
  3. [transition](https://developer.mozilla.org/ko/docs/Web/CSS/transition)
  4. [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
  5. [animation](https://developer.mozilla.org/ko/docs/Web/CSS/animation)
  6. [@keyframes](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)
