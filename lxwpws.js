importScripts("rz9lj/14t2hd.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_utkcn8z.shouldRoute(event)) {
    event.respondWith(_utkcn8z.route(event));
  }
});
