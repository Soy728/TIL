# On: 이벤트명 = {이벤트 함수}

```
const handleOnClick = () => console.log('clicked');

 <button onClick = {handleonclick}>button</button>

 Button(handleonclick);
 function Button(onclick){
    onClick();
 }
```

함수를 직접 실행시키려면 `handleonclick()`로 실행시켜야 하지만 이벤트를 실행시키는, 즉 이벤트의 주체는 **버튼**이다. 실행은 버튼이 하니, 우리는 버튼을 클릭했을 때 발생하는 이벤트를 **등록**시켜 주어야 한다.
<br />
이벤트 등록은 `onClick = {handleonclick}`, `onClick = {() => {handleonclick()}}`의 형태로 한다.
<br />
실제 버튼이 클릭 되면, `handleonclick()`, `(()=>{ handleonclick() })()`이 실행된다.
<br />

콜백함수도 위와 동일하게 생각하고 사용하면 된다. 내가 콜백함수를 부르는게 아니고, 콜백함수를 감싼 함수가 콜백함수를 호출해야하므로 나는 콜백함수를 **등록**시켜 주어야 한다.

```
setTimeout(()=>{console.log('timeover'),3000});

function timer = () => {console.log('timeover'),3000}
setTimeout(timer , 3000});
```

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

<br />

- 함수의 매개변수 사용
  **매개변수**가 있는 함수를 on:click 이벤트에 사용하려면 꼭 **화살표 함수**를 사용해야한다.

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

```
