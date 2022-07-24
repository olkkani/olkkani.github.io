---
emoji: 👻
title: '[springboot_start] thymeleaf layout 설정'
date: '2022-01-09 20:42:00'
author: chajin_ahn
tags: 
categories: Spring
---

이번에는 thymeleaf 기본 설정과 thymeleaf layout 설정하는 방법에 대해서 알아보겠습니다.

## 개발 환경

---
| 종류 | 환경 |
| :---: | :--- |
| OS | M1 Mac (Monterey 12.4) |
| IDE | Intellij (2022.1.3) |
| Java | jdk17 (temurin) |

## Thymeleaf 환경 설정

---

### Maven Dependence 추가

## 기본 사용법

---
Thymeleaf 사용 방법은 너무 많으므로 공식 문서로 대체합니다.
[thymeleaf_documents](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html) 어떤 것이 가능한지 훑어본다음 필요에 따라 참고할 수 있도록 합니다. 영어가 어렵거나 설명이 더 필요한 경우는 검색해서 공부할 수 있도록 합니다.

## Thymeleaf Layout 적용

---
Thymeleaf Layout 는  공통적인 Header 나 Footer 등을 따로 구현하고 내용이나 구조를 필요에 따라 사용하기 위해서 필요합니다. Tiles Frameworks 는 Controller 에서 레이아웃을 선택하지만 Thymeleaf Layout 은 HTML 에서 레이아웃을 명시해야된다는 점에서 차이가 있습니다.

### Maven dependence 추가

build.gralde 파일에 다음과 같은 의존성을 추가합니다. java version 이 11이상일 경우 다른 의존성을 추가해야된다는 검색결과가 있지만 저는 이상이 없었기 때문에 그대로 진행합니다.

```yaml
implementation 'nz.net.ultraq.thymeleaf:thymeleaf-layout-dialect:3.1.0'
```
