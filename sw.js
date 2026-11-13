const C = "neko-v7", F = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "sprites/cat/idle.png", "sprites/cat/walk.png", "sprites/cat/run.png", "sprites/cat/hurt.png", "sprites/cat/jump.png", "sprites/cat/attack.png", "sprites/food/fish.png", "sprites/food/flan.png", "sprites/food/cookie.png", "sprites/food/bowl.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(F)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => e.respondWith(
  fetch(e.request).then(r => { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request))
));
