importScripts("hizfj/0nzfmc.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_he3357i.shouldRoute(event)) {
    event.respondWith(_he3357i.route(event));
  }
});
