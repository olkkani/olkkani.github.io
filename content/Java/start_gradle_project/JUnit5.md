---
emoji: 👻
title: '[Gradle] Gradle Project 에 JUnit5 + AssertThat 설정'
date: "2022-06-21 18:36:00"
author: chanjin_ahn
tags: Java
categories: Spring Java
---

이번 포스팅에서는 Gradle Project 에 Junit5 를 사용 환경을 설정합니다.

## 환경

---

| 종류  | 환경                    |
|:---:|-----------------------|
| OS  | M1 Mac(Monterey 12.4) |
| IDE | Intellij(2022.1.2)    |
| Java | jdk17 (temurin) |

## Gradle Project 에 JUnit5 라이브러리 추가

---

[Gradle Junit5 Use Guide](https://docs.gradle.org/current/userguide/java_testing.html#using_junit5)
를 확인하여 손쉽게 JUnit5 를 적용할 수 있습니다. 직접적인 관련은 없지만 assertThat 을 사용하기 위해서 **assertj** 종속성도 같이 추가했습니다.

### Gradle Project build.gradle 수정

```yaml
# 의존성 추가
dependencies {
  testImplementation 'org.junit.jupiter:junit-jupiter:5.8.2'
  testImplementation 'org.assertj:assertj-core:3.23.1'
}
...(생략)
# Junit5 활성화
test {
  useJUnitPlatform()
}
```

## Gradle Spring 환경에서 junit5 라이브러리 추가

---

Gradle 과 동일하게 설정해도 무관하지만 Spring boot 에는 **spring-boot-starter-test** 가 존재하기 때문에 종속성을 다르게 가져갈 필요가 있습니다.
사실 잘 살펴보면 jupiter 를 비롯한 여러 라이브러리를 포함하는 것을 확인할 수 있습니다.

### Srping Project build.gradle 파일 수정

```yaml
    # 의존성 추가
    dependencies {
        testImplementation 'org.springframework.boot:spring-boot-starter-test:2.7.0'
    }
    ...(생략)
    # Junit5 활성화
    test {
      useJUnitPlatform()
    }
```

### homcrest 종속성 제외

assertThat 을 사용하기 위해 spring-boot-stater-test **hamcrest** 와 **assertj** 가 기본적으로 포함되어 있습니다.

저는 hombrest 를 사용하지 않을 예정이므로 종속성에서 제외하도록 하겠습니다. 필수는 아니므로 본인 선택에 따라 제외하도록 합니다.

```yaml
configurations {
  all{
    exclude module: 'org.hamcrest'
  }
}
```

## Assert That Static Import

---
AssertThat 을 알고 있다면 assertThat 을 Static Import 하여 사용하는 것을 확인할 수 있습니다.

assertThat() 을 사용하기 위해서는 매번 타이핑하여 Static Import 해야합니다만, IDE 에 따라서 그 수고를 덜어줄 수 있습니다.

### (1/3) IntelliJ 에서 Static Import 하는  일반적인 방법 (안될 가능성 높음)

 IntelliJ 를 사용하시는 분들은 `assertThat()` 까지 입력한 후 **Show Context Action** (Mac: ⌥⏎ Windows: alt+enter) 로 static import 하여 사용합니다.

![not found static import method](JUnit5-assertThat_not_found_static_import.png)
다만 저는 static import method 라는 선택지가 나오지 않아서 난처했습니다. 인터넷에 검색했을 땐 모두 해당 방법이 나오므로 시도해본 뒤 저랑 같은 상황이면 빠르게 다음 방법으로 넘어가도록 합니다.

### (2/3) Intellij 에서 Static Import 하는 공식 가이드 방법

조금 찾아보니 IntelliJ 공식 가이드가 존재합니다.
[Intellij Assert That Import Guide](https://www.jetbrains.com/idea/guide/tips/assert-that/) 에서 영상을 확인할 수 있으므로 글 보다는 영상을 직접 확인하는 것이 이해가 빠릅니다.

1. `Assertions.assertThat()` 을 입력하여 assertj 를 Import 한다.
2. Assertions 부분을 지운다.
3. .asserThat() 에서 커서를 .와 a 사이로 옮긴 후 **⌥⏎** (Windows: alt+enter) 를 누른 뒤 **import static method** 를 선택합니다.
4. import 항목 중 `Assertions.assertThat` 을 선택합니다.

확실히 유효한 방법이나 조금 불편합니다. 저는 불편해서 세 번째 방법을 주로 사용합니다.

### (3/3) IntelliJ 에서 Static import 하는 최종 방법

조금 사용하다보니깐 처음 방법과 다르지 않은 방법을 발견하여 현재 이 방법으로 사용하는 중입니다.

1. `assertThat()` 을 입력한다.
2. 커서 포인트르 a 왼쪽으로 이동한다.
3. **⌥⏎** 를 눌러 **import static method** 를 선택한다.
4. import 항목 중 `Assertions.assertThat` 을 선택합니다.

IntelliJ 에서 import static method 하는 방법은 검색해도 잘 나오지 않아 곤란했는데 저와 비슷한 분들에게 도움이 되었으면하는 바람입니다.

## JUnit5 적용 Test

---

모든 설정이 완료되었다면 정상적으로 적용되었는지 테스트합니다.

```java
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

// Junit5_를_프로젝트에_정상적으로_적용하였는지_테스트
public class JUnit5Test {

    @Test
    public void 숫자비교() {
        Long id = 1L;
        assertThat(id).isEqualTo(1);
    }

    @Test
    public void 문자비교() {
        String name = "chanjin_ahn";
        assertThat(name).isEqualTo("chanjin_ahn");
    }
}
```

![JUnit5 Test](JUnit5-test.png)

실행시 위와 같다면 정상입니다. 이번 포스팅은 여기까지입니다. 부족한 점이 많으니 틀린 부분이 있다면 지적 부탁드립니다. 감사합니다.

``` toc
```
