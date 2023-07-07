self.addEventListener("install", e => {
    console.log("Service Worker Installed ✅")
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["/src/assets/images/L512.png"])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})