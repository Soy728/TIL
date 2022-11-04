# Debounce와 Throttle

Debounce & Throttle: 이벤트 핸들러가 많은 연산을 수행하는 경우에 대해 제약을 걸어 제어할 수 있는 수준으로 이벤트를 발생시키는 것이 목적. 두 기능은 필요하지 않은 이벤트에 대해 서버요청을 하지 않으므로 서버에 부하를 줄이는데 효과적이다.

<br>

### Debounce

Debounce: 동일 이벤트가 반복적으로 시행되는 경우, 마지막 이벤트가 실행되고 나서 일정시간 동안 해당 이벤트가 다시 실행되지 않으면 콜백함수를 실행한다.
Debounce 는 아무리 많은 이벤트가 발생해도 모두 무시하고 특정 시간사이에 어떤 이벤트도 발생하지 않았을 때 딱 한번만 마지막 이벤트를 발생시키는 기법.

```
//javascript, debounce

var timer;
document.querySelector('#input').addEventListener('input', function(e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    console.log('여기에 ajax 요청', e.target.value);
  }, 200);
});
```

usage: 키보드 입력을 중지할 때까지 ajax이벤트를 발생하지 않을 때(자동완성기능)

<br>

### Throttle

Throttle: 동일 이벤트가 반복적으로 시행되는 경우 이벤트의 실제 반복 주기와 상관없이 임의로 설정한 일정 시간 간격(밀리세컨드)으로 콜백 함수의 실행 한다.
주기적으로 울리는 타이머라고 생각!

```
var timer;
document.querySelector('#input').addEventListener('input', function (e) {
  if (!timer) {
    timer = setTimeout(function() {
      timer = null;
      console.log('여기에 ajax 요청', e.target.value);
    }, 200);
  }
});
```

usage: 무한 스크롤

<br>

### lodas

Debounce와 Throttle는 lodash를 이용하면 쉽게 구현 할 수 있다.

```
_.debounce(콜백함수, 시간)
```

```
_.throttle(콜백함수, 시간)
```

- debounce

```
import {debounce} from 'lodash';

const onChange = () => {
	console.log("This is a onChange");
	debounceOnChange();
};

const debounceOnChange = debounce(() => {
  console.log("This is a debounce function");
}, 500);
```

<br>

- throttle

```
import {throttle} from 'lodash';

const onChange = () => {
	console.log("This is a onChange");
	throttleOnChange();
};

const throttleeOnChange = throttle(() => {
  console.log("This is a throttle function");
}, 500);
```
