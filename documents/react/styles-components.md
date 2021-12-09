# styled-components

---

자바스크립트 코드에서 CSS를 작성하는 <sup>[1]</sup>CSS-in-JS의 종류이며, 간단히 말하자면 Element를 변수화하는 것이다. styled-component는 변수화된 컴포넌트를 통해 css를 관리할 수 있다.

<div class="footnote"> 
  <sup>[1]</sup> styled-components는 css-in-js 중 가장 인기 있는 라이브러리이다. <a href="#etc">> Link</a>
</div>

## 설치 및 형식

styled-components 라이브러리를 설치한 후 아래와 같은 형식으로 component별로 css를 작성한다! styled 키워드를 통해 element 또는 컴포넌트별로 css를 작성할 수 있다. 변수명은 파스칼 기법으로 선언하고 `(백틱) 안에 css 문법과 template literal 문법을 기반으로 작성한다.

```md
npm i styled-components
```

```js
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container />;
  )
}
```

## 1. props

컴포넌트의 property 값에 따라 각 다른 style을 적용할 수 있다. 아래 코드는 속성 bgColor에 지정된 값을 통해 색상이 다른 3개의 정사각형이 화면에 표시되는 소스이다.

```js{2,9-10}
const Box = styled.div`
  background-color: ${(props) => props.bgColor || "rebeccapurple"};
  width: 100px;
  height: 100px;
`;

render (
  <>
    <Box bgColor="teal" />
    <Box bgColor="tomato" />
    <Box />
  </>
);
```

## 2. extandsion

`styled(컴포넌트명)` 형식으로 작성하고 기존 컴포넌트의 속성에 새로운 속성을 오버라이딩하는 상속과 개념과 같다. 정의된 Box 속성에 radius 속성이 추가돼서 화면에 2개의 정사각형과 1개의 원형이 표시된다.

```js{2}
//..생략
const Circle = styled(Box)`
  border-radius: 50px;
`;

render(
  <>
    <Box bgColor="teal" />
    <Box bgColor="tomato" />
    <Circle bgColor="whitesmoke" />
  </>
);
```

## 3. as

styled를 통해 지정한 Element가 아닌 다른 태그로 변경을 원하는 경우, `as` polymorphic prop을 사용한다. Btn 컴포넌트는 button이지만, as 속성으로 a 태그가 지정된 button은 DOM에 a Element로 생성된다.

```js{8}
const But = styled.button`
  /* style */
`;

render(
  <>
    <Btn />
    <Btn as="a" herf="/" />
  </>
);
```

## 4. attribute

공통된 attribute를 가진 컴포넌트를 만들 수 있다. 아래의 소스 실행 시, 최소 문자 길이가 10이고 type이 password인 텍스트 박스가 10개인 input이 생성된다.

```js{1}
const Input = styled.input.attrs({ type: "password", minLenth: 10 })`
  /* style */
`;

render(
  <>
    {Array(10).fill.map((_, idx) => (
      <Input key={idx} />
    ))}
  </>
);
```

### 4.1. additional props

attrs를 통해 props를 추가적으로 선언할 수 있다.

```js{1-3}
const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

render(
  <div>
    <Input placeholder="A small text input" />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);
```

## 5. animation

keyframes 키워드를 사용하여 애니메이션 효과를 줄 수 있다. keyframes를 별도로 임포트해서 사용해야 한다.

```js{1-2,7}
import {keyframes} from "styled-components";
const moveToLeft = keyframes`
  /* 생략 */
`;

const Box = styled.div`
  animation: ${moveToLefts} 1s linear infinite;
`;
```

## 6. theme

공통된 style을 정의하기 위해 사용된다. ThemeProvider로 컴포넌트를 감싸고 theme 속성을 필수로 지정해야줘야 한다. 지정된 속성값이 ThemeProvider를 통해 하위 컴포넌트로 전달된다!

하위 컴포넌트에서는 `props.theme.property` 형식으로 사용된다.

```js{7,9}
const darkTheme = {
    textColor: "whitesmoke";
    backgroundColor: "#111";
}

render (
    <ThemeProvider theme={darkTheme}>
        <App />
    </ThemeProvider>
);
```

## etc

[npmTrands](https://www.npmtrends.com/emotion-vs-jss-vs-styled-components-vs-styled-jsx)에 따르면 1년간 다운로드 수가 많은 css-in-js 라이브러리는 아래와 같다.

<img src="../image/react/npmTrands.png" alt="npmTrands-css-in-js" style=" background: white; width: 100%">

### Reference

- [styled component 공식 문서](https://styled-components.com/docs/basics#getting-started)
- nomadcoder의 [React JS 마스터클래스 강의](https://nomadcoders.co/react-masterclass)
