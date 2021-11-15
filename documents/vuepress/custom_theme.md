# Custom theme 설정하기

<hr>

기본으로 제공하는 UI 파일이 있기 때문에, 원하는 부분만 Custom 하면 될 것 같아서 이번 기회에 경험하고자 한다!

## 1. Default Theme Source 다운

VuePress 설치했을 때처럼 필요한 디렉토리와 파일을 생성해도 되지만 필자는 `vuepress eject` 명령어를 사용해 Default Theme Source Code를 내려받았다.

```json{6}
// package.json의 scripts에 추가
{
  "scripts": {
    "docs:dev": "vuepress dev documents",
    "docs:build": "vuepress build documents",
    "docs:eject": "vuepress eject documents"
  }
}
```

```sh
npm run docs:eject
```

지정한 폴더(/documents)에 기본 테마 소스가 다운받아진다. 변경할 예정이거나 서로 영향도가 있는 디렉토리와 파일만 아래와 같이 남겨놓았다.

```
.vuepress
├── public
├── styles
├── theme
│    ├── components
│    │   ├── Page.vue
│    │   ├── PageEdit.vue
│    │   ├── PageNav.vue
│    │   └── SidebarLink.vue
│    ├── styles
│    │   ├── index.styl
│    │   └── xxx.styl
│    ├── util
│    │   ├── index.js
│    └── index.js
```

## 2. Custom Theme

그래도 나름 커스텀 한 부분은 사소한 거라도 기록하려고 한다. <sup>[1]</sup>단, CSS를 통한 style custom 기록은 제외한다! 아래의 레이아웃을 커스텀 할 예정이고 틈틈이 작업하며 TIL 기록할 것이다.

- [x] 하단 Navbar 삭제  
       : 사용자 편의상 필요하지 않을 것 같아서 삭제.  
       이번 VuePress 설치 과정 글들을 제외하고는 서로 연관 없는 글을 작성할 것 같아서 해당 사이트의 의도를 생각했을 때 삭제하는 게 맞는 것 같고 외관상 Nav 없는게 더 마음에 듦 (추후에 다시 추가할 수 있음)
- [x] Sidebar에서 Reference 목록 제외  
       : Sidebar depth를 3으로 설정해놨는데 모든 Reference Header를 \<H3\>으로 지정할거라 사이드바에 목록으로 표시됨. 물론, `###` 대신 `<H3>`을 쓰면 화면에 표시는 안되지만 야매(?)같고.. 그리고 내가 실수할 수도 있으니까~!
- [ ] 우측 Sidebar 추가  
       : Gitbook에 포함된 기본 UI 레이아웃 중 하나로, 기록한 글이 많아졌을 때 Sidebar Depth 3와 함께 목록에 보인다면 난잡해보일 것 같아서 개인적으로 따로 구현해보고 싶은 레이아웃!  
       (Vue도 안써봤는데 과연 만들 수 있을지는 모르겠다. 그리고 과연 언제 만들 수 있을지)

> Check box는 GFM(GitHub Flavoured Markdown)이라 적용이 안된다고 한다... plug-in으로 해결 예정 ➲ 완료

<div class="footnote"><sup>[1]</sup> 너무 사소하고 디테일하기 때문에 다루지 않을 것</div>

### 2.1. 하단 Nav 삭제

`theme/components/PageNav.vue` 파일을 삭제한 후 아래 하이라이트로 표시된 **Page.vue**에 Nav 정의 구간을 삭제한다. Page.vue의 위치가 변경됐기 때문에 import하고 있는 <u>PageEdit.vue도 내용은 수정하진 않았지만 삭제하지 않고</u> 동일한 디렉토리에 넣어줘야한다. (이를 위에서 서로 영향도있는 파일이라고 표현함)

```javascript {6,14,17}
// theme/components/Page.vue
// ... 생략
    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />   /** [삭제] **/

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'   /** [삭제] **/

export default {
  components: { PageEdit, PageNav }, /** [변경] components: { PageEdit }, **/
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
// 생략 ...
```

### 2.2. Sidebar에서 Reference 목록 제외

이번 커스텀도 component를 건드려야한다. `theme/components/SidebarLink.vue` 내에서 sublist를 뿌려주는 부분을 찾아 수정했다. 여기도 마찬가지로 <u>util</u> 폴더의 위치가 영향에 끼치니 삭제하지 않고 남겨준다.

sublist 데이터가 넘어올 때 아래의 오브젝트 구조로 들어오는 것을 확인했고 `title 값이 'ref'로 시작`할 때 로직을 처리해주었다!

```json
{
  "level": 3,
  "title": "2.2. Sidebar에서 Reference 목록 제외",
  "slug": "_2-2-sidebar에서-reference-목록-제외"
}
```

```javascript {9-10}
// theme/components/SidebarLink.vue
// ... 생략
function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null;
  return h(
    "ul",
    { class: "sidebar-sub-headers" },
    children.map((c) => {
      // 데이터 처리 로직 추가
      if (c.title.toLowerCase().trim().startsWith("ref")) return null;
      const active = isActive(route, path + "#" + c.slug);
      return h("li", { class: "sidebar-sub-header" }, [
        renderLink(h, path + "#" + c.slug, c.title, active, c.level - 1),
        renderChildren(h, c.children, path, route, maxDepth, depth + 1),
      ]);
    })
  );
}
// 생략 ...
```

### 2.3. 우측 사이드바 <Badge text="예정" type="warning"/>

\-

### Reference

- [공식 문서 Theme](https://vuepress.vuejs.org/theme/)
