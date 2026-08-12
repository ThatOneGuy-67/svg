importScripts("1qz3m/cehf6u.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_i4nu2qs.shouldRoute(event)) {
    event.respondWith(_i4nu2qs.route(event));
  }
});
