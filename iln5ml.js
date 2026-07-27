importScripts("7ekfd/hc7fgz.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_ghu66u1.shouldRoute(event)) {
    event.respondWith(_ghu66u1.route(event));
  }
});
