---
emoji: 👻
title: '[Mybatis] String NumberformatException Error가 나는 경우'
date: '2022-01-08 20:42:00'
author: chajin_ahn
tags: 
categories: Spring Mybatis
---

Mybatis를 사용하여 구현하다보면 아래와 같은 에러 문구가 발생하는 경우가 존재합니다.

```console
org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: java.lang.NumberFormatException: For input string: "?"
### Cause: java.lang.NumberFormatException: For input string: "?"
```

에러를 보고 유추하면 형 변환 문제로 보이는데, 아무리 찾아봐도 데이터 타입에는 문제가 없다면 SQL 동적 쿼리를 살펴볼 필요가 있습니다.

---

## 예제

```SQL
...
    <if test="value != null and value != ''">
        ...
    </if>
...
````

다음과 같은 동적 쿼리가 존재할 경우 아래와 같이 변경해야 합니다.

```SQL
...
    <if test='value != null and value != ""'>
        ...
    </if>
...    
```

## 설명

해결 방법은 몇 가지 존재하지만 가장 깔끔한 방법은 위와 같이 작은따옴표('')를 먼저 사용한 뒤 큰따옴표("")를 사용해야 합니다.

해당 오류가 발생하는 이유를 간략히 설명하자면 OGNL(Object Graph Navigation Language)의 문제 때문입니다.
OGNL인터프리터에서는 ''나 '?'를 char형으로 인식하고 '??'나 "?"는 String으로 인식합니다. 때문에 동적 쿼리의 비교문을 작성할때 NumberFormat으로 비교를 시도하고 해당 에러가 발생하는 것입니다.

## 결론
""를 쓰는 습관을 들이자.