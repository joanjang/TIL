# Class

---

자바스크립트는 프로토타입 기반의 객체지향 프로그래밍 언어로, 프로토타입 체인과 클로저 등으로 상속과 캡슐화를 구현할 수 있었다. <sup>[1]</sup> ES2015의 class 키워드는 기존보다 코드 설계면에서 깔끔하게 만들 수 있도록 도와준다.

<div class="footnote">
    <sup>[1]</sup> ECMASript의 6번째 에디션으로 ES6라고도 함.
</div>

## class 선언

class는 사실 함수이지만, 함수처럼 호이스팅이 되지 않고 <sup>[1]</sup>`let과 const 선언처럼 호이스팅된다!` 반드시 class 선언 후 함수를 선언해야 한다. class 선언 방법은 함수와 마찬가지로 class 선언과 class 표현식으로 구현할 수 있다. (클래식 표현식은 함수 표현식과 동일하게 변수 호이스팅으로 발생)

```js
// class는 함수
typeof class Student {}; // function
```

```js
// class 선언
class Student {}
const jieun = new Student();

// class 표현식
const jieun = class Student {}; // 익명 클래스로 선언해도 됨
```

<div class="footnote">
  <sup>[1]</sup> TDZ(시간상 사각지대)의 영향을 받아 선언 전까지 초기화되지 않는 상태를 유지함
</div>

## class 정의

```js
"use strict"; // 1. 엄격 모드
class Student {
  // 2. 생성자
  constructor(id, lastName, firstName) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // 3. getter/setter
  get fullName() {
    return this.makeFullName();
  }

  // 4. Method
  makeFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const me = new Student(1, "jang", "jieun");
me.fullName; // jieun jang
```

### 1. 염격 모드

javascript의 제한된 버전을 의미하며, 전체 스크립트 또는 일부 함수에 적용이 가능하다. 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대한 명확한 에러를 발생시킨다.

ex) 선언하지 않은 전역 변수, 중복된 파라미터 명, 예약된 키워드의 변수/함수 생성 등

### 2. 생성자 (constructor)

인스턴스를 생성하고 클래스 내부의 캡슐화된 변수(클래스 필드)를 초기화하기 위한 특수한 메소드이다.

> 클래스 필드란? 생성자 함수에서 this에 추가한 프로퍼티를 의미한다.  
> 2019년 5월, 클래스 필드와 관련된 새로운 표준안이 발표됐다. 이전에는 아래와 같이 class body에 클래스 필드를 선언하면 문법 오류가 발생했다. (브라우저와 node version에 따라 제한 있음)
>
> ```js
> class Student {
>   a = 0; // public field
>   #b = "1"; // private field
>   static c = 2; // static public field
>   static #d = "3"; // static private field
> }
> ```

### 3. getter/setter

getter와 setter는 객체가 가진 프로퍼티 값을 외부에서 읽거나 사용할 수 있도록 제공하는 메서드를 말하며 get/set 키워드를 사용한다. `prototype의 getter/setter`를 class 내에서 정의할 수 있다.

```js
class A {
  arr = [];
  get firstIndexValue() {
    return this.arr.length ? this.arr[0] : null;
  }

  set firstIndexValue(val) {
    this.arr = [val, ...this.arr];
  }
}

const a = new A();
a.firstIndexValue = 1; // setter
a.firstIndexValue; // getter
```

### 4. method

#### 4.1. prototype method

인스턴스로 호출하며 인스턴스의 프로퍼티를 참조할 수 있다.

#### 4.2. static method

클래스의 인스턴스가 아닌 클래스 이름으로 호출한다. 따라서, 정적 메소드 내 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다. 때문에 정정 메소드에서는 this 키워드를 사용할 수 없다. 주로 어플리케이션 전역에서 사용하는 유틸리티 함수를 생성할 때 사용된다.

```js
class Student {
  static staticCountry() {
    return "South of Korea";
  }
}

const me = new Student();
me.staticCountry(); // Uncaught TypeError: me.staticCountry is not a function
Student.staticCountry(); // South of Korea
```

> static method를 가지고 있는 부모 클래스를 상속하는 경우, 자식 클래스는 <u>prototype method</u>에서 super 키워드를 사용하여 부모 클래스의 static method에 접근할 수 없다.

### Reference

- MDN 공식 문서
  1. [classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
  2. [strict mode](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)
  3. [let - 시간상 사각지대(Temporal Dead Zone)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let#%EC%8B%9C%EA%B0%84%EC%83%81_%EC%82%AC%EA%B0%81%EC%A7%80%EB%8C%80)
- 서적 ⟪[모던 자바스크립트 Deep Dive](https://poiemaweb.com/es6-class)⟫
