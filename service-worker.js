importScripts('./cache-polyfill.js');

var VERSION = 'v1';
var STATIC_FILES = 'fe-static-files-';
var CACHE_NAME = STATIC_FILES + VERSION;

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        './index.html',
        './src/lib/normalize.css',
        './src/header/header.css',
        './src/inputs/inputs.css',
        './src/inputs/inputs-container.css',
        './src/results/results-container.css',
        './src/results/fuel-consumption/fuel-consumption.css',
        './src/unit/unit.css',
        './src/bundler.js',
        'https://fonts.googleapis.com/css?family=Roboto'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  var request = event.request;

  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.match(request)
          .then(function(response) {
            return response || fetch(request)
              .then(function(response) {
                cache.put(request, response.clone());
                return response;
              });
          });
      })
  );
});