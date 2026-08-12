importScripts("5ypec/zdmrcu.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_5y1iazf.shouldRoute(event)) {
    event.respondWith(_5y1iazf.route(event));
  }
});
