
export default defineNuxtPlugin(() => {
  if (import.meta.dev || !('serviceWorker' in navigator) || !window.isSecureContext) return
  const base = useRuntimeConfig().app.baseURL
  const register = () => {
    void navigator.serviceWorker.register(`${base}sw.js`, {
      scope: base,
      updateViaCache: 'none',
    }).catch(() => {
    })
  }
  if (document.readyState === 'complete') register()
  else window.addEventListener('load', register, { once: true })
})
