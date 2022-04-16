---
emoji: 👻
title: '[springboot] Spring Boot project 시작하기, log4j2 + yml 1/?'
date: '2022-01-09 20:42:00'
author: chajin_ahn
tags: 
categories: Spring
---

이번 시간에는 springboot 에서 log4j2를 설정해보겠습니다.

## 라이브러리 가져오기

---

### 기존 logging 라이브러리 제외하기

스프링에서 제공하는 기본 라이브러리는 사용하지 않을 예정이므로 제외시킵니다.

```gradle
    configurations {
        all{
            exclude module: 'spring-boot-starter-logging'
        }
}

```

![기존 logging 라이브러리 제거](./21-exclude_starter_logging.png)

### log4j2 라이브러리 가져오기

다음으로는 log4j2와 slf4j를 위한 라이브러리를 가져오겠습니다. slf4j는 slf4j-impl에 포함되어있으므로 따로 가져오진 않겠습니다. 버전은 작성일 기준 2.17.1 이상을 가져오시길 바랍니다. log4j 취약점 논란이 있었기 때문에 maven repository에서 가져오실 땐 꼭 취약점이 발견되지 않은 버전을 가져오시길 바랍니다.

`spring-boot-starter-log4j2` 를 통해 가져오지 않는 이유는 maven repository 사이트의 표기와 달리 2.17.0 버전을 가져오기 때문입니다.


```gradle
    dependencies { 
        implementation group: 'org.apache.logging.log4j', name: 'log4j-core', version: '2.17.1'
        implementation group: 'org.apache.logging.log4j', name: 'log4j-api', version: '2.17.1'
        implementation group: 'org.apache.logging.log4j', name: 'log4j-slf4j-impl', version: '2.17.1'
    }
```

### yml 설정을 위한 jackson-dataformat-yaml 라이브러리 가져오기

log4j2 설정을 .xml로 관리해왔지만 이번 프로젝트는 .yml로 관리해보도록 하겠습니다. .yml으로 log4j2 설정을 관리하기 위해선 관련 라이브러리를 가져올 필요가 있습니다. 아래 라이브러리를 __dependencies__ 에 포함하도록 합니다.

```gradle
    implementation group: 'com.fasterxml.jackson.dataformat', name: 'jackson-dataformat-yaml', version: '2.13.1'
```

![bulid.gradle](./22-implementation_log4j2.png)

## application.yml 설정

---

### 예시 코드

```yml
  logging:
    config: classpath:log4j2.yml
```

## lgo4j2.yml 설정

---

log 출력 방식을 설정할 수 있는 log4j2.yml 파일을 생성하고 설정해보겠습니다.

### log4j2 설정 구조


1. Appenders

    로그의 출력 위치를 지정합니다. Appender로 출력할 수 있는 범위는 Console, file 등이 있습니다.

      - ConsoleAppender: 콘솔에 출력합니다.
      - Fileappender: 파일에 로그 메세지를 출력합니다.
      - RollingFileAppender: 특정 조건에 따라 콘솔 파일을 저장합니다.
        - Policy
          - OnStartupTriggeringPolicy: jvm start
          - TimeBasedTriggeringPolicy: time
          - SizeBasedTriggeringPlicy: file size
          - CronTriggeringPolicy: Cron Exception
        - DefaultRolloverStrategy
          - fileindex: min = 작은 index가 최신 파일 | max: 높은 index가 최신 파일
          - min: counter의 최소값입니다. 기본값은 1
          - max: counter의 최대값입니다. 기본값은 7, 설정 값을 초과할 경우 오래된 파일을 삭제합니다.
          - compressionLevel: 0~9까지의 정수값, 0은 압축하지않고, 1은 최고 속도, 9는 최고 압축
          - tempCompressedFilePattern: 압축하는 동안의 파일 이름 패턴
      - 로그의 크기가 지정한 용량 이상이 되면 다른 이름의 파일로 출력합니다.
      - DailyRollingFileAppender: 하루를 단위로 로그 메세지를 파일로 출력합니다.


