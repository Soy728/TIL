# Actions

action은 lifecycle함수와 관련이 깊다. 특정 노드가 돔에 그려지고 사라질때마다 돔에 이벤트를 등록하고 제거하는 동작을 수행해야하는데, 이를 모두 고려하기 번거로우니 action을 통해 구현해 놓고 편하게 사용한다.

action 함수는 라이프사이클에 맞추어 크게 3가지 동작을 할 수 있는 것 같다.

1. 액션이 선언된 DOM이 마운트 될 때, addeventlistener를 돔에 등록해준다. **(onMount)**
2. 액션이 선언된 DOM이 마운트 된 후 액션의 파라미터가 변경될 때마다 액션을 취한다. **(update)**
3. 액션이 선언된 DOM이 제거되기 직전에 addeventlistener를 돔에서 제거한다. **(destroy)**

action은 **action object**를 반환하는데, object는 `update`, `destroy` 함수를 가질 수 있다.

```
export function longpress(node, duration) {
	let timer;

	const handleMousedown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(
				new CustomEvent('longpress')
			);
		}, duration);
	};

	const handleMouseup = () => {
		clearTimeout(timer)
	};


    // 1. 액션이 선언된 DOM이 마운트 될 때, addeventlistener를 돔에 등록해준다. (onMount)
	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);

	return {
        //2. 액션이 선언된 DOM이 마운트 된 후 액션의 파라미터가 변경될 때마다 액션을 취한다. (update)
		update(newDuration) {
            //newDuration 변수는 duration 인자를 뜻하는 것 같다. 외부에서 duration값이 계속 변하니까 그에따라 update가 될 것이고, pdate가될 떄마다 변수를 업데이트해주는 건가? 그럼 암묵적으로 update의 인자는 action함수의 두번째 인자인가?
			duration = newDuration;
		},
        //3. 액션이 선언된 DOM이 제거되기 직전에 addeventlistener를 돔에서 제거한다. (destroy)
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
		}
	};
}
```

actions를 사용해서 두 개의 이벤트 함수를 만들어보자.
<br />
<br />

1. Modal component의 **ClickOutside** 이벤트

```
// ClickOutside.ts

export function clickOutside(node: HTMLElement, callback: () => void): SvelteActionReturnType {
	const handleClick = (event: any) => {
		if (!node.contains(event.target)) {
			callback();
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
```

```
// Modal component

<div data-active={attr(active)}
	data-closing={attr(closing)}
	class="container"
	on:click|stopPropagation
	use:clickOutside={execClose}
	use:onKeyDown={{ callback: execClose, key: 'Escape' }} >
```

함수를 사용할 때, action 함수의 첫번째 인자인 `node`는 생략해주어도 된다. (선언은 꼭 해주어야함)
두 번째 인자로는 `callback 함수`를 주어, click이 일어났을 때 callback함수를 호출하도록 설계한다.
<br />

액션 이벤트를 container div에 달아주었다. container div는 모달 컴포넌트이다. 따라서 **node는 container div**인 것을 알 수 있다.
이떄 click을 하면 event가 일어나는데 event.target은 사용자가 클릭한 개체이다.

node.contains(event.target)은 container div안에 있는 개체를 클릭한것인지에 대한 boolean 값을 반환한다.

따라서 !node.contains(event.target)는 Modal 객체에 포함되지않는 객체(외부)를 클릭시 콜백함수 실행하도록 설계되어있다.

<br />

2. **onKeyDown** 이벤트

```
// onKeyDown.ts

export function onKeyDown(
	node: HTMLElement,
	arg: { callback: () => void; key: string }
): SvelteActionReturnType {
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === arg.key) {
			arg.callback();
		}
	};

	document.addEventListener('keydown', onKeyDown, true);

	return {
		destroy() {
			document.removeEventListener('keydown', onKeyDown, true);
		}
	};
}

```

위의 함수는 ‘특정 키’를 입력했을 때, callback 함수를 호출하는 action이다.

때에 따라 ‘특정 키’의 값이 달라지므로 ‘특정 키’에 대한 추가 인자가 필요하다.

arg: { callback: () => void; key: string } `object` 형태로 인자를 선언 한뒤,

use:onKeyDown={{ callback: execClose, key: 'Escape' }} 해당 키에 대한 value값을 인자로 넣어주면 된다.
