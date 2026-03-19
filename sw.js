const CACHE_NAME = 'v1-vozhay-bag';
const ASSETS = [
    './',
    './index.html',
    './ktd.html',
    './safety.html',
    './routine.html',
    './self.html',
    './games.html',
    './chants.html',
    './law.html',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Caveat:wght@600&display=swap'
];

// Установка: кэшируем файлы
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Работа: берем файлы из кэша, если нет сети
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
