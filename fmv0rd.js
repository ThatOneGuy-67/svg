importScripts("x178c/pcbff6.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_klg85ti.shouldRoute(event)) {
    event.respondWith(_klg85ti.route(event));
  }
});
