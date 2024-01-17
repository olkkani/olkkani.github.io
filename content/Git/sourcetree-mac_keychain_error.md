---
emoji: 👻
title: "[Sourcetree] Mac KeyChain Error 해결 방법"
date: 2022-01-07 23:42:00
author: olkk
tags: 
categories: Sourcetree
---
Mac 환경에서 Sourcetree 를 사용하다가 키체인 암호를 입력하라는 팝업이 떠서 당황한 경험이 있다면 다음과 같은 방법으로 해결할 수 있습니다.

---
## 해결 방법
1. 터미널 실행
2. 해당 명령어 입력

    ```bash
    git config --global credential.helper osxkeychain
    ```

3. git 명령어 재시도
4. password 입력 창이 뜨면 github Personal access tokens 입력