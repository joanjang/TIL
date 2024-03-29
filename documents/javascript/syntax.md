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

## 3. Regular expressions

정규 표현식은 문자열에 나타는 `특정 문자 조합과 대응`시키기 위해 사용되는 `패턴`이다. 가독성이 떨어져서 이해, 사용하기 무척 어렵지만.. 코드를 간단하게는 만들 순 있다. 자주 사용하는 표현법 위주로 정리해보자!

### 3.1. 정규식 형식

플래그 사용은 필수 아닌 옵션

```
const reg = /(pattern)/(flags)
```

### 3.2. 플래그

플래그는 `단독` 사용과 `동시` 사용이 가능하다. ex) gi, gm 등

| Flag | Description                                                                                 |
| :--: | :------------------------------------------------------------------------------------------ |
|  g   | (**G**lobal) 모든 문자 검색                                                                 |
|  i   | (**I**gnore case) 대소문자 구분 없이 검색                                                   |
|  m   | (**M**ulti line) 여러 문자행에 대해 검색. 시작 혹은 끝 문자 탐색(^ and $)이 다중행에 적용됨 |

> 이외에 **S**ingleline, **U**nicode, Stick**y** 옵션이 있음

### 3.3. 패턴

[매칭](#매칭-패턴), [검색](#검색-패턴), [수량](#갯수-패턴-수량자)을 나타내는 패턴으로 나눠 정리했다.

#### 매칭 패턴

|  Pattern   | Description                                                 |
| :--------: | :---------------------------------------------------------- |
|   a-zA-Z   | 영어알파벳 ('-'으로 범위 지정)                              |
| ㄱ-ㅎ가-힣 | 한글 문자 ('-'으로 범위 지정)                               |
|    0-9     | 숫자 ('-'으로 범위 지정)                                    |
|     .      | 모든 문자열. 단, 개행 문자 (문자열의 첫번째 문자 포함) 제외 |
|     \d     | 숫자                                                        |
|     \D     | 숫자가 아닌 문자                                            |
|     \w     | 영어 알파벳, 숫자, 언더스코어(\_). [A-Za-z0-9_]와 같음      |
|     \W     | \w 가 아닌 문자. [^a-za-z0-9_]와 같음                       |
|     \s     | space 공백                                                  |
|     \S     | space 공백이 아닌 문자                                      |
| \특수기호  | 특수기호                                                    |

#### 검색 패턴

|  Pattern  | Description                                             |
| :-------: | :------------------------------------------------------ |
|  ^문자열  | 특정 문자열로 시작                                      |
|  문자열$  | 특정 문자열로 끝남                                      |
|    \|     | OR                                                      |
|    []     | 괄호 안의 문자들 중 하나                                |
|  [^문자]  | 괄호 안의 문자를 제외한 문자                            |
|    ()     | 그룹 검색 및 분류 (match에서 그룹별로 묶어줌)           |
| (?: 패턴) | <sup>[1]</sup>그룹 검색 (분류X)                         |
|    \b     | (**B**oundary) 단어의 경계. 즉, 단어의 처음/끝          |
|    \B     | 단어의 경계가 아닌 문자. 즉, 단어의 처음/끝이 아닌 문자 |

<div class="footnote"><sup>[1]</sup> ① <u>/(?:abc)+/</u>는 패턴 "abc"가 1회 이상 반복되는 문자열이 매칭됨</br>
&nbsp;&nbsp;&nbsp;&nbsp; ② <u>/abd+/</u>는 문자열 "ab" 뒤에 패턴 "c"가 1회 이상 반복되는 문자열이 매칭됨</div>

#### 갯수 패턴 - 수량자

| Pattern | Description                                                                                                                                                                                            |
| :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   \*    | 앞의 표현식이 0회 이상. {0,}와 같음                                                                                                                                                                    |
|    +    | 앞의 표현식이 1회 이상. {1,}과 같음                                                                                                                                                                    |
|    ?    | 앞의 표현식이 0회 또는 1회. {0, 1}과 같음<br/><br/> <sup>[1]</sup> \* 수량자 뒤에 기재 시 가장 적은 문자들을 매칭시킴<br/> <sup>[2]</sup> \* x(?=y), <sup>[3]</sup> x(?!y)와 같은 사전 검증에서도 쓰임 |
|   {n}   | 앞의 표현식이 n회 (단, n은 양의 정수)                                                                                                                                                                  |
|  {n,}   | 앞의 표현식이 최소 n회 이상 (단, n은 양의 정수)                                                                                                                                                        |
| {n, m}  | 앞의 표현식이 최소 n회 이상 최대 m회 이하 (단, n, m은 양의 정수, n <= m)                                                                                                                               |

<div class="footnote"><sup>[1]</sup> 수량자 *, +, {} 패턴 뒤에 ? 패턴 사용 시 가능한 가장 적은 문자열을 매칭시킴

```javascript
/\d+/.exec("345abc"); // \d(345)와 매칭됨
/\d+?/.exec("345abc"); // \d 중 첫번째 index(3)와 매칭됨
```

<sup>[2]</sup> x(?=y)는 'x' + 'y' 형식인 문자열을 매칭시킴<br/>
<sup>[3]</sup> x(?!y)는 'x'뒤에 'y'가 아닌 문자열을 매칭시킴

</div>

### 3.4. 메소드

#### String 메소드

|               Method                | Description                                            |   Return Type   |
| :---------------------------------: | :----------------------------------------------------- | :-------------: |
|         "문자열".match(reg)         | 매칭되는 문자열을 찾기 위한 메소드                     | Array \|\| null |
| "문자열".replace(reg, "대체문자열") | 매칭되는 문자열을 찾아 대체문자열로 변경하는 메소드    |     String      |
|         "문자열".split(reg)         | 매칭되는 문자열을 찾아 문자열을 기준으로 자르는 메소드 |      Array      |
|        "문자열".seaerch(reg)        | 매칭되는 문자열이 있는지 확인하는 메소드               | Number \|\| -1  |

#### RegExp 메소드

|       Method       | Description                                                                          |   Return Type   |
| :----------------: | :----------------------------------------------------------------------------------- | :-------------: |
| reg.test("문자열") | 매칭되는 문자열이 있는지 확인하는 메소드                                             |     Boolean     |
| reg.exec("문자열") | 매칭되는 문자열을 찾기 위한 메소드<br/>( match와 유사하지만 첫번째 매칭 결과만 반환) | Array \|\| null |

그 외 표현식은 [공식 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)를 확인한다.

### Reference

- Youtube 드림코딩님의 [자바스크립트 프로처럼 쓰는 팁 ✨](https://vuepress.vuejs.org/theme/)
- [MDN 문서 - 정규 표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)
- [정규표현식(Regular Expression) 기초/기본 쉽고 상세한 사용 방법 정리](https://curryyou.tistory.com/234)
