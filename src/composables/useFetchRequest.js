import { useFetch, useRuntimeConfig } from '#app'
import { useUserStore } from '@/stores/user.js'

// 请求拦截器
function handleRequest({ options }, token) {
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  }
}

// 响应拦截器
function handleResponse({ response }) {
  if (response._data.error) {
    throw new Error(response._data.error.message || '响应错误')
  }
  return response._data
}

/**
 * 创建请求方法
 * @param method
 */
function createUseFetchRequest(method) {
  return async function (url, data, options = {}) {
    const {
      public: { API_BASE_DEV, API_BASE_PROD }
    } = useRuntimeConfig()

    const baseURL = process.env.NODE_ENV === 'production' ? API_BASE_PROD : API_BASE_DEV

    const requestUrl = new URL(url, options.customBaseURL || baseURL).toString()

    // 从状态管理中获取 token
    const userStore = useUserStore()
    const token = userStore.token || options.token

    return await useFetch(requestUrl, {
      ...options,
      method,
      body: data,
      onRequest: req => handleRequest(req, token),
      onResponse: handleResponse
    })
  }
}

// 提供 useFetch & HTTP 方法 - 统一管理请求 - 再到组件中使用
export const useFetchGet = createUseFetchRequest('GET')
export const useFetchPost = createUseFetchRequest('POST')
export const useFetchPut = createUseFetchRequest('PUT')
export const useFetchDelete = createUseFetchRequest('DELETE')
