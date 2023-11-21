# Prototype

<br/>

객체들이 공통으로 사용하는 속성 값.
<br/>

프로토타입을 사용하지 않고 클래스 내부에서 함수를 정의해 사용하는 경우, 객체가 생성 될 때마다 같은 동작을 하는 중복적인 메소드가 메모리에 생긴다. 이는 성능 저하와 메모리 낭비이다.

```
function Person(name,age){
  this.name = name;
  this.age = age
}

let sohee = new Person('sohee',24);
let park = new Person('park', 20);

Person.prototype.multiple = function(){
  return this.age * 3
}
park.multiple = function(){
  return this.age * 100
}

console.log(sohee.multiple()) // 72
console.log(park.multiple()) // 2000
```

객체의 프로퍼티에 접근하면, 우선 그 객체에 프로퍼티가 있는지 확인한다. 만약 프로퍼티가 존재하지 않는다면 객체가 참조하고 있는 부모에게서 프로퍼티가 있는지 확인한다.
위 코드에서 sohee와 park의 부모는 Person이다.
우리는 Person의 프로토타입에 multiple이라는 함수를 선언해 두었기에, sohee.multiple()을 출력 했을때 prototype의 multiple 함수를 호출 하는 것을 알 수 있다.

<br/>

다만 객체의 프로토타입에 프로퍼티를 선언한다고해서 해당 객체의 실제 자료형안에 그 프로퍼디가 존재하는 것은 아니다. 객체의 프로토타입에 그 프로퍼티가 존재하는 것이다.
<br/>

위에서도 말 하였듯이, 객체에 함수 프로퍼티를 선언한다면 그 객체가 새로 생성 될때마다 multiple이라는 함수가 생성되고 메모리를 차지한다. 하지만 프로토타입에 함수 프로퍼티를 생성한다면, multiple이라는 함수프로퍼티는 한번만 생성될 것이다.
