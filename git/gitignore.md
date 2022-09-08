# .gitignore

.gitignore 파일은 git의 **루트(최상위)** 디렉토리에 저장되어 git repository나 staging area에 추가되지 말아야하는 폴더나 파일을 정의하는 파일이다. .gitignore에 정의된 파일은 tracking 되지 않는다.

예시로, gitignore파일에 node_modules 폴더를 작성해 사용한다. node_modules 폴더는 라이브러리 설치 파일이기 떄문에 os별로 다른 파일이 깔릴 수 있다. 컴퓨터 환경에 의존성을 가지므로 tracking하지 않는다. 또한 node_modules 폴더는 용량이 매우 크기 때문에 tracking하지 않는다.

이미 staging Area나 repository에 commit된 폴더라면, 파일을 먼저 제거해야한다. 개인 로컬에서는 파일을 제거 하지 않고 원격에 있는 파일을 제거하기 위해서는 **git rm —cached .** 명령어를 사용한다.

git rm filename 명령어를 사용하면 원격과 로컬 모두에서 파일이 삭제된다. 로컬을 제외한 원격에서만 제거해야하므로 주의하자.

```
# Repository의 cache를 삭제한다.
git rm —cached .

# .gitignore 파일에 정의된 파일 및 폴더를 제외하고 add 한다.
git add .

git commit -m “.gitignore 파일수정"
```

<br>명령어 문법<br>

---

```
# 확장자가 .js 인 파일은 무시
*.js

# .js 파일들은 모두 무시되지만, test.js만은 무시하지 않음
!test.js

# 현재 디렉토리에 있는 /test.js파일은 무시되지만,
# subDir/test.js 같이 특정 디렉토리 하위에 있는 test.js는 무시되지 않음
/test.js

# node_modules/ 디렉토리에 있는 모든 파일을 무시
node_modules/

# src/ 하위의 .js파일만 무시
src/*.js

# src/ 하위에 존재하는 모든 디렉토리의 .txt 파일을 무시
src/**/*.txt

# 현재 디렉토리와 그 하위 디렉토리 내에 존재하는 모든 .js 파일을 무시
/**/*.js

# 현재 디렉토리 내에 존재하는 모든 .js .ts 파일 무시
/*.{js, ts}

# 현재 디렉토리 내에 있는 ex1.js ex2.js ex3.js 파일 무시
/ex[1-3].js

```
