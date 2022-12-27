# Await Block

데이터를 받아오는 것과 같이 비동기 처리를 해야할 때는 script영역에서 try/catch 혹은 후속처리(then,catch)를 하고, html영역에서는 데이터를 성공적으로 받아오기 전까지는 pending 상태임을 보여주어야 한다.

- 기존 코드

```
<script>
let pending = true;

const foo = async() => {
    try{
        const response = await axios.get(URL);
        const data = await response.json();
        pendning = false

    } catch(err){
        throw Error
    }

</script>


<div class ='root'>
	{#if pending }
		pending ...
	{:else}
    ...datas
</div>
```

- await block

  위 코드는 svelte의 await block을 통해 구현 할 수 있다.
  promise 변수에 값이 들어올때까지 기다리고, 성공적으로 값이 들어오면 그 값을 ret 변수로 사용한다.
  에러가 발생하면 그 값을 error변수로 사용한다.

```
<script>
const promise = async() => {
    try{
        const response = await axios.get(URL);
        return data = await response.json();

    } catch(err){
       throw Error
    }
</script>


{#await promise}
	<p>...waiting</p>
{:then ret}
	<p>The response is {ret}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```

ret 같은 유의미한 데이터는 svelte 영역에서 가공이 가능하다.

```
<script>
const promise = async() => {
    try{
        const response = await axios.get(URL);
        return data = await response.json();

    } catch(err){
       throw Error
    }
</script>


{#await promise}
	<p>...waiting</p>
{:then ret}
    {#each _(ret)
            .filter((r)) => r.id > 50}
            .take(10)
            .value() as data}
            <div class = "data">data</div>
    {/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```
