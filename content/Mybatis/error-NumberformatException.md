---
emoji: 👻
title: '[mybatis] java.lang.NumberformatException Error 해결'
date: '2022-01-08 20:42:00'
author: olkkani
tags:
categories: spring mybatis
---

## 들어가기에 앞서

---

Mybatis 환경에서 아래와 같은 에러가 발생하는 2가지 경우와 해결방법에 대해서 알아보겠습니다.

```bash
org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.exceptions.PersistenceException:
### Error querying database.  Cause: java.lang.NumberFormatException: For input string: "?"
### Cause: java.lang.NumberFormatException: For input string: "?"
```

## 원인 진단 및 해결

---

### 데이터 타입 에러

가장 기본적으로 확인해야될 문제로, java 변수와 쿼리 결과의 자료형이 다른지 확인해봅니다.
String 으로 받아야할 결과를 int 나 long 같은 정수형 변수로 받는 것은 아닌지 확인해보고 수정할 수 있도록 합니다.
자료형에 문제가 없다면 다음 문제를 의심해보도록 합니다.

### 동적 쿼리 에러

아무리 봐도 자료형의 문제가 없다면 SQL 동적 쿼리에서 "" 와 '' 를 구분하여 사용하였는지 확인해야합니다.

```xml
...
<if test="value != null and value != ''">
    ...
</if>
...
```

다음과 같이 작성했을 경우 아래와 같이 변경할 수 있도록 합니다.

```xml
...
<if test='value != null and value != ""'>
    ...
</if>
...
```

해결 방법은 몇 가지 존재하지만 가장 깔끔한 방법은 위와 같이 작은따옴표('')를 먼저 사용한 뒤 큰따옴표("")를 사용해야 합니다.

해당 오류가 발생하는 이유를 간략히 설명하자면 OGNL(Object Graph Navigation Language) 표현식 때문입니다.
OGNL 인터프리터에서는 ''나 '?'를 char형으로 인식하고 '??'나 "?"는 String 으로 인식합니다. 때문에 동적 쿼리의 비교문을 작성할때 NumberFormat으로 비교를 시도하므로
해당 에러가 발생하는 것입니다.

## 결론

---

동적 쿼리를 사용하는 경우에는 꼭 ' ' 을 사용하여 다음과 같은 에러가 나지 않도록 조심합니다.