# Git Flow

![git flow](https://mblogthumb-phinf.pstatic.net/MjAxODA3MDJfMjI2/MDAxNTMwNDkyODgwMzIx.QHt-ClNlW8myQnuoVEvHY1Gf4JQg332EhbfteH70Bfwg.AE6dxXib-73pvgVKE5B4A-_iVkvo7tft6Q4W7O7QXGMg.PNG.wjddudwo209/git-workflow-release-cycle-4maintenance.png?type=w2)

- `Master`: 배포 가능한 상태만을 관리하는 브랜치
- `Hotfix`: 빠르게 수정되어야 할 버그를 수정하기 위한 브랜치
- `Release`: 배포를 위해 최종적인 버그를 수정하는 브랜치. 배포 전 QA를 진행한다.
- `Develop`: 다음 배포를 위해 개발을 진행하는 브랜치.
- `Feature`: 필요한 기능들을 추가하고 개발하는 브랜치. Develop 브랜치에서 Feature 브랜치로 분기해서 개발을 진행하고, 후에 develop 브랜치와 merge한다. feature/#이슈번호 와 같은 형태로 브랜치를 관리한다.

main 브랜치는 master와 develop 브랜치이다.

## Branch

---

```
//브랜치 생성
git branch feature/#1
//브랜치로 이동(해당 브랜치가 존재하지 않는다면 브랜치를 만들고 이동)
git checkout -b feature/#1
//브랜치로 이동(존재하는 브랜치가 있다면 해당 브랜치로 이동)
git checkout feature/#1
```

위의 명령어를 실행하면, 내 local에만 branch가 생성된다. 따라서 원격 저장소에도 branch를 만들어야한다.

```
//원격 저장소에도 브랜치 생성
git push --set-upstream origin feature/#1
```
