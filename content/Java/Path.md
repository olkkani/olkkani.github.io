---
emoji: 👻
title: '[Java] 파일 구분자 File.separator 대신 Path 사용하기'
date: '2022-01-30 20:42:00'
author: olkkani
tags:
categories: java
---
개발을 하다보면 경로를 지정해 파일을 가져오거나 저장을 하는 경우가 있을 수 있습니다. 이번 포스트에서는 java 에서 **절대 경로를 지정하는 방법**에 대해 알아보고자 합니다.
## 잘못된 경로 지정 방법
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
가장 직관적이고 간결한 방법이지만 경로 사이에 있는 구분자는 운영체제마다 조금씩 다르기 때문에 적절하지 않은 방식입니다.
## 개선된 방법
---
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
직접 실행한다면 각 운영체제에 맞춰 파일 구분자가 다르게 삽입되는 것을 확인할 수 있습니다. 다만  하드코딩보다 훨씬 코드가 길어서 경로가 길면 코드를 치기가 힘들고 가독성이 떨어진다는 단점이 있습니다.
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
File.separator 를 사용했을 때 처럼 운영체제마다 파일 구분자가 다르게 삽입되는 것을 확인할 수 있습니다. 그럼에도 코드는 더 짧고 가독성도 좋기 때문에 기존 방식들보다 더 추천합니다.
## 마무리
---
Pahts 는 경로를 지정하는 세 가지 방법 중에 단점이 없는 방법입니다. 
성능상 차이가 크지 않다면 여러모로 Path.get() 을 사용하는 것이 좋아보입니다. 지금까지 File.separator 을 대체할 수 있는 Path.get()에 대해서 간단하게 소개해봤습니다.