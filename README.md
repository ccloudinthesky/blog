# 個人網站

一個簡潔、響應式的個人網站，包含首頁、關於、專案和聯絡等區塊，使用 TypeScript 建構以支援動態內容管理。

## AI 內容聲明

本網站上的部分文章和內容是由 AI 生成，用於測試網頁功能和設計。有些文字內容可能看起來有邏輯漏洞，請忽略><

## 設計理念
整體而言是希望可以丟自己的所思所想在這個網站上面，所以內容也是比較輕鬆的風格。色系主要是淺灰色為主，輔助低飽和度的藍色和橘色。字體也是選擇了無襯線的 Helvatica（除了強調或是比較明顯的標題），製造簡約輕盈的感覺～

### 各頁面介紹：
- Home: 就是首頁。用大大的一句話開頭，有可愛的小波浪線(它會動)裝飾。
- About: 一些關於我的基本介紹，原本想說時間軸要把人生中的大事件寫出來，但好像也沒什麼大不了的就寫一些小事吧。順便推薦最近喜歡的專輯。
- Projects: 之前做過的部分專案，名字和圖片是真真真實的，但文章內容暫時是 AI 生的，不用細看><
- Articles: 
  - Photo Collections: 我從觀景窗看出去的世界，是用底片拍的！
  - Articles: 這部分也是 AI 生的，平常的書寫內容都是一些無病呻吟放上來實在太直接了，有整理好想分享的內容再更新。

## 快速開始

### 本地運行

- **推薦：使用本地伺服器（完整功能 + 動畫效果）：**
  ```powershell
  python3 -m http.server 8080
  # 然後開啟此網址
  http://localhost:8080/wp1141/hw1/index.html
  ```

- **直接開啟 `index.html`（基本功能，無動畫，跑不出文章內容）：**
  - 檔案總管：雙擊 `\hw1\index.html`
  - 或從專案根目錄使用 PowerShell：
    ```powershell
    Start-Process ".\wp1141\hw1\index.html"
    ```

## 開發

### TypeScript 設定

本專案使用 TypeScript 進行類型安全的開發。原始檔案位於 `src/` 目錄，編譯後輸出到根目錄。

#### 檔案結構
```
src/
├── types.ts      # 類型定義和介面
└── script.ts     # 主要 TypeScript 程式碼

# 編譯後的檔案
├── script.js     # 編譯後的 JavaScript
├── script.js.map # Source map
├── types.js      # 編譯後的類型檔案
└── types.js.map  # 類型檔案的 source map
```

#### 安裝依賴
```bash
npm install
```

#### 編譯 TypeScript
```bash
npm run build
# 或
tsc
```

#### 監聽模式（開發時使用）
```bash
npm run watch
# 或
tsc --watch
```

#### 類型檢查
```bash
tsc --noEmit
```

### TypeScript 配置

`tsconfig.json` 配置了以下選項：
- **target**: ES2020 - 編譯目標
- **module**: ES2020 - 模組系統
- **strict**: true - 啟用嚴格模式
- **noImplicitAny**: true - 禁止隱式 any
- **sourceMap**: true - 生成 source map

### 類型定義

在 `src/types.ts` 中定義了以下介面：
- `Article`: 文章資料結構
- `Project`: 專案資料結構  
- `Post`: 文章內容資料結構
- `ArticlesData`: 文章資料集合
- `ProjectsData`: 專案資料集合
- `YearFilterEvent`: 年份篩選事件
- `NavToggleEvent`: 導航切換事件

## 內容管理

### 新增/編輯內容

#### 編輯 JSON 檔案

1. **文章：** 編輯 `content/articles.json`
2. **專案：** 編輯 `content/projects.json`

#### 文章結構範例：
```json
{
  "article-slug": {
    "title": "您的文章標題",
    "date": "2025-01-18",
    "tag": "分類",
    "image": "https://picsum.photos/seed/your-image/1400/600",
    "body": "<p>您的文章內容，支援 HTML 格式</p><h3>子標題</h3><ul><li>列表項目</li></ul>"
  }
}
```

#### 可在內容中使用的 HTML 標籤：
- `<p>` - 段落
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` - 標題
- `<ul>`, `<ol>`, `<li>` - 列表
- `<strong>`, `<em>` - 粗體和斜體
- `<blockquote>` - 引用
- `<a href="url">` - 連結
- `<img src="url" alt="description">` - 圖片

#### 新增內容：

1. **在 JSON 檔案中新增** 唯一的 slug
2. **更新 HTML 檔案中的連結** 使用新的 slug
3. **測試** 透過訪問 `post.html?slug=your-new-slug`

#### 範例：
```json
"my-new-article": {
  "title": "我的新文章",
  "date": "2025-03-01",
  "tag": "科技",
  "image": "https://picsum.photos/seed/new-article/1400/600",
  "body": "<p>這是我的新文章內容。</p><h3>重點</h3><ul><li>重點 1</li><li>重點 2</li></ul>"
}
```

然後連結到它：`post.html?slug=my-new-article`

## 自訂

- 編輯 `index.html` 更新您的姓名、簡介和專案
- 在 `styles.css` 的 `:root` 變數中更新顏色和間距
- 在 `assets/` 下新增圖片/檔案並在 HTML 中引用

## 開發流程

1. 修改 `src/` 目錄下的 TypeScript 檔案
2. 執行 `npm run build` 編譯
3. 編譯後的檔案會自動更新到根目錄
4. 瀏覽器載入編譯後的 JavaScript 檔案

## 主要功能

1. **類型安全**：所有變數和函數都有明確的類型定義
2. **介面定義**：資料結構使用介面定義，提高程式碼可維護性
3. **模組化**：使用 ES6 模組系統
4. **錯誤檢查**：編譯時檢查類型錯誤
5. **動態內容**：基於 JSON 的內容管理系統
6. **響應式設計**：行動優先的響應式佈局
7. **滾動動畫**：About 頁面的滾動觸發動畫效果

## 動畫效果

About 頁面包含滾動動畫效果，提升用戶體驗：

### 動畫類型
- **fade-in**：淡入效果（從下方浮現）
- **slide-left**：從左側滑入
- **slide-right**：從右側滑入

### 延遲效果
- **delay-1 到 delay-4**：錯開動畫時間，創造流暢的序列效果

### 使用方式
About 頁面的動畫會在使用本地伺服器時自動啟用。直接打開 HTML 檔案時，由於瀏覽器安全限制，動畫功能會被禁用。
