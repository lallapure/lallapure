---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: false

# 作品類型：comic（漫畫）或 illustration（插圖）
type: "comic"

# 作品標籤（從以下選擇：我的鴿子姊姊、小美、小遙、美洋、大小）
tags:
  - ""

# 封面圖（Cloudinary 網址）
cover: ""

# 裝飾用 emoji（沒有封面圖時顯示）
emoji: "✦"

# 漫畫總話數
episodes: 1

# 每話的圖片列表（Cloudinary 網址）
# 格式：episode_images[話數-1][圖片順序]
episode_images:
  - # 第01話
    - ""
    - ""

---

<!-- 插圖作品可以在這裡寫故事文字，漫畫作品這裡留空 -->
