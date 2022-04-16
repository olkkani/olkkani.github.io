---
emoji: 👻
title: '[Java] String 문자열 뒤집기'
date: '2022-01-01 20:42:00'
author: OIKK
tags: 
categories: Java
---

문자열을 거꾸로 뒤집는 방법은 여러 가지가 있지만 **StringBuffer, reverse()** 를 사용하는게 제일 간결하지 않을까싶습니다.

## StringBuffer, reverse() 예제

### Code

```java
// 문자열
String str = "Hello";
// 문자열 뒤집기
StringBuffer sb = new StringBuffer(str);
String reverseString = sb.reverse().toString();
// 결과 출력
System.out.println(sb);
System.out.println(reverseString);
```

### Result

```java
olleH
olleH
```

## 설명

### StringBuffer

StringBuffer 클래스의 인스턴스는 String 클래스의 인스턴스와 다르게 그 값을 변경하거나 추가할 수 있는 가변 클래스입니다. new StringBuffer()로 새롭게 선언할 수 있습니다.

### StringBuffer.reverse()

reverse() 메소드를 사용하면 해당 객체를 뒤집을 수 있습니다. reverse()를 사용하면 예제와 같이 **sb**와 **reverseString**의 문자열이 뒤집혀 있는 것을 확인할 수 있습니다.

---

StringBuffer는 String를 사용하는 것보다 변경이 쉽다는 점에서 메모리 공간과 속도 측면에서 이득입니다. 다만 만능은 아니므로 적절한 상황에서 필요에 따라 사용하는 것이 좋아보입니다.

```toc
```