const C = "neko-v6", F = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "cat.png", "font.ttf"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(F)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => e.respondWith(
  fetch(e.request).then(r => { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request))
));
