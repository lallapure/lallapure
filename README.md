# LALLAPURE 官網

Hugo 靜態網站，部署在 GitHub Pages。

---

## 第一次設定（只做一次）

### 1. 安裝工具

**安裝 Hugo**
- Mac：打開終端機，輸入 `brew install hugo`
  （如果沒有 Homebrew，先到 https://brew.sh 安裝）
- Windows：到 https://github.com/gohugoio/hugo/releases 下載 `hugo_extended_0.124.1_windows-amd64.zip`

**安裝 GitHub Desktop**
- 到 https://desktop.github.com 下載安裝

### 2. 建立 GitHub Repository

1. 到 https://github.com，登入帳號
2. 點右上角「+」→「New repository」
3. Repository name 填：`lallapure`（或你喜歡的名稱）
4. 設為 **Public**
5. 按「Create repository」

### 3. 把這個資料夾連到 GitHub

1. 打開 GitHub Desktop
2. 「File」→「Add Local Repository」→ 選這個資料夾
3. 按「Publish repository」→ 選你剛建立的 repo

### 4. 開啟 GitHub Pages

1. 到 GitHub repo 頁面
2. 「Settings」→「Pages」
3. Source 選「**GitHub Actions**」
4. 儲存

### 5. 完成！

之後每次 push 到 main branch，網站會在 2–3 分鐘內自動更新。

---

## 日常更新流程

### 新增漫畫作品

**步驟一：上傳圖片到 Cloudinary**
1. 到 https://cloudinary.com 登入
2. 左側點「Media Library」
3. 拖曳圖片上傳（建議用 JPG，每張壓縮到 300–500KB）
4. 點圖片 → 複製右上角的「URL」

**步驟二：建立作品檔案**

在 `content/works/` 資料夾裡，複製 `_TEMPLATE_comic.md`，
改名為你的作品英文名（例如：`pigeon-sister-ep2.md`）

填入內容：

```yaml
---
title: "我的鴿子姊姊 第二話"
date: 2024-06-01          # 發表日期
draft: false
type: "comic"
tags:
  - "我的鴿子姊姊"
cover: "https://res.cloudinary.com/..."  # 封面圖網址
emoji: "🕊"
episodes: 1
episode_images:
  - # 第01話
    - "https://res.cloudinary.com/..."   # 第1頁
    - "https://res.cloudinary.com/..."   # 第2頁
    - "https://res.cloudinary.com/..."   # 第3頁（依此類推）
---
```

**步驟三：上傳到 GitHub**
1. 打開 GitHub Desktop
2. 左側會看到變更的檔案
3. 左下角填寫說明（例如：「新增鴿子姊姊第二話」）
4. 按「Commit to main」
5. 按「Push origin」
6. 等 2–3 分鐘，網站自動更新 ✅

---

### 新增插圖作品

在 `content/works/` 複製 `_TEMPLATE_illustration.md`，填入：

```yaml
---
title: "小美的春天"
date: 2024-06-15
draft: false
type: "illustration"
tags:
  - "小美"
cover: "https://res.cloudinary.com/..."
emoji: "🌸"
episodes: 1
---

在這裡寫插圖的故事或說明文字。
```

---

### 新增文章 / 公告說明

在 `content/blog/` 複製 `_TEMPLATE_blog.md`，填入：

```yaml
---
title: "標題"
date: 2024-06-01
draft: false
category: "作品更新"   # 或：商品介紹、雜記
---

在這裡寫文章內容（支援 Markdown）。
```

---

### 更新首頁公告

打開 `data/notices.yaml`，新增一筆：

```yaml
- date: "2024.06.01"
  event: "事件說明文字"
  url: "/blog/文章網址/"
  linkText: "閱讀全文 →"
```

舊的公告往下排，建議保留最近 5–6 筆。

---

### 更新首頁 Banner

打開 `data/banners.yaml`，修改或新增：

```yaml
- emoji: "🕊"
  tag: "系列名稱"
  eyebrow: "LATEST UPDATE · 2024.06.01"
  title: "Banner 標題"
  sub: "副標題說明"
  url: "/works/作品網址/"
```

---

### 更新商品

打開 `data/products.yaml`，修改商品內容或新增：

```yaml
- name: "商品名稱"
  desc: "商品說明"
  badge: "新品"          # 可以留空 ""
  emoji: "📦"
  thumb: "https://..."   # 商品圖（可留空）
  url: "https://外部購買連結"
```

---

### 新增標籤

直接在作品的 `tags:` 裡填新標籤名稱，Hugo 會自動建立。

---

## 串接自訂網域

1. 到你的域名商（例如 Namecheap、GoDaddy）DNS 設定
2. 新增一筆 CNAME record：`www` → `你的github帳號.github.io`
3. 新增四筆 A record 指向 GitHub IP：
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. 到 GitHub repo「Settings」→「Pages」→「Custom domain」填入你的網域
5. 等 DNS 生效（最多 48 小時）
6. 勾選「Enforce HTTPS」

---

## 本機預覽（選用）

如果你安裝了 Hugo，可以在本機預覽：

```bash
# 在這個資料夾裡打開終端機
hugo server

# 打開瀏覽器到
http://localhost:1313
```

儲存任何檔案都會即時更新，不需要重新整理。

---

## 資料夾結構說明

```
lallapure/
├── content/
│   ├── works/        ← 作品 Markdown 檔案放這裡
│   ├── blog/         ← 文章 Markdown 檔案放這裡
│   ├── about.md      ← 關於我頁面
│   └── shop.md       ← 商店頁面（內容在 data/products.yaml）
├── data/
│   ├── banners.yaml  ← 首頁 Banner
│   ├── notices.yaml  ← 首頁公告
│   └── products.yaml ← 商店商品列表
├── static/
│   ├── css/main.css  ← 網站樣式
│   ├── js/main.js    ← 網站互動邏輯
│   └── images/       ← favicon 等靜態圖片
├── layouts/          ← 頁面模板（不需要動）
└── hugo.toml         ← 網站設定（社群連結在這裡改）
```
