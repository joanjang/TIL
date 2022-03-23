(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{381:function(t,a,s){t.exports=s.p+"assets/img/closure_console.73ae105a.png"},419:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"closure-클로저"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#closure-클로저"}},[t._v("#")]),t._v(" Closure 클로저")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("함수의 실행이 종료된 후에도 종료된 함수의 내부 함수를 통해 종료된 함수의 변수에 접근할 수 있는데, 이는 클로저가 생성됐기 때문에 가능한 일이다. 여기서 중요한 키포인트는 내부 함수가 "),n("sup",[t._v("[1]")]),n("code",[t._v("일급 객체")]),t._v("여야 한다는 것!")]),t._v(" "),n("div",{staticClass:"footnote"},[n("sup",[t._v("[1]")]),t._v(" 클로저는 함수를 일급 객체로 취급하는 프로그래밍 언어에서 사용되는 중요한 특성이다 !!\n")]),t._v(" "),n("h2",{attrs:{id:"closure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#closure"}},[t._v("#")]),t._v(" closure")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jieun"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("innerFunc")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello My name is... ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" innerFunc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 변수 me에 내부 함수가 반환되고\n * 함수 func()는 메모리에서 삭제된다.\n **/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" me "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("me")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hello My name is... jieun")]),t._v("\n")])])]),n("p",[t._v("함수 func()의 실행이 종료된 후에도 내부 함수를 통해 지역 변수(name)에 접근이 가능하다. 즉, 클로저를 통해 실행이 종료된 외부 함수의 스코프에 접근을 할 수 있다는 뜻이다.")]),t._v(" "),n("h2",{attrs:{id:"lexical-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lexical-environment"}},[t._v("#")]),t._v(" lexical environment")]),t._v(" "),n("p",[t._v("함수 종료 시, 함수 정보가 담긴 객체인 "),n("strong",[t._v("실행 컨텍스트")]),t._v("가 함수와 함께 종료된다. 그런데도 실행이 종료된 함수의 변수에 접근할 수 있는 이유는 함수 호출 시 실행 컨텍스트와 함께 "),n("code",[t._v("lexical environment가 생성")]),t._v("되기 때문이다.")]),t._v(" "),n("p",[t._v("Lexical Environment는 함수 내부의 정보와 상위 스코프의 정보가 정의되어 있다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jieun"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("innerFunc")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello My name is... ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" innerFunc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 함수 생성 시, 익명 함수의 lexcical environemnt에 함수 func()의 정보를 참조하고 있음")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("lexical environment는 클로저와 아주 밀접한 관계가 있다. MDN에서 클로저를 lexical environment의 조합이라고 정의하고 있다. 번역체라서 자연스럽진 않지만.. 이상하게도 이해가 된다. (lexical environment에 정의된 스코프로 묶여있는 객체라고 이해함)")]),t._v(" "),n("p",[t._v("콘솔 창에 "),n("strong",[t._v("console.dir(func())")]),t._v(" 를 입력하면 스코프 내에 클로저가 생성된 것을 확인할 수 있다.")]),t._v(" "),n("img",{attrs:{src:s(381),alt:"closure_console",width:"450px"}}),t._v(" "),n("h2",{attrs:{id:"클로저의-활용"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#클로저의-활용"}},[t._v("#")]),t._v(" 클로저의 활용")]),t._v(" "),n("p",[t._v("클로저는 함수가 생성될 때 본인뿐 아니라 상위 스코프의 정보까지 가지고 있어야 하므로 MDN에서는 클로저가 불필요하게 사용되는 것은 처리 속도와 메모리 소비 측면에서 부정적인 영향을 끼친다고 한다. 그럼 어떤 상황에서 클로저를 사용하는 게 좋을까?")]),t._v(" "),n("h3",{attrs:{id:"_1-전역-변수-사용-억제"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-전역-변수-사용-억제"}},[t._v("#")]),t._v(" 1. 전역 변수 사용 억제")]),t._v(" "),n("p",[t._v("전역 변수를 선언하지 않아도 클로저를 통해 "),n("code",[t._v("외부 함수의 변수를 전역 변수처럼 사용해서 값을 변경")]),t._v("할 수 있다.")]),t._v(" "),n("p",[t._v("아래는 버튼 클릭 횟수를 화면에 보여주는 소스이다. ① 외부 함수 counter()의 변수 count 값을 담고 있는 클로저가 변수 handleCounter에 저장되고 ② handleCounter()가 호출될 때마다 클로저에 저장된 count 값을 갱신한 후 리턴한다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parameter는 함수의 지역변수로 사용됨!")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 함수 내에서 let count = 0; 으로 정의하는 것과 같다.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("counter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handleCounter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("counter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ①")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleCounter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ②")]),t._v("\n")])])]),n("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"Javascript Closure_ recycle",src:"https://codepen.io/je0489/embed/MWvNvvG?default-tab=js%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),n("a",{attrs:{href:"https://codepen.io/je0489/pen/MWvNvvG"}},[t._v("\n  Javascript Closure_ recycle")]),t._v(" by jieun jang ("),n("a",{attrs:{href:"https://codepen.io/je0489"}},[t._v("@je0489")]),t._v(")\n  on "),n("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),n("h3",{attrs:{id:"_2-java의-프라이빗-메소드-정보-은닉"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-java의-프라이빗-메소드-정보-은닉"}},[t._v("#")]),t._v(" 2. java의 프라이빗 메소드 - 정보 은닉")]),t._v(" "),n("p",[t._v("자바스크립트는 별도의 private 키워드가 없지만, 클로저를 통해 java의 private method처럼 일부 접근을 제한할 수 있다. "),n("code",[t._v("클로저를 이용한 모듈 패턴")]),t._v("을 구현하여 함수가 아닌 객체로 감싸진 함수로 캡슐화해서 값을 리턴시킨다.")]),t._v(" "),n("p",[t._v("아래는 위 예제에 초기화 기능이 추가된 소스이다. 외부 함수 counter()의 내부 함수를 캡슐화하여 increase()와 reset() 함수를 정의했다. ① handleCounter.increase() 함수 호출 시 기존과 동일하게 count 값을 갱신한 후 리턴할 것이다. 그리고 ② handleCounter.reset()는 count 값을 0으로 변경한 후 리턴될 것이다. (count 값을 인자로 받아서 값을 변경할 수도 있음)")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("counter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("increase")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handleCounter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("counter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhandleCounter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("increase")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ①")]),t._v("\nhandleCounter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ②")]),t._v("\n")])])]),n("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"CSS Closure_global-variable",src:"https://codepen.io/je0489/embed/YzxmrGZ?default-tab=js%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),n("a",{attrs:{href:"https://codepen.io/je0489/pen/YzxmrGZ"}},[t._v("\n  CSS Closure_global-variable")]),t._v(" by jieun jang ("),n("a",{attrs:{href:"https://codepen.io/je0489"}},[t._v("@je0489")]),t._v(")\n  on "),n("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),n("blockquote",[n("p",[t._v("활용 예제들이.. MDN을 참고해서 직접 생각하고 적용한 예제라.. 적절한지는 모르겠지만"),n("br"),t._v("\n어떤 상황에서 쓰여야 되는지 알겠다.. 꾸준히 사용해 보고! 활용 예제가 적절하지 않은 것 같으면 변경해야겠다!")])]),t._v(" "),n("h3",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 공식 문서 - Closures"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("황준일님의 TIL "),n("a",{attrs:{href:"https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context",target:"_blank",rel:"noopener noreferrer"}},[t._v("자바스크립트 실행 컨텍스트"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Youtube 생활코딩님의 "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=bwwaSwf7vkE",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript - closure"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);