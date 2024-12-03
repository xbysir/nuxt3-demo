export const TOKEN_KEY = 'nuxt3_token'

// 存储数据
export const setLocalToken = val => {
  if (process.client) {
    if (typeof val === 'object') {
      val = JSON.stringify(val)
    }
    localStorage.setItem(TOKEN_KEY, val)
  }
}

// 获取数据
export const getLocalToken = () => {
  if (process.client) {
    const data = localStorage.getItem(TOKEN_KEY)
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  }
  // 如果在服务器端，返回 null
  return null
}

// 删除数据
export const removeLocalToken = () => {
  if (process.client) {
    localStorage.removeItem(TOKEN_KEY)
  }
}
