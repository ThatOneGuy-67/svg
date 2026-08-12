importScripts("brib9/a1denm.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_crvoc1e.shouldRoute(event)) {
    event.respondWith(_crvoc1e.route(event));
  }
});
