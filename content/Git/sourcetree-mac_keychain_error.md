---
emoji: 👻
title: '[Sourcetree] Mac KeyChain Error'
date: '2022-01-07 23:42:00'
author: olkk
tags: 
categories: Sourcetree
---

M

## 해결 방법

1. 터미널 실행
2. 해당 명령어 입력

```bash
git config --global credential.helper osxkeychain
```

3. git 명령어 재시도
4. password 입력 창이 뜨면 github Personal access tokens 입력