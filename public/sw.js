const scope = self.registration.scope
const prefix = `jude-offline:${scope}:`
const cacheName = `${prefix}v1`
const fallbackURL = new URL('offline.html', scope).href

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const response = await fetch(fallbackURL, { cache: 'reload' })
    if (!response.ok) throw new Error('Offline page unavailable')
    const cache = await caches.open(cacheName)
    await cache.put(fallbackURL, response)
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter(key => key.startsWith(prefix) && key !== cacheName).map(key => caches.delete(key)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  if (event.request.mode !== 'navigate' || !event.request.url.startsWith(scope)) return
  event.respondWith((async () => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)
    try {
      return await fetch(event.request, { signal: controller.signal })
    } catch {
      const cache = await caches.open(cacheName)
      const fallback = await cache.match(fallbackURL)
      return fallback || new Response('Offline. Please reconnect and reload.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    } finally {
      clearTimeout(timeout)
    }
  })())
})
