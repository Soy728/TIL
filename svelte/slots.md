# Slots

### Slot이란?<br>

컴포넌트의 재사용성을 위한 서브 컨텐츠 바구니(?)
<br>
컴포넌트가 자식요소를 가질 수 있도록 기능을 제공.

<br>
button component를 만든다고 생각해보자. button은 text를 포함 할 수 도 있고, icon을 포함 할 수 도 있다. 컴포넌트의 재사용성을 열어두기 위해 사용하는것이 slot 이다.
<br>

```
//Button.svelte
<div class="btn">
	<slot></slot>
</div>
```

```
//App.svelte
<script>
	import Button from './Button.svelte';
</script>

<Button>
	<h2>Hello!</h2>
	<h1>icon</h1>
</Button>
```

<br>

### Default Slot

Slot에 자식요소가 없을 경우, 기본 값을 제공할 수 있다.

```
//Button.svelte
<div class="btn">
	<slot>
       <em>콘텐츠가 없습니다</em>
    </slot>
</div>
```

```
//App.svelte
<script>
	import Button from './Button.svelte';
</script>

<Button/> // '콘텐츠가 없습니다'
```

<br>

### Named Slot

<slot name =”name”></slot> 형식으로 이름을 지정해 사용할 수 있다.

```
//Button.svelte
<div class="btn">
	<slot name ="icon">
      </slot>
    <slot name ="text">
      </slot>
</div>
```

```
//App.svelte
<script>
	import Button from './Button.svelte';
</script>

<Button slot ="icon">icon</Button>
<Button slot ="text">text</Button>
```

<br>

### Checking for slot contents

slot을 사용하여 컴포넌트를 구성할 떄, slot의 css를 다루기 위해 div로 slot을 감싸는 형태로 사용한다.
(slot의 css를 꾸밀려면 slot을 감싼 div를 꾸미면 됨)
다만, 해당 slot이 사용되지 않고 비어있어도 slot을 감싼 부모 div는 렌더링 된다.
비어있는 slot은 렌더링 되지 않게 해야한다.(width, heigth값을 주지 않은 div라도 border가 그려짐)

#### $$slots

`$$slots`은 상위 컴포넌트에서 특정 슬롯의 이름이 사용되었는지에 대해 boolean 값을 리턴한다. 특정 슬롯을 사용하였다면 'true' 를, 없다면 'undefined'를 리턴한다.
따라서 `$$slots과 if문`을 사용한다면 필요치 않은 div에 대한 렌더링은 행해지지 않는다.

```
//Button.svelte

{#if $$slots['left-icon']}
		<div class="left-icon-container">
			<slot name="left-icon" />
		</div>
	{/if}

	<div class="text-container">
		{text}
	</div>

	{#if $$slots['right-icon']}
		<div class="right-icon-container">
			<slot name="right-icon" />
		</div>
	{/if}
```
