importScripts("nzbc7/r5cf6q.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_a084ugu.shouldRoute(event)) {
    event.respondWith(_a084ugu.route(event));
  }
});
