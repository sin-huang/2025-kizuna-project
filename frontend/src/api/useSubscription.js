import axios from './axios'
import { useUserStore } from '@/stores/user'

export async function checkout(plan) {
  try {
    const store = useUserStore()
    if (!store.accessToken) {
      alert('請先登入才能訂閱！')
      return
    }

    const response = await axios.post('/api/ecpay/create', { plan })

    const formHtml = response.data

    // ✅ 插入 form，然後自動送出
    const div = document.createElement('div')
    div.innerHTML = formHtml
    document.body.appendChild(div)

    const form = div.querySelector('form')
    if (form && form.action) {
      form.submit()
    } else {
      console.error("❌ 找不到綠界 form 或 action，回傳值錯：", formHtml)
      alert("訂閱失敗，綠界表單異常")
    }
  } catch (err) {
    alert('訂閱失敗！')
    console.error(err)
  }
}
