// Минимальный Service Worker для WriskNuk_Store
const CACHE_NAME = 'wrisknuk-store-v1';

self.addEventListener('install', (event) => {
    // Активируется сразу без ожидания
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Просто пропускает запросы в сеть (для старого EdgeHTML)
    event.respondWith(fetch(event.request));
});
