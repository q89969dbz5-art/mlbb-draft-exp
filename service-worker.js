const CACHE_NAME = 'mlbb-draft-v6';
const urlsToCache = [
  './',
  './mlbb-roamer-v6.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install service worker and cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached files offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
