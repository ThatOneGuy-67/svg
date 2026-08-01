importScripts("xz6xo/bcrjvr.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_c1rd1vq.shouldRoute(event)) {
    event.respondWith(_c1rd1vq.route(event));
  }
});
