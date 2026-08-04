importScripts("8z4ue/b2yca5.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_uiubjms.shouldRoute(event)) {
    event.respondWith(_uiubjms.route(event));
  }
});
