---
layout: single
title:  "BFG Repo-Cleaner"
categories: coding
tags: [Git, GitHub]
toc: true
---

# BFG Repo-Cleaner

## 왜? BFG Repo-Cleaner를 알게 되었는가?

IFH Project를 진행하게 되면서 MATLAB과 Simulink의 Simscape을 통하여 Modeling을 진행하고 있는데, 이에 대한 Reference model은 COMSOL Multiphysics이다. 각각 Submodel에 대한 이 Reference model을 같이 GitHub에 저장하여 두고 싶었다. 이러한 해석 파일은 Results를 포함하고 있으면 용량이 상당히 큰 편이다.

하지만 나는 GitHub를 처음 사용하게 되면서 용량이 100 [MB] 넘어가는 파일을 올릴 수 없는 것을 이를 통하여 알게 되었다.

즉, 대용량의 파일을 MATLAB Project에 포함을 시킨 상태로 Commit을 진행하였고, 최종적으로 Push를 하면서 무언가 잘못되었음을 느꼈다.

이미 Commit을 한 상태였고, 이를 Commit한 후에도 다른 변경도 Commit을 한 상태여서 이 Git repository를 조금 어지러운(?) 상태가 되어버렸다.

아래 링크과 같은 GitHub Docs를 보면,

https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github

'File size limits'에

> GitHub blocks pushes that exceed 100 MB.

라고 되어있었고, 

이를 해결하는 방법으로는 'Removing files from a repository's history'에 두 가지를 제시하는 데 다음과 같다.

1. Removing a file added in the most recent unpushed commit
2. Removing a file that was added in an earlier commit

나는 Commit을 하여버린 상태이므로

- BFG Repo-Cleaner
- ```git filter-branch```

중 하나를 선택하여야 했다.
