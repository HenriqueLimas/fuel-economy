importScripts('/cache-polyfill.js');

var VERSION = 'v1';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('fe-static-files-' + VERSION).then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/src/lib/normalize.css',
        '/src/header/header.css',
        '/src/inputs/inputs.css',
        '/src/inputs/inputs-container.css',
        '/src/results/results-container.css',
        '/src/results/fuel-consumption/fuel-consumption.css',
        '/src/unit/unit.css',
        '/src/bundler.js',
        'https://fonts.googleapis.com/css?family=Roboto'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('fe-static-files' + VERSION)
      .then(function(cache) {
        return cache.match(event.request)
          .then(function(response) {
            return response || fetch(event.request)
              .then(function(response) {
                cache.put(event.request, response.clone());
                return response;
              });
          });
      })
  );
});