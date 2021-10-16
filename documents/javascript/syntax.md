# Syntax

<hr>

헷갈리는 javascript 문법을 재정리해본다. 아래 문법은 보통 최신 문법이기 때문에 코딩시 `babel` 설치 반드시 잊지 말자!

## 1. Nullish coalescing operator - ??

값이 `null` 또는 `undefined` 인 경우 `??` 연산자를 통해 기본값을 지정한다.

```javascript
const printMsg = (text) => text ?? "Nothing to display 😝";
```

### Default parameter와 차이점

Default parameter는 `undefinded`인 경우에만 기본값이 지정된다. null도 결국 정의된 값이기 때문.

```javascript
const printMsg = (text = "Nothing to display 😝") => text;
```

## 2. Logical OR operator - ||

값이 `falsy`인 경우 `||` 연산자를 통해 기본값을 지정한다. 아래의 값을 falsy라고 한다.

    1. false, 0, -0
    2. NaN
    3. undefined, null
    4. "", '', ``

```javascript
// leftExpr == falsy일 때 rightExpr 실행
const resutl = getInintialState() || fetchFromserver();
```

### Reference

- Youtuber 드림코딩님의 [자바스크립트 프로처럼 쓰는 팁 ✨](https://vuepress.vuejs.org/theme/)
