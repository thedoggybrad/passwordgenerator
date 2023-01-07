'use strict'

const CACHE_NAME = 'simplepasswordgenerator';
// The files we want to cache
const resourceList = [
  '/',
  'https://thedoggybrad.github.io/simplepasswordgenerator/index.html',
  'https://thedoggybrad.github.io/simplepasswordgenerator/421648.png',
  'https://cdn.jsdelivr.net/gh/thedoggybrad/simplepasswordgenerator@main/script.js',
  'https://thedoggybrad.github.io/simplepasswordgenerator/style.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
