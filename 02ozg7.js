importScripts("iymeh/qgi7n1.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_2t78s8c.shouldRoute(event)) {
    event.respondWith(_2t78s8c.route(event));
  }
});
