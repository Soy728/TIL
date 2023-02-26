# Get

object에서 원하는 값을 뽑아 낼때 유용한 method. 키 값이 없을 경우 undefined를 반환.</br>

```
// object에 직접 접근
const resChainParams = await APIMintscan.Blocks.getParams({ chainId: chainId });

const directObject = {
		blocks_per_year: resChainParams.params.minting_params.params.blocks_per_year
	};

// lodash get으로 object에 접근
const lodashGetObject = {
     blocks_per_year: _.get(arg, 'params.minting_params.params.blocks_per_year');
}

```

object에 직접 접근할 경우, 해당 키가 없으면 오류가 발생하지만 lodash get으로 object에 접근하고 키가 없는 경우 undefined를 반환해준다. 즉, object에 해당 프로퍼티 이름으로 값이 존재 하지 않을 때 예상치 못한 오류들을 막아주고 하위 depth로 갈 수 있으며 안전하게 undefined를 반환해준다. 또한 default값을 세팅할 수 있다.
