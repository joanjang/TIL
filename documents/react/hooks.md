# Hooks

---

Hook은 리액트 16.8v에 추가된 기능으로, Hook을 통해 클래스가 아닌 함수형 프로그램을 만들 수 있다.

## React

### useState

동적인 상태 값을 관리한다. 첫 번째 param은 현재 상태, 두 번째 param은 상태 값을 변경하는 setter 함수다. 리액트는 setter 함수가 호출될 때 해당 컴포넌트를 재랜더링한다.

```js
const [count, setCount] = useState(0);
return (
  <>
    {count}
    <button onClick={() => setCount(count + 1)}>Click Me</button>
  </>
);
```

> setter 함수에서 값이 아닌 함수형인 pram을 전달하면 내부에서 배치로 처리된다.
>
> ```js
> setCount(count + 1);
> setCount(count + 1);
> // count = 1 (setter 함수가 비동기로 동작하기 때문에)
>
> setCount((prev) => prev + 1);
> setCount((prev) => prev + 1);
> // count = 2
> ```
>
> [Understanding ReactJS — setState](https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b) 문서를 참고하면 더 자세하게 확인할 수 있다!

### useEffect

useEffect는 리액트 클래스 lifecycle method인 componentDidMount, componentDidUpdate, componentWillUnmount의 조합이라고 할 수 있다. 첫 번째 param은 effect, 두 번째 param은 deps를 의미하고 deps 배열 값이 변경될 때마다 effect가 활성화된다.

#### 정의 형식

```js
useEffect(() => {
  /* componentDidMount, componentDidUpdate */
  return () => {
    /* componentWillUnmount */
  };
}, [deps]);
```

#### 예시

```js
const onClick = () => console.log("Clicked!!!");
const titleRef = useRef(null);
useEffect(() => {
  const { current } = titleRef;
  if (current) current.addEventListener("click", onClick);
  return () => {
    if (current) current.removeEventListener("click", onClick);
  };
});
return <h1 ref={titleRef}>Im Jieun</h1>;
```

useEffect에서 반환되는 함수를 clean-up 함수라고 부르는데, 경우에 따라 메모리 누수가 발생하지 않도록 clean-up 작업을 해줘야 한다. 예를 들어, EventListener, setTimeout, 라이브러리 인스턴스 등을 제거하는 게 좋다.

### useRef

document.getElementById()와 같은 특정 element에 접근하는 Hook이다. 프로퍼티 `current`를 통해 ref 객체의 DOM에 접근할 수 있다.

```js
const inputRef = useRef();
setTimeout(() => inputRef.current?.focus(), 3000);
return <input ref={inputRef} placeholder="I'm jieun" />;
```

## React Router

리액트 16.8v 이상인 환경에서만 아래의 <sup>[1]</sup>React Router의 Hooks를 사용할 수 있다.

<div class="footnote">
  <sup>[1]</sup> react-router-dom 설치 필수
</div>

### useHistory

페이지 이동과 관련된 Hook이다. useHistory를 통해 페이지 이동과 관련된 프로퍼티를 가지는 history 객체에 접근할 수 있다.

```js
const history = useHistory();
const handleClick = (id) => {
  // 1. push: history stack이 쌓임
  // 2. replace: history stack이 쌓이지 않음
  history.push({ pathname: "/", state: { id } });
  history.replace({ pathname: "/", state: { id } });

  // 3. go(n), goBack(), foForward(): 쌓인 history stack 기준으로 이동
  history.go(2);
  history.goBack(); // = go(-1)
  history.goForward(); // = go(1)

  // 4. block()
  history.block();
};
return <button onClick={() => handleClick(id)} />;
```

> router 6v에서는 useHistory에서 useNavigate로 네이밍이 변경됐다.
>
> ```js
> const navigate = useNavigate();
> navigate("/home"); // = history.go("/home");
> navigate("/home", { replace: true }); // = history.replace("/home");
> ```
>
> 그 외 useHistory의 property는 아래와 같다.
>
> 1. length: history stack의 사이즈
> 2. action: current action (PUSH/REPLACE/POP)
> 3. location: useLocation을 담고 있음

#### history.block()

페이지 이동이 동작하기 직전에 발생된다.

```js
history.block(({ location, retry }) => {
  if (window.confirm(`Are you sure you want to go to ${location.pathname}?`)) {
    unblock();
    retry(); // Retry the transition.
  }
});
```

### useLocation

location 객체를 리턴하는 hook이다. location 객체와 useLocation의 차이점은 **생명주기**이다. location 객체는 화면이 완전히 이동하기 전까지 유지되고 useLocation은 유지되지 않고 값이 바로 변경된다.

- pathname: url 도메인 다음의 path
- search: url의 query string - 식별자 ?
- hash: url의 hash fragment - 식별자 #
- state: 현재 location 내에 저장된 객체

```js
const location = useLocation();
/** history.push({ pathname: /search?user=jieun#id=12", state: { hasData: true })를 수행한 경우
{
  key: "u1sal3"
  pathname: "/search",
  search: "?user=jieun",
  hash: "#id=12",
  state: { 
    hasData: true
  }
} 
*/
```

### useRouteMatch

현재 url을 Route와 비교하는 hook이다. 입력한 path가 현재 location과 동일하지 않은 경우 `null`을 반환한다.

- path: url pattern
- url: 현재 url
- isExact: path의 매치 여부
- params: url에서 key/value로 구성된 object

```js
// match1 === match2
const match1 = useRouteMatch("/search/:id");
const match2 = useRouteMatch({
  path: "/search/:id",
  strict: true,
  sensitive: true,
});
/** 현재 pathname이 "/search/12" 인 경우
{
  path: "/search/:id"
  url: "/search/12"
  isExact: true
  params: {
    id: 12
  }
} 
*/
```

### useParams

url의 파라미터를 받는 hook이다.

```js
const params = useParams();
```

### Reference

- [React 공식 문서 - Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#gatsby-focus-wrapper)
- [React Router(5v) 공식 문서 - Hooks](https://v5.reactrouter.com/web/api/Hooks)
- [Understanding ReactJS — setState](https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b)
- nomadcoder의 [실전형 리액트 Hooks 10개](https://nomadcoders.co/react-hooks-introduction)
