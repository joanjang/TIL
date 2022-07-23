# command

---

사용할 때마다 검색해보는 커멘드를 정리한다!

## reset & push

리셋은 과거 커밋을 되돌리지만 그 사이에 커밋한 log들은 삭제되므로 지양지양

```md
git reset --hard [commit-hash]
git push -f origin [branch-name]
```

### reset option

1. --soft
2. --mixed(default)
3. --hard

## merge

```md
git merge [머지할 branch-name]
```

## remote

```md
git remote -v
git remote [remote-name] [github-url]
git remote set-rul [remote-name] [github-url]
git remote remove [remote-name]
```

## clone

얕은 복제하다가 내 저장소로 push했을 때 애먹은 적이 있다. 하지말기..

```md
// 최신 변경만 반영된 clone
git clone --depth=1 [url]
```

### Reference

- [Github 공식 가이드](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting)
