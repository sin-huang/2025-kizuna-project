
# kizuna-project ( 交友軟體 )
  kizuna 在 日語 中 是 羈絆 的意思。
  這是一個交友配對網站，使用 Vue.js 開發前端，Express + PostgreSQL 開發後端。
  使用者可以填寫基本資料與興趣，系統將根據使用者的資料自動推薦配對。

## 目前使用套件

* 前端
  * `Vue.js`
  * `Pinia`
  * `Tailwind CSS`
    
* 後端
  * `Express`
  * `Passport`
  * `PostgreSQL`
  * `Socket.IO`
  
## 如何安裝及執行這個專案:

* 前端
  `cd frontend`
  `npm install`
  `npm run dev`
* 後端
  `cd backend`
  `npm install`
  `npm run dev`

## 開發相關規定

* 資料庫: `PostgreSQL`

* 使用 `Tailwind` 時，要下載 `VSCode` 的擴充功能(`extensions`) 「`Headwind`」這樣大家的 `class`中的`Tailwind`順序才會一樣  
![image](https://github.com/user-attachments/assets/488a73f4-b0e0-4d9c-8fb3-fd7a1cdcbd4d)

* 命名方式 以 使用者名稱 為例
  * 資料庫欄位請使用 蛇式命名法 ( snacke-case ) => user_name
  * `JavaScript` 使用 駝峰式命名法 => userName

* `.vue`檔案 請以 `<script setup> + Composition API` 撰寫

* `.env`環境變數設定
  
* 黃馨
  * 會員登入/註冊系統

* 王靖瑜
  * 串金流系統

* 許可紜
  * 聊天室系統

* 蕭仲真
  * 個人檔案管理(後端)

* 許欣渝
  * 創建活動/揪團功能

* 許奕亨
  * 個人檔案管理(前端)

* 蔡文瑜
  * 購物車系統

* 郭俊良
  * 推薦顯示邏輯