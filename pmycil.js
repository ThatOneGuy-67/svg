importScripts("eahqk/o8gsxj.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_7mihzis.shouldRoute(event)) {
    event.respondWith(_7mihzis.route(event));
  }
});
