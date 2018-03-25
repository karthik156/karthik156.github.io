self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/site.js',
        '/dragon.js',
        '/styles.css',
        '/js/bootstrap.min.js',
        '/js/jquery-3.2.1.slim.min.js',
        '/js/popper.min.js',
        '/css/bootstrap.min.css',
        '/img/1.jpg',
        '/img/3.jpg',
        '/img/13.jpg',
        '/img/a.jpg',
        '/img/b.jpeg',
        '/img/DHONI-7-2_poster4668.jpg',
        '/img/mehendra-singh-dhoni-hd-images.jpg',


      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  
});