# Hooks

---

Hook은 리액트 16.8v에 추가된 기능으로, Hook을 통해 클래스가 아닌 함수형 프로그램을 만들 수 있다.

## useState()

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

> setter 함수에서 값이 아닌 함수형인 pram을 전달하면 내부에서 배치로 처리한다.
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

## useEffect()

useEffect는 리액트 클래스 lifecycle method인 componentDidMount, componentDidUpdate, componentWillUnmount의 조합이라고 할 수 있다. 첫 번째 param은 effect, 두 번째 param은 deps를 의미하고 deps 배열 값이 변경될 때마다 effect가 활성화된다.

#### 선언 방식

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

useEffect에서 반환되는 함수를 clean-up 함수라고 부르는데, 메모리 누수가 발생하지 않도록 경우에 따라 clean-up 작업을 해줘야 한다. 예를 들어, EventListener, setTimeout, 라이브러리 인스턴스 등을 제거하는 게 좋다.

## useRef()

document.getElementById()와 같은 특정 element에 접근하는 Hook이다. 프로퍼티 `current`를 통해 ref 객체의 DOM에 접근할 수 있다.

```js
const inputRef = useRef();
setTimeout(() => inputRef.current?.focus(), 3000);
return <input ref={inputRef} placeholder="I'm jieun" />;
```

## React Router Hook

### useHistory()

### useLocation()

### useParams()

### useRouteMatch()

### Reference

[React 공식 문서 - Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#gatsby-focus-wrapper)  
[Understanding ReactJS — setState](https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b)  
nomadcoder의 [실전형 리액트 Hooks 10개](https://nomadcoders.co/react-hooks-introduction)
