importScripts("drc5l/z0hcrj.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_8juuqx0.shouldRoute(event)) {
    event.respondWith(_8juuqx0.route(event));
  }
});
