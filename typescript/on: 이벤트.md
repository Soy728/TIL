# On: 이벤트명 = {이벤트 함수}

```
<script>
	let m = { x: 0, y: 0 };

	function handleMousemove(event){
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:mousemove={handleMousemove}>
	x좌표 : { m.x } <br>
	y좌표 : { m.y }
</div>

<style>
	div{ width: 100%; height: 100%; }
</style>
```

<br/>

- 화살표 함수

```
<script>
	let m = { x: 0, y: 0 };
</script>

<div on:mousemove={e => m = { x: e.clientX, y: e.clientY }}>
	x좌표 : { m.x } <br>
	y좌표 : { m.y }
</div>

<style>
	div{ width: 100%; height: 100%; }
</style>
```

- 함수의 매개변수 사용
  매개변수가 있는 함수를 on:click 이벤트에 사용하려면 꼭 화살표 함수를 사용해야한다.

```
//매개변수가 없는 경우
on:click = {함수명}

//매개변수가 있는 경우
on:click = {() => 함수명(매개변수)}
```

<br />
- Event Modifiers
  svelte는 이벤트를 제어할때 조건을 붙이는 수식어를 함께 사용 할 수 있다.

```
// Event Modifiers 기본 형태
on: 이벤트명 | 수식어 = {}

//once: 이벤트를 한번만 발생시키는 수식어
on: 이벤트명 | once = {}
```
