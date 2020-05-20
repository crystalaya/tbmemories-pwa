const staticTBMemories = "tb-memories-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/griggs_1.jpg",
  "/images/griggs_2.jpg",
  "/images/griggs_3.jpg",
  "/images/griggs_4.jpg",
  "/images/griggs_5.jpg",
  "/images/griggs_6.jpg",
  "/images/griggs_30.jpg",
  "/images/griggs_23.jpg",
  "/images/griggs_35.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticTBMemories).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
