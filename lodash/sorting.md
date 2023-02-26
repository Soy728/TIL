# Sorting

1. SortBy
   <br />
   collection 값들을 원하는 필드 기준으로 정렬해준다.
   object에서 특정 object명을 기준으로 정렬하는 경우 SortBy를 사용한다.

```
// 오름차순 정렬
_(data).sortBy((d) => d.vali.rank).value();

//내림차순 정렬, reverse 내장함수 사용
_(data).sortBy((d) => d.vali.rank).reverse().value();

// 복수개의 컬럼을 오름차순 정렬
_(data).sortBy((d) => d.vali.rank, d.vali.time).value();

```

2. OrderBy
   <br />
   collection 값들을 원하는 필드 기준으로 정렬해준다.
   sortBy는 기본이 오름차순 정렬이며 내림차순 정렬은 지원하지 않아서 reverse 함수를 추가로 사용해야하지만, orderby는 내림차순 정렬도 가능하다.

````
// 오름차순 정렬
   _(data).orderBy((d) => d.vali.rank).value();
   ```

// 내림차순 정렬
_(data).orderBy((d) => d.vali.rank,'decs').value();

````

<br />

값이 null인 경우, orderby는 오름차순에서 가장 마지막에 정렬하고, 내림차순의 경우 맨 앞으로 정렬한다.
내림차순으로 정렬하였을 때, null인 값이 가장 앞으로 정렬되는 것은 자연스럽지 못하다.
내림차순으로 정렬했을때 값이 null인 경우를 맨마지막에 정렬하고 싶을 땐 아래와 같은 방법을 사용하면된다.

```
_(data).orderBy((d) => d.vote.timestamp || '', 'desc')
.value();
```
