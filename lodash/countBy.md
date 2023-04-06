# CountBy

```

// Requiring the lodash library
const _ = require("lodash");

// Original array

var obj1 = ([6.1, 4.2, 6.3, 5, 7.9, 5.3, 5.1, 7.3 ]);

// Use of _.countBy() method
let y = _.countBy(obj1, Math.floor);


// Printing the output
console.log(y);

// { '4': 1, '5': 3, '6': 2, '7':2 }
```

```

// Requiring the lodash library
const _ = require("lodash");

// Original array

var obj1 = (['one', 'two', 'three', 'five', 'eleven', 'twelve'] );

// Use of _.countBy()
// method

// The `_.property` iteratee shorthand.
let y = _.countBy(obj1, 'length');

// Printing the output
console.log(y);

//{ '3': 2, '4': 1, '5': 1, '6':2 }
```

- Object형 Array에서 특정 Key에 따라 Object가 몇 개인지 세기

```
	$: topChains = _(infos)
		.countBy((d) => d.chain)
		.value();

  //[a:3, b:5, c:10];
```

- 개수를 센 다음 개수를 기준으로 sorting 하기
  lodash의 sortBy나 orderBy는 특정 key를 기준으로 정렬된다.
  따라서 countBy만 한 결과값으로는 sort를 하기 힘드니, map으로 형태를 바꿔준다.

```

	$: topChains = _(infos)
		.countBy((d) => d.chain)
		.map((count, chain) => ({
			chain: chain.toUpperCase(),
			count
		}))
		.orderBy((d) => d.count, 'desc')
		.value();

```
