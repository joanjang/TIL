# Generator

---

제너레이터 함수는 <sup>[1]</sup>이터러블을 생성하는 함수이다. 독특한 문법 구조를 통해 쉽게 이터러블을 구현할 수 있다.

<div class="footnote">
  <sup>[1]</sup> 반복 가능한 객체
</div>

## 정의 및 형식

제너레이터는 일반 함수와 다르게 코드 블록을 한 번에 실행하지 않고 `키워드 yeild`를 기준으로 `일시 중지했다가 재시작`하는 함수이다. function 뒤에 애스터리스크(\*)를 붙이고, 호출 시 아래와 같은 형식의 데이터가 리턴된다.

```js
function* generator() {
  yield "첫번째 호출";
  yield "두번째 호출";
}

const obj = generator();

console.log(obj.next()); // {value: '첫번째 호출', done: false}
console.log(obj.next()); // {value: '두번째 호출', done: false}
console.log(obj.next()); // {value: undefined, done: true}
```

```
{
  value: yield(또는 return) 키워드 우측 값 || undefined,
  done: 모두 동작했는지의 여부
}
```

## method

제너레이터를 동작시키는 메소드는 아래와 같다.

```js
const obj = 제너레이터함수();

obj.next(); // 다음을 재개하는 메소드
obj.return(); // finally 블럭을 동작시키는 메소드
obj.throw(); // catch 블럭을 동작시키는 메소드
```

## 구현

제너레이터를 이용해 페이징 기능을 직접 구현해보았다. 아래의 소스는 버튼을 클릭할 때마다 3음절씩 메세지가 표시되는 소스의 일부분이다. 차후에 async/await를 사용한 제너레이터도 구현할 예정이다.

```javascript {9-10,16-24}
const SHOWING_MSG = "안녕하세요저는장지은입니다😝";
const moreItems = moreItems();

function setEvent() {
  $button.addEventListener("click", seeMoreItems);
}

function seeMoreItems() {
  // 화면에 items를 표시하는 함수 template
  template(moreItems.next().value);

  // 표시할 items가 없으면 버튼이 표시되지 않도록 지정
  if (moreItems.done) $button.classList.add("hide");
}

function* moreItems() {
  const items = SHOWING_MSG.match(/.{1,3}/g); // 3음절씩 split
  let len = items.length;

  for (const item of items) {
    if (!--len) return [...item];
    yield [...item];
  }
}
```

::: tip 위의 소스가 적용된 프로젝트
[https://je0489.github.io/js-study/generator](https://je0489.github.io/js-study/generator)
:::

### async/await 적용 <Badge text="예정" type="warning"/>

### Reference

- [모던 자바스크립트 Deep Dive - 제너레이터](https://poiemaweb.com/es6-generator)
- ingeeKim님의 [ES6 In Depth: 제너레이터 (이어서)](http://hacks.mozilla.or.kr/2016/02/es6-in-depth-generators-continued/)
