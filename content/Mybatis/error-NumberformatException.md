---
emoji: 👻
title: '[Mybatis] java.lang.NumberformatException Error 해결'
date: '2022-01-08 20:42:00'
author: chajin_ahn
tags: 
categories: Spring Mybatis
---

## 개요

---

Mybatis 에러 중 **java.lang.NumberFormatException** 와 같은 에러가 발생하는 2가지 경우와 해결 방법에 대해서 알아보겠습니다.

### 에러 예시 화면

```bash
org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: java.lang.NumberFormatException: For input string: "?"
### Cause: java.lang.NumberFormatException: For input string: "?"
```

## 원인 진단 및 해결

---

### 데이터 타입 에러

에러를 보면 데이터 타입의 형변환에 실패해서 생긴 문제로 보이는데, java 변수와 쿼리 결과의 데이터 값이 다른건지 확인해보도록 합니다.

### 동적 쿼리 에러

아무리 봐도 데이터 타입의 문제가 없다면 SQL 동적 쿼리에서 "" 와 '' 를 구분하여 사용하였는지 확인해야합니다.

```SQL
...
<if test="value != null and value != ''">
    ...
</if>
...
````

다음과 같이 작성했을 경우 아래와 같이 변경할 수 있도록 합니다.

```SQL
...
<if test='value != null and value != ""'>
    ...
</if>
...    
```

해결 방법은 몇 가지 존재하지만 가장 깔끔한 방법은 위와 같이 작은따옴표('')를 먼저 사용한 뒤 큰따옴표("")를 사용해야 합니다.

해당 오류가 발생하는 이유를 간략히 설명하자면 OGNL(Object Graph Navigation Language)의 문제 때문입니다.
OGNL인터프리터에서는 ''나 '?'를 char형으로 인식하고 '??'나 "?"는 String으로 인식합니다. 때문에 동적 쿼리의 비교문을 작성할때 NumberFormat으로 비교를 시도하고 해당 에러가 발생하는 것입니다.

## 결론

---

""를 먼저 쓰는 습관을 들이자.
