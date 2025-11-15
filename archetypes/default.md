---
date: '{{ .Date }}'
draft: false
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
lastmod: '{{ .Date }}'
image: ""  # 这里设置封面图片
categories: []
tags: []
description: ''
summary: ''
toc: true
math: true
---
## 附录

### 参考文章

### 版权信息

本文原载于Carssate.github.io，复制请保留原文出处。
<!-- 如果你在 archetypes/default.md 里预先定义好了 Front Matter（如 title， date， draft: true），那么所有新创建的文章都会自动包含这些预设内容。这能保证内容结构的一致性。 -->