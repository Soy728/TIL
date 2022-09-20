# Svelte를 사용하는 협업 프로젝트 setting

### 1. svelte 환경 설정

```
npm create svelte@latest 폴더명
cd 폴더명
npm install
```

### 2. github

새로운 repository 생성
<br>
<br>

### 3. git

```
//git 생성
git init

//git 브랜치 master -> main
git branch -M main

//원격 repository 연결
git remote add origin "URL"


git add .
git commit -m "project init"
git push origin main

//local에 feature branch 생성 후 이동
git checkout -b 브랜치명

//원격에 local branch 연결
git push --set-upstream origin 브랜치명
```
