# Javascript의 this

---

당연하게도 java에서의 this와 같은 개념이라고 생각했는데 아닌 것 같다.. javascript에서 this는 뭘까

## this of java VS this of js

### java

자바에서는 this가 객체 자신에 대한 참조 변수를 의미했다.

```java{2,5}
public class fruit(){
    private String price;

    public Student(String price) {
        this.price = price; // 여기서 this는 위에 선언한 변수를 참조함
    }
}
```

### javascript

자바스크립트에서의 this는 함수를 호출하는 방법에 의해 결정된다. 호출한 주체가 this인 것 같다.

```js
const fruit = {
    name: "apple",
    func: function () {
      console.log(this);
    },
  },
  func1 = fruit.func;

fruit.func(); // 1
func1(); // 2
document.getElementById("btn").addEventListener("click", fruit.func); // 3

// 1의 주체: fruit 변수
// 2의 주체: window(global)
// 3의 주체: button
```

## this 고정시키는 법: bind()

`Function.prototype.bind`를 통해 호출 방법과 무관하게 this를 <u>영구</u>적으로 고정시킬 수 있다.

```js
const binding = func1.bind(fruit);
binding(); // 주체는 fruit 변수로 고정됨
```

## arrow function은 this가 없다?

처음엔 화살표 함수로 구현한 [위의 소스](#javascript)를 실행했는데, 동일한 결과가 나오지 않았다. 원인은 `scope` 였다. arrow function의 scope에는 this가 포함되지 않기 때문이다..!

```js
const fruit = {
  name: "apple",
  func: () => {
    console.log(this);
  },
};

fruit.func(); // 주체가 window(global)가 됨 → 스코프 체인
```

> (+) arguments도 포함되지 않음
>
> ```js
> const func1 = function () {
>     return arguments;
>   },
>   func2 = () => arguments;
>
> console.log(func1(1, 2, 3, 4));
> console.log(func2(1, 2, 3, 4));
> ```
>
> ![arguments_refError](../image/javascript/arrowfunc_arguments_error.png)

### Reference

- [Mozilla 공식 문서 - this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
