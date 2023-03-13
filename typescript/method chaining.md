# Mehod Chaining

class에서 method chaining 구현하기

```
export abstract class ModalBase<T, K = T> {
	public readonly openStatus: Writable<boolean> = writable(false);
	public data: Writable<K> = writable();
	protected converter: (data: T) => K = (data) => data as unknown as K;

	protected get _data() {
		return get(this.data);
	}

	public open() {
		this.openStatus.set(true);
		return this;
	}

	public close() {
		this.openStatus.set(false);
		return this;
	}

	public set(data: T) {
		this.data.set(_.cloneDeep(this.converter(data)));
		return this;
	}
	public update(data: Partial<K>) {
		this.data.update((v) => _.assign(v, data));
		return this;
	}
}

```

데이터를 set하고 모달을 open 하고 싶을때, 함수가 this를 return하면 메서드 체이닝 형식으로 함수를 사용할 수 있다.

```
<ExplorerProposalValidatorQuotaListItem
		votes={votes[0].votes}
		harmonyName={votes[0].harmonyName}
		{chain}
		name={votes[0].name}
		titleIcon={votes[0].icon}
		onClick={() => {
		Modal.ProposalsValidatorQuota.set({...}).open();
	}}
/>
```

this를 console로 찍어보면, this는 클래스를 가르키고 있다.

```
ProposalsValidatorQuota{
  openStatus:{...},
  data:{...},
  converter:{...},
}
```

따라서 해당 클래스의 함수에 메서드 체이닝으로 접근 할 수 있는 것이다.
