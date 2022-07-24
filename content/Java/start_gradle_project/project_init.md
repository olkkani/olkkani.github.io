---
emoji: 👻
title: '[Gradle] Gradle project 시작하기'
date: "2022-01-28 20:42:00"
author: chanjin_ahn
tags: 
categories: Java
---

## 환경

---

| 종류  | 환경                    |
|:---:|-----------------------|
| OS  | M1 Mac(Monterey 12.4) |
| IDE | Intellij(2022.1.2)    |
| Java | jdk17 (temurin) |

## Gralde 프로젝트 시작하기

---

### Gradle Install Hombrew

[Gradle Installation Documents](https://gradle.org/install/)

Gradle 공식 문서에 따라 설치하도록 합니다. Hombrew 로 설치하는 것 역시 권장 방법이므로 터미널에 다음과 같이 입력 후 실행합니다.

``` bash
brew install gradle
```

### 1. 프로젝트 시작 폴더 생성

Gradle 프로젝트를 생성하기 전에 해당 프로젝트를 시작할 폴더를 새로 만듭니다. 폴더 명과 별개로 프로젝트 이름은 따로 지정할 수도 있습니다. 방법은 아래 말씀드리겠습니다.

``` bash
 # ex) mkdir 프로젝트_폴더_이름

 mkdir demo-java

 # 생성한 프로젝트로 이동
 cd demo-java
```

### 2. Gradle 프로젝트 생성

폴더로 이동한 후에 아래 명령어를 입력합니다. 입력 후에는 몇 가지 옵션을 선택하여 프로젝트를 새로 생성합니다.

```bash
gradle init
```

![stat_gradle_new_project](project-init-1.png)

생성하고자 하는 프로젝트의 타입을 선택합니다. 저는 이번에 2, "application"을 선택하여 진행하겠습니다.

![language_select](project-init-2.png)

다음은 프로젝트의 언어를 선택합니다. 저는 "java"를 선택하겠습니다.

![bulid script dsl](project-init-3.png)

다음은 script DSL을 선택합니다. 저는 "groovy"를 선택하겠습니다.

![select_test_framwork](project-init-4.png)

다음은 테스트 프레임워크를 선택합니다. 선택할 수 있는 테스트 프레임워크는 여러개가 존재하지만 저는 "junit jufiter"를 선택하겠습니다.

![insert_project_name](project-init-5.png)

다음은 프로젝트 명을 입력합니다. 디폴트 값은 폴더의 이름을 따라가지만 다른 프로젝트 명을 입력할 수도 있습니다.

설정을 전부 끝마쳤다면 설정한 옵션에 맞춰 Gradle 프로젝트가 생성됩니다.

```toc
```
