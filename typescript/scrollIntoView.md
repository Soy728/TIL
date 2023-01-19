# ScrollIntoView

Element의 위치로 스크롤을 이동시키는 매서드

```
// 기본 JS
const element = document.getElementById("content");

// Svelte
<div bind:this = {element} />

element.scrollIntoView();
element.scrollIntoView(alignToTop); // Boolean parameter
element.scrollIntoView(scrollIntoViewOptions); // Object parameter
```

- behavior : 전환 에니메이션 정의 (auto || smooth)
- block : 수직 정렬 (start || center || end || nearest)

  - start: element의 젤 윗부분이 브라우저 맨 위로 오도록 정렬
  - center: element가 브라우저 중간으로 오도록 정렬
  - end: element의 젤 아랫부분이 브라우저 맨 밑으로 오도록 정렬
  - nearest: 가까운 곳

- inline : 수평 정렬 (start || center || end || nearest)

```

element.scrollIntoView(true) == eleItem.scrollIntoView({  block: 'start' })

element.scrollIntoView(false) == eleItem.scrollIntoView({  block: 'nearest' })
```

`element.scrollIntoView(false)`, `eleItem.scrollIntoView({  block: 'nearest' })` 가 드롭다운과 같은 컴포넌트에 적용했을 때 가장 자연스럽다.
start, center, end 로 적용하면 해당 element 뿐만 아니라 window의 스크롤도 함께 조절된다.