2. PatternLayout:

    로그의 출력 포맷을 지정합니다.

    | Format | descprtion |
    | :---: | :---: |
    | %c, %logger | 해당 로그를 쓰는 로거의 이름 |
    | %C, %Class | 해당 로그를 요청한 클래스 이름 |
    | %d, %date| 해당 로그가 발생한 시간 |
    | %enc, %encoding | 특정 언어에서의 출력을 위한 문자 인코딩 |
    | %ex, %exception, %throwable | 예외로그, 길이 설정이 가능 |
    | %F, %file | 해당 로그가 발생한 클래스 파일명
    | %l, %location | 해당 로그가 발생한 클래스명, 메소드명
    | %L, %line | 해당 로그가 발생한 라인 번호
    | %m, %msg, %message | 로그문에 전달된 메세지
    | %n | 줄바꿈
    | %p, %locel | 로그 레벨
    | %r, %relative | 로그 처리시간
    | %t, %thread | 해당 로그가 발생한 스레드 명 |
    | %style{pattern}{ANSI style} | ANSI를 사용하여 특정 패턴을 스타일링 | 
    | %highlight{pattern}{style} | 로그 레벨명을 ANSI 색으로 하이라이트 |

3. logging level

    지정한 로깅 레벨 이상의 로그만 출력 됩니다.

      - FATAL
      - ERROR
      - WARN
      - INFO
      - DEBUG
      - TRACE

### log4j2.yml 예시

log4j2.yml 파일을 생성합니다. 위치는 아래와 같습니다.
__src/main/resources/log4j2.yml__

새로 생성한 파일에 다음과 같은 내용을 붙여넣습니다. 예시 이므로 본인의 상황에 맞게 커스텀하시면 됩니다.

```yml
Configutation:
  name: Default
  status: warn

  Properties:
    Property:
      name: log-path
      value: "logs"

  Appenders:
    Console:
      name: Console_Appender
      target: SYSTEM_OUT
      PatternLayout:
        charset: "UTF-8"
        pattern: "%highlight{[%-5level]} %d{yyyy-MM-dd HH:mm:ss.SSS} [%t][%F] %c{1} - %msg%n"
        disableAnsi: false
    File:
      name: File_Appender
      fileName: ${log-path}/logfile.log
      PatternLayout:
        charset: "UTF-8"
        pattern: "[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} [%t][%F] %c{1} - %msg%n"
    RollingFile:
      name: RollingFile_Appender
      fileName: ${log-path}/rollingfile.log
      filePattern: "logs/archive/rollingfile.log.%d{yyyy-MM-dd-hh-mm}_%i.gz"
      PatternLayout:
        charset: "UTF-8"
        pattern: "[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} [%t][%F] %c{1} - %msg%n"
      Policies:
        SizeBasedTriggeringPolicy:
          size: "200KB"
        TimeBasedTriggeringPolicy:
          interval: "30"
      DefaultRollOverStrategy:
        max: "30"
        fileIndex: "max"
  Loggers:
    Root:
      level: info
      AppenderRef:
        - ref: Console_Appender
        - ref: File_Appender
        - ref: RollingFile_Appender
    Logger:
      name: example.demospringboot
      additivity: false
      level: debug
      AppenderRef:
        - ref: Console_Appender
        - ref: File_Appender
        - ref: RollingFile_Appender
```

### 설명

- logger color

아래 그림과 같이 logger에 색을 입히고 싶다면 아래 코드와 같이 설정되어있는지 확인하시면 됩니다.

![logger_color](./23-logger-color.png)

``` yml
pattern: "%highlight{[%-5level]} %d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %c{1} - %msg%n"
disableAnsi: false
```

__%highlight{}__ 색상을 변경하고 싶은 구역을 설정합니다.

__disableAnsi : false__  색상 변경 여부를 지정합니다. __True__ 일 경우 콘솔의 색이 변하지 않습니다.

### application.yml에 추가

위의 작업을 마쳤다면 application.yml에 아래 내용을 추가합니다.

```yml
    ---
    logging:
    config: classpath:log4j2.yml
    ---
```

## 테스트

---

### 테스트 코드 전문

```java
package org.acj.env;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Log4j2Test {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

   @Test
   public void log4j2LoggerTest(){
       System.out.println("안녕 난 println이야");
       logger.info("안녕 난 logger야");
   }
}
```

### 결과

![logger test result](./24-logging_test.png)

## 기타 참고

---

[springboot_doc_yaml](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.yaml)
[apache_log4j2_configuration](https://logging.apache.org/log4j/2.x/manual/configuration.html)
[log4j2_start](https://velog.io/@bread_dd/Log4j-2-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EA%B0%9C%EB%85%90)

```toc
```