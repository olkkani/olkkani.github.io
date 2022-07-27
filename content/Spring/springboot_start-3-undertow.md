---
emoji: 👻
title: '[springboot_start] 내장 WAS를 undertow로 변경하기'
date: '2022-01-09 20:42:00'
author: chajin_ahn
tags: 
categories: Spring
---

## 개요

---

새롭게 생성한 Spring Boot Project 에 WAS를 Tomcat에서 undertow로 변경해보겠습니다. tomcat은 오래전부터 사용된 WAS이나 아쉬운 점이 많아 사용 빈도가 줄고 있다고 합니다. 그래서 undertow로 바꿔보도록 하겠습니다.

## 의존성 추가

---

### bulid.gradle 파일을 수정하여 Tomcat 을 제외

tomcat은 사용하지 않을 예정이므로 제외합니다. 제외하지 않을 경우 에러가 발생할 수 있으니 꼭 제외할 수 있도록 합니다.

```yaml
    configurations {
        all{
            // was tomcat 제외
            exclude module: 'spring-boot-starter-tomcat'
        }
    }
```

### undertow 라이브러리 추가

버전은 본인의 상황에 맞게 maven repository 에서 가져오시면 됩니다.
undertow 라이브러리와 autobulid 를 위한 devtools 를 추가합니다.

```yaml
    dependencies {
        implementation group: 'org.springframework.boot', name: 'spring-boot-starter-undertow', version: '2.6.3'
        developmentOnly 'org.springframework.boot:spring-boot-devtools'
    }
```

## application.yml 설정

### undertow + autobulid(devtools) 설정

```yaml
    ---
    spring:
      config:
        activate:
          on-profile: "common"
      devtools:
        livereload:
          enabled: true
        restart:
          enabled: true
    server:
      port: 8080
    ---
```

설정에 대한 프로파일 명을 __common__ 로 지정합니다. 해당 프로파일을 불러올 경우의 설정을 정의할 수 있습니다.

- spring.devtools.livereload.enabled=true: view 파일의 수정 사항을 즉각 반영합니다.
- spring.devtools.restart.enabled=true: java 파일의 수정 사항을 즉각 반영합니다.
- server.port=8080: 프로젝트의 포트를 지정합니다.

## 결과 확인

---

### 기존 Tomcat 환경

![tomcat](31-tomcat.png)

### undertow 환경

![undertow](32-undertow.png)

```toc
```
