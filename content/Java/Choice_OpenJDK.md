---
emoji: 👻
title: '[java] OpenJDK 선택하기'
date: "2022-09-20 18:00:00"
author: Chanjin Ahn
tags: Java
categories: Sourcetree

---
## 개요
---
JDK 에 대해서 잘 모른다면 선택지조차 모른채 관습적으로 사용하던 JDK만을 사용하는 경우가 있습니다. 해당 포스트에서는 주관적인 관점에서 JDK 를 선택하는 기준과 버전별 추천하는 JDK 에 대해서 다뤄보고자 합니다.OpenJDK의 정의, 상용JDK 보다 나은 점, 버전 별 차이와 같은 요소들을 차치하고 간결하게 구성되어있습니다.

## JDK 선택하기
---
### 프로젝트 환경에 따라 버전 선택
본인이 개발하려는 프로젝트의 프레임워크, 라이브러리, 규칙 등에 따라 사용 버전을 선택합니다. 버전은 최소 1.8(8) 이상을 권장합니다. 여러 이슈가 해결된 라이브러리와 프레임워크는 8 버전 이상을 지원하는 경우가 대부분입니다. 또한 특별한 이유가 없다면 그 이상의 버전을 선택합니다.
### TCK 여부로 배급처를 선택
OpenJDK 는 Oracle 에서 제공하는 OpenJDK 말고도 다양한 배급처가 존재합니다. 여러 배급처에서 제공하는 OpenJDK 중 TCK(Technology Compatibilty Kit)로 검증된 OpenJDK 호환성과 안정성에 대한 걱정은 안해도 되며 각 배급처별 OpenJDK 의 성능은 대동소이한 수준입니다. TCK 여부를 확인하며 인증된 배급처만 추려내도 선택지가 아주 많으므로 필수요소 라고 생각합니다. 대표적인 OpenJDK 로는 OpenJDK, ZuluJDK, TemurinJDK 등이 있습니다.
### Cloud 환경에 따라 배급처 고려
만약 AWS 환경에서 서비스를 한다면 amazon에서 제공하는 Corretto 를 선택하는 것도 방법입니다. 다만 AWS 환경에서 다른 OpenJDK 때 보다 더 나은 차이를 경험해본 적은 없습니다. 정량적 지표나 개인적인 경험에 따라 고려하면 될 것 같습니다.
### 지원 기간을 고려
같은 LTS 버전이라 할지라도 배급처에 따라 지원 기간이 상이하므로 기간을 살펴보는 것이 중요합니다. 각 배급처별 사이트에서도 로드맵을 확인할 수 있지만 포괄적으로 확인하기 위해서는 위키피디아를 참조하는 것이 좋습니다.
[Java version history - Wikipedia](https://en.wikipedia.org/wiki/Java_version_history)
## 결론
---
버전이 올라갈 수록 기존 버그가 해결되고 성능이 개선됩니다. 프로젝트 환경이 허락하는 범위 내에서 가장 최신의 JDK 버전을 쓰는 것이 좋으며 LTS 버전은 선택이 아니라 필수라고 생각합니다. 이유야 여러가지가 있지만 제가 사용하는 버전 별 JDK와 간단한 이유는 다음과 같습니다.
| JDK Version | 배급처 | 이유 |
| --- | --- | ---|
| 8 | Zulu | 신뢰성이 높고 지원기간이 압도적으로 김(~2030) |
| 11 이상 | Temurin | 이클립스 재단의 Adoptium 에서 이전되었으며 최근에 가장 핫함 |

매우 주관적이며 더 좋은 대안을 알게되거나 알려주신다면 바뀌지 않을까 싶습니다.
## Referencing & Citation
---
https://ko.wikipedia.org/wiki/%EC%9E%A5%EA%B8%B0_%EC%A7%80%EC%9B%90_%EB%B2%84%EC%A0%
https://aws.amazon.com/ko/corretto/?filtered-posts.sort-by=item.additionalFields.createdDate&filtered-posts.sort-order=desc