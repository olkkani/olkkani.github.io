---
emoji: 👻
title: '[Java] 파일 구분자(File.separator) 대신 Path 사용하기'
date: '2022-01-30 20:42:00'
author: OIKK
tags: 
categories: Java
---

파일 경로를 가져오는 경우 OS별로 파일 구분자가 다릅니다. OS에 맞게 각각 구현해도 되지만 비효율적이기 때문에 File.separator를 사용하여 구현한다면 이러한 문제를 해결할 수 있습니다.

```java

String path = "D" + File.separator + "sampleFile" + File.separator + "testImage.jpg";
    System.out.println(filePathWithName);
```

```console
    D:/sampleFile/testImage.png
```

실행을 한다면 각 운영체제에 맞게 파일 구분자가 출력되는 것을 확인할 수 있습니다. 

다만 이렇게 한다면 경로가 늘어날 수록 코드도 길어지고 관리하기 어렵다는 단점이 있습니다. 이러한 경우를 개선한 Path를 소개하겠습니다. 간단하기 때문에 예시 코드를 보여드리겠습니다.

```java
    String filePathWithName = Paths.get("D:","sampleFile", "testImage.png").toString();

    System.out.println(filePathWithName);

```

```console
    D:/sampleFile/testImage.png
```

다음과 같이 결과는 같지만 코드가 상당히 줄어들어있는 것을 확인할 수 있습니다. 유지관리하는 측면에서도 가독성면에서도 상당히 이득이니 앞으로는 Path를 사용할 수 있도록 하는 것을 권장합니다.

지금까지 File.separator를 대체할 수 있는 Path에 대해서 간단하게 소개해봤습니다.
