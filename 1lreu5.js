importScripts("ardrp/f2sbc5.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_yp0ct5y.shouldRoute(event)) {
    event.respondWith(_yp0ct5y.route(event));
  }
});
