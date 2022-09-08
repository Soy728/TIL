# .gitignore

.gitignore 파일은 git의 루트 디렉토리에 저장되어 git repository나 staging area에 추가되지 말아야하는 폴더나 파일을 정의하는 파일이다. .gitignore에 정의된 파일은 tracking 되지 않는다.

![gitignore 파일](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/505c6b8c-e70a-463a-beee-32736aa227d2/Untitled.png)

node_modules 폴더는 라이브러리 설치 파일이기 떄문에 os별로 다른 파일이 깔릴 수 있다. 컴퓨터 환경에 의존성을 가지므로 tracking하지 않는다. 또한 node_modules 폴더는 용량이 매우 크기 때문에 tracking하지 않는다.

이미 staging Area나 repository에 commit된 폴더라면, 파일을 먼저 제거해야한다. 개인 로컬에서는 파일을 제거 하지 않고 원격에 있는 파일을 제거하기 위해서는
<br>｀ git rm —cached .｀명령어를 사용한다.

git rm filename 명령어를 사용하면 원격과 로컬에서 파일이 삭제된다.
<br>
｀｀｀
git rm —cached .

git add .

git commit -m “.gitignore파일수정”
｀｀｀
