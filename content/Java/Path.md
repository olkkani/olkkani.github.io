---
emoji: 👻
title: '[Java] 파일 구분자 File.separator 대신 Path 사용하기'
date: '2022-01-30 20:42:00'
author: Chanjin Ahn
tags: 
categories: Java
---

## 개요

---

java 에서 절대 경로의 파일을 가져오려고 하는 경우, 각 OS별로 파일 구분자를 다르게 지정해야합니다. 기존에 OS 별 구분자를 지정하지 않았거나 하드 코딩 하였다면 Paths 라이브러리를 사용하여 개선해보도록 하겠습니다.

## 경로 구분자를 삽입하는 방법

---

### 하드 코딩으로 절대경로 지정하기
``` java
String path = "D:/sampleFile/testimage.png"
System.out.println(path);
```
``` java
// console
D:/sampleFile/testImage.png
```
가장 간결한 방법이지만 운영체제마다 구분자가 조금씩 다르게 때문에 여러 환경을 고려한다면 권장하지 않습니다. 
### File.separator 로 파일 구분자 삽입하기
```java

String path = "D:" + File.separator + "sampleFile" + 
	File.separator + "testImage.jpg";
System.out.println(path);
```
``` java
// console
D:/sampleFile/testImage.png
```
직접 실행한다면 각 운영체제에 맞춰 파일 구분자가 다르게 삽입되는 것을 확인할 수 있습니다. 다만  하드코딩보다 훨씬 코드가 길고 가독성이 떨어져서 해당 방법으로 구분자를 삽입하고 있다면 다음 방법으로 수정하는 것이 좋습니다.
### Path.get() 으로 파일 구분자 삽입하기
```java
String path = Paths.get("D:","sampleFile", "testImage.png")
	.toString();
System.out.println(path);
```
``` java
// console
D:/sampleFile/testImage.png
```
File.separator 랑 결과는 같지만 코드가 더 짧고 가독성이 좋습니다. 
성능상 차이가 크지 않다면 여러모로 Path.get() 을 사용하는 것이 좋아보입니다.

지금까지 File.separator 을 대체할 수 있는 Path.get()에 대해서 간단하게 소개해봤습니다.