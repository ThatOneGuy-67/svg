importScripts("ysedc/3rmtli.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_05xq5gv.shouldRoute(event)) {
    event.respondWith(_05xq5gv.route(event));
  }
});
