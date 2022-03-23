(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{379:function(t,e,a){t.exports=a.p+"assets/img/error_2_cant-automatically-merge.81f25d78.png"},380:function(t,e,a){t.exports=a.p+"assets/img/error_2_ conflict.c2edca59.png"},414:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"오류-해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#오류-해결"}},[t._v("#")]),t._v(" 오류 해결")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_1-shallow-update-not-allowed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-shallow-update-not-allowed"}},[t._v("#")]),t._v(" 1. shallow update not allowed")]),t._v(" "),s("p",[t._v("레파지토리 clone 후 내 제파짓에 push할 때 아래와 같은 오류가 발생했다. 최신 커밋만 가져오려고 클론할 때 depth를 설정한 게 이유가 된 것 같다...")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[t._v(">")]),t._v(" git push -u origin master\n\nTo https://github.com/je0489/----.git\n! [remote rejected] master -> master (shallow update not allowed)\nerror: failed to push some refs to 'https://github.com/je0489/----.git'\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("오류 발생 전 Log")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" git clone --depth=1 [클론 대상 레파짓.git]\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" git init\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" git remote set-url origin https://github.com/je0489/----.git\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" git add "),s("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`*`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(' git commit -m "Chore: Initial project version ✨"\n')])])])]),t._v(" "),s("h3",{attrs:{id:"해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해결"}},[t._v("#")]),t._v(" 해결")]),t._v(" "),s("p",[t._v("얕은 클론한 프로젝트는 새로운 저장소로 push할 수 없기 때문에 이전 커밋을 가져오는 fetch 명령어를 사용했다. 이후 바로 확인해 보니 정상적으로 커밋 돼있었다!")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("git fetch --unshallow [클론 대상 레파짓.git]\n\n// 또는 아래처럼 해도 된다... 아마 될 거다!..\ngit remote add old [클론 대상 레파짓.git] && git fetch --unshallow old\n")])])]),s("h3",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://backlog.com/git-tutorial/kr/stepup/stepup3_2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("backlog 깃 튜토리얼 - Fetch"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/28983842/remote-rejected-shallow-update-not-allowed-after-changing-git-remote-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/28983842"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_2-can-t-automatically-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-can-t-automatically-merge"}},[t._v("#")]),t._v(" 2. Can't automatically merge")]),t._v(" "),s("p",[t._v("PR 시 github에서 아래와 같은 메세지가 표시됐다. 그 이유는 다른 브랜치와 merge한 파일과 현재 브랜치에서 변경한 파일이 충돌 났기 때문이다.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(379),alt:"error_in_github"}})]),t._v(" "),s("h3",{attrs:{id:"해결-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#해결-2"}},[t._v("#")]),t._v(" 해결")]),t._v(" "),s("p",[t._v("4번까지의 과정을 거치면 아래와 같이 충돌된 부분이 표시된다. 머지 작업을 완료한 후 5번을 수행하면 해결~")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" checkout master\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" git pull\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" checkout 충돌난 브랜치\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" git merge master\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("5.")]),t._v(" commit & push\n")])])]),s("img",{attrs:{src:a(380),alt:"merge",width:"600px"}}),t._v(" "),s("h3",{attrs:{id:"reference-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-2"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/31973318/github-cant-automatically-merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/31973318"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);