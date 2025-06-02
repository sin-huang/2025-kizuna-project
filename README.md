
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
  
* sin-huang [github](https://github.com/sin-huang)
  * 會員登入/註冊系統
  * 推薦顯示邏輯
  * 歷史紀錄

* chingyu0713 [github](https://github.com/chingyu0713)
  * 串金流系統

* c16033 [github](https://github.com/c16033)
  * 聊天室系統
  * 購物車系統

* Heidi [github](https://github.com/HeidiSiao)
  * 個人檔案管理(後端)
  * 配對頁面

* Yunie [github](https://github.com/hsinyuHsu)
  * 創建活動/揪團功能
  * 歷史紀錄

* Noid [github](https://github.com/Noiddddddd)
  * 個人檔案管理(前端)
  * 建立封鎖/檢舉資料庫

* wen-yu-tsai [github](https://github.com/wen-yu-tsai)
  * 購物車系統
  * 創建活動（前端）

* Jun-Liang-Guo [github](https://github.com/Jun-Liang-Guo)
  * 推薦顯示邏輯
  * 訂閱頁面切版