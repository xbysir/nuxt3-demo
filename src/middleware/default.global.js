import { useProgressStore } from '@/stores/progress.js'

export default function defineNuxtRouterMiddleware(to, from) {
  console.log('要去往的路径:' + to.path)
  const progress = useProgressStore()
  progress.resetProgress()
}
