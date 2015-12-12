importScripts('./cache-polyfill.js');

var VERSION = 'v2';
var CACHES_FILES = {
  'fe-static-files': 'fe-static-files-' + VERSION
};

self.addEventListener('activate', function(event) {
  var cacheNames = Object.keys(CACHES_FILES).map(function(key) {
    return CACHES_FILES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cachesName) {
      return Promise.all(
        cachesName.map(function(cacheName) {
          if (cacheNames.indexOf(cacheName) === -1) {
            console.log('Deleting cache ', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHES_FILES['fe-static-files']).then(function(cache) {
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
    caches.open(CACHES_FILES['fe-static-files'])
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