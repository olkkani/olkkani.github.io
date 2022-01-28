---
emoji: 👻
title: '[springboot] Spring Boot project 시작하기 1/?'
date: '2022-01-09 20:42:00'
author: chajin_ahn
tags: 
categories: Spring
---

Spring Boot를 이용하여 새로운 프로젝트를 만들어보도록 하겠습니다.

## 환경

---

- OS: MacOS 12.1(Monterey)
- IDE: Intellij(2021.2)
- language: java 17
- project: Gradle project

## 프로젝트 생성

---

### spring initializr을 이용한 프로젝트 생성

새로운 springboot project를 시작하는 방법은 여러가지가 있지만 이번에는 spring inializr에 접속하여 간단하게 생성해보도록 하겠습니다.

1. Spring Initializr 접속
[Spring initializr](https://start.spring.io/)

2. Project 환경 선택

- Projrect: Gradle Proejct
- Language: Java
- Spring Boot: 2.6.2
- Packaging: Jar
- Java: 17

Project Metadata는 각 프로젝트 성격에 맞춰서 작성하면 됩니다.

Dependencies는 우측 __Add Dependencies__ 버튼을 클릭하여 추가할 수 있습니다. Dependencies는 프로젝트 생성 후에도 추가할 수 있으므로 기본적인 것들을 먼저 추가해보겠습니다.

- Dependencies:
  - thymeleaf
  - Stpring Web
  - Spring Boot DevTools

![Dependencies 설정 화면](./springboot_start-initializr.png)

3. 프로젝트 생성

모든 준비가 끝났으면 __GENERATE__ 버튼을 눌러 새로운 프로젝트를 로컬 저장소에 저장합니다.

## Intellij Project Import

저장된 프로젝트는 .zip으로 압축되어 있으므로 원하는 위치에 압축을 풀어줍니다. 다음은 Intellij에서 해당 프로젝트를 열람하는 방법입니다.

1. 