importScripts("r5nhw/dbyjwp.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_ldtx228.shouldRoute(event)) {
    event.respondWith(_ldtx228.route(event));
  }
});
