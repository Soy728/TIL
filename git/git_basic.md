# Git Basic

**`git`**: 소스코드를 효과적으로 관리하기 위해 개발된 '분산형 버전 관리 시스템'.
<br>

- 소스코드를 버전별로 저장할 수 있다
- 소스코드가 변경된 이력을 쉽게 확인 할 수 있다
- 특정 시점에 저장된 버전으로 돌아 갈 수 있다.
- branch를 나누고 합치며 작업하므로 협업에 용이하다

**파일 상태**

---

- `Untracked`
  <br>추적되고 있지 않은 파일. 파일 생성후 add하지 않은 상태
- `Tracked`
  <br>파일이 git에 의해 변동사항이 추적되는 상태
  - Staged
    <br>파일이 수정 후 staging area로 올라가 있는 상태
  - Unmodified
    <br> 현재 파일이 최신 commit 파일과 비교했을 때 변경된 것이 없는 상태
  - Modified
    <br> 현재 파일이 최신 commit 파일과 비교했을 때 변경된 것이 있는 상태

**Git의 저장소**

---

![git 저장소와 명령어](https://confluence.curvc.com/download/attachments/51578247/image2020-4-22_5-47-3.png?version=1&modificationDate=1587502023476&api=v2)

- `Working directory(작업영역)`
  <br>
  실제 프로젝트의 디렉토리. 코드의 추가, 삭제, 수정 등의 작업이 이루어지는 공간
- `Staging area(Index)`
  <br>
  저장소와 작업영역사이에 존재하는 공간. git add 명령어를 실행했을때 작업영역의 파일들이 staging area로 이동한다. staging area 영역에 있는 정보들은 commit 명령어를 통해 local 저장소로 이동한다.
- `Repository`
  <br>
  저장소는 local repository와 remote repository 로 구분된다.
  - local repository(개인 저장소)
    <br> 내 PC에 저장되는 개인 저장 공간
  - remote repository(원격 저장소)
    <br> 원격 저장소 전용 서버에서 관리되며, 여러 사람들과 공유 가능한 저장소
- `Stash`

<br>

**Git 기본 명령어**

---

- git 최초 설정(git 전역으로 사용자 이름과 이메일 주소 설정)

```
git config —global user.name
git config —global user.email
```

- .git 파일 생성

```
git init
```

- staging area에 git 파일 추가

```
//soy.txt파일의 변경 사항 추가하기
git add soy.txt

//해당 폴더안의 모든 변경 사항 추가하기
git add .
```

add 명령어를 톨해 staging area 로 이동한 파일들은 git에서 tracking한다.

<br>

- staging area에 추가된 파일을 제외(working directory에서는 유지)

```
git rm --cached soy.txt
```

- commit

```
//git commit을 입력하면 vi 에디터가 실행됨
git commit
// commit message를 간단하게 입력할 때
git commit -m "commit message"
```

staging area에 있던 내용들이 local repository로 이동한다. commit은 버전관리를 위한 log를 생성하는 용도이다.

- remote

원격 저장소로 변경사항을 올리기전에 원격저장소와 내 local 저장소를 연결 해야 한다. 이때 사용되는 명령어가 remote이다.

```
git remote add origin (원격 저장소 github URL)
```

- push

```
git push <저장소명><브랜치명>
```

원격 저장소로 변경된 파일을 업로드 하는 것.
