# $ app/stores

```
import { getStores, navigating, page, updated } from '$app/stores';
```

`$app/stores`는 store이기 때문에, subscribe를 해야한다. 더 간편한 방법은 자동 구독을 하도록 `$`를 붙인다.

```
<script>
   import { page } from '$app/stores';

   // manually (don't forget to unsubscribe in onDestroy to avoid memory leaks)
   page.subscribe(currentPage => console.log(currentPage));

   // easier
   console.log({ page: $page });
   console.log('page.params', $page.params);
</script>

```

- page
  page는 readable store이다. 하나의 파일(index.svelte)에서 여러 페이지를 구현하고 싶을때 파일명을 `[변수명]`으로 지정한다.

`$page.params.변수명`은 해당 `변수명`을 가진 페이지로 라우팅 된다.

`routes/변수1`,`routes/변수2` 페이지로 이동하여 해당 페이지를 보여주고 싶다면, 해당 페이지로 이동(goto)하고 페이지의 url이 바뀌면 해당 `$page.params.변수명`값을 가져와서 페이지를 수정한다.

페이지는 처음 로드 되었을 떄만 onMount되고, params의 값이 바뀌어 페이지가 변하여도 onMount되지 않는다.

이는 SPA(Single Page Application)방식으로, 웹 앱에 필요한 모든 정적 리소스를 처음에 한번 다운로드한다. 페이지 간 이동 시, 페이지 갱신에 필요한 데이터만을 JSON으로 전달받아 페이지를 갱신한다.
