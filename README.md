
# 2025-kizuna-project ( 交友軟體Web版 )

## 目前使用套件

* 前端
  * `vue`
  * `pinia`
  * `tailwindcss`
    
* 後端
  * `bcrypt`
  * `cookie-parser`
  * `express`
  * `jsonwebtoken`
  * `passport`
  * `passport-google-oauth20`
  * `pg`
  * `socket.io`
  
## 開發相關規定

* 使用 `tailwind` 時，要下載 `vscode` 的擴充功能(`extensions`) 「`Headwind`」這樣大家的 `class`中的`tailwind`順序才會一樣  
![image](https://github.com/user-attachments/assets/488a73f4-b0e0-4d9c-8fb3-fd7a1cdcbd4d)

* 命名方式 以 使用者名稱 為例
  * 資料庫欄位請使用 蛇式命名法 ( snacke-case ) => user_name
  * `JavaScript` 使用 駝峰式命名法 => userName

* `.vue`檔案 請以 `<script setup> + composition API` 撰寫

* `.env`環境變數設定
  
