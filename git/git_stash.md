# git stash

특정 브랜치에서 작업 하던 중, 작업을 완료하지 않은 상태에서 다른 브랜치로 checkout 해야하는 상황이 발생한다. 혹은 작업을 하던 도중에 원격에서 변경사항이 발생하고 이를 내 로컬에 반영해야 하는 상황이 발생 할 수도 있다. 이때 작업 내용을 임시로 저장해두는 것이 필요하다.
<br>

작업 내용을 임시의 저장소에 올려두고 마지막 commit 시점으로 돌아가는 명령어가 git stash 이다. stash 명령으로 저장해둔 작업은 나중에 다시 돌아와서 이전에 저장한 내용들을 불러올 수 있다.

<br>

git stash는 아래 두 가지 파일에만 적용된다.

- Modified 되었으며 Tracked 상태인 파일 (마지막 commit 이전부터 존재했고, 변경사항이 있는 파일)
- Staging Area에 있는 파일 (git add 명령을 실행한 파일)

즉, stash 명령을 사용하고 싶을 때 마지막 커밋 이후에 새로운 파일이 생겼다면 git add 명령을 통해 staging area에 올려놓아야 한다.

<br>

```
// 작업 내용을 stash에 임시 저장
git stash
```

git stash를 하고나면 working directory가 깨끗해진다.
<br>
<br>

```
//stash 목록 확인하기
git stash list
```

git stash는 스택 구조이기 때문에 가장 최근에 올려둔 작업이 제일 위에 있다.
<br>
<br>

```
// 이전에 임시 저장했던 작업을 불러올 때
git stash pop
```

git stash pop은 git stash apply + git stash drop 의 기능을 동시에 수행한다. 또한 스택구조이므로 가장 최근 작업에 대한 pop을 수행한다. 만약 가장 최근 작업이외의 stash를 적용하고 싶다면 git stash pop(apply, drop) [stash 이름]을 명령한다.
<br>
<br>

```
// 스테이징 상태까지 복원하기
git stash pop --index
```

git stash pop을 하는 경우, git add 한 스테이지 상태는 복원되지 않는다. --index 옵션을 붙이면 스테이징 상태까지 같이 복원된다.
