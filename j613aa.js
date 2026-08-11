importScripts("ouuc8/8lc5h1.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_xfe0j5c.shouldRoute(event)) {
    event.respondWith(_xfe0j5c.route(event));
  }
});
