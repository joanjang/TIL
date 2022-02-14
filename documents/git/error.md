# 오류 해결

---

## 1. shallow update not allowed

레파지토리 clone 후 내 제파짓에 push할 때 아래와 같은 오류가 발생했다. 최신 커밋만 가져오려고 클론할 때 depth를 설정한 게 이유가 된 것 같다...

```md
> git push -u origin master

To https://github.com/je0489/----.git
! [remote rejected] master -> master (shallow update not allowed)
error: failed to push some refs to 'https://github.com/je0489/----.git'
```

:::details 오류 발생 전 Log

```md
1. git clone --depth=1 [클론 대상 레파짓.git]
2. git init
3. git remote set-url origin https://github.com/je0489/----.git
4. git add `*`
5. git commit -m "Chore: Initial project version ✨"
```

:::

### 해결

얕은 클론한 프로젝트는 새로운 저장소로 push할 수 없기 때문에 이전 커밋을 가져오는 fetch 명령어를 사용했다. 이후 바로 확인해 보니 정상적으로 커밋 돼있었다!

```md
git fetch --unshallow [클론 대상 레파짓.git]

// 또는 아래처럼 해도 된다... 아마 될 거다!..
git remote add old [클론 대상 레파짓.git] && git fetch --unshallow old
```

### Reference

- [backlog 깃 튜토리얼 - Fetch](https://backlog.com/git-tutorial/kr/stepup/stepup3_2.html)
- [https://stackoverflow.com/questions/28983842](https://stackoverflow.com/questions/28983842/remote-rejected-shallow-update-not-allowed-after-changing-git-remote-url)

## 2. Can't automatically merge

PR 시 github에서 아래와 같은 메세지가 표시됐다. 그 이유는 다른 브랜치와 merge한 파일과 현재 브랜치에서 변경한 파일이 충돌 났기 때문이다.

![error_in_github](../image/git/error_2_cant-automatically-merge.png)

### 해결

4번까지의 과정을 거치면 아래와 같이 충돌된 부분이 표시된다. 머지 작업을 완료한 후 5번을 수행하면 해결~

```md
1. checkout master
2. git pull
3. checkout 충돌난 브랜치
4. git merge master
5. commit & push
```

<img src="../image/git/error_2_ conflict.png" alt="merge" width="600px" />

### Reference

- [https://stackoverflow.com/questions/31973318](https://stackoverflow.com/questions/31973318/github-cant-automatically-merge)
