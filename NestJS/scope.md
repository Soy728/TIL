# Scope

### Default(SINGLETON)

애플리케이션이 부트스트랩되면 모든 싱글톤 공급자가 인스턴스화되어 애플리케이션 전체에 공유된다.
디폴트로 사용하면 싱클톤 패턴이 적용된다.

### Request

요청이 들어올 때마다 새로운 인스턴스를 생성하고 처리가 완료된 후 사라진다?

### TRANSIENT

공유가 되지 않으며, 사용자가 새로운 전용 인스턴스를 사용해 생성한다.

```
@Injectable({ scope: Scope.TRANSIENT })

```
