importScripts('js/sw-utils.js');


const CACHE_ESTATICO = 'ITK-cache-estatico-v1';
const CACHE_DINAMICO = 'ITK-cache-dinamico-v1';
const CACHE_INMUTABLE = 'ITK-cache-inmutable-v1';


const APP_SHELL = [
    'img/favicon.png',
    'img/menu-1.jpg',
    'img/menu-2.jpg',
    'img/menu-3.jpg',
    'img/menu-4.jpg',
    'img/menu-5.jpg',
    'img/menu-6.jpg',
    'img/menu-7.jpg',
    'img/menu-8.jpg',
    'img/icons/icon-128x78.png',
    'img/icons/icon-144x88.png',
    'img/icons/icon-152x93.png',
    'img/icons/icon-192x118.png',
    'img/icons/icon-384x235.png',
    'img/icons/icon-512x313.png',
    'img/icons/icon-72x44.png',
    'img/icons/icon-96x59.png',
    'menu.html',
    'js/menu.js'
];

const APP_SHELL_INMUTABLE = [
    'css/booklet/jquery.booklet.latest.css',
    'js/booklet/jquery-2.1.0.min.js',
    'js/booklet/jquery-ui-1.10.4.min.js',
    'js/booklet/jquery-ui.min.js',
    'js/booklet/jquery.booklet.latest.js',
    'js/booklet/jquery.booklet.latest.min.js',
    'js/booklet/jquery.easing.1.3.js',
    'js/booklet/jquery.min.js'
];



self.addEventListener('install', e => {


    const cacheStatic = caches.open(CACHE_ESTATICO).then(cache =>
        cache.addAll(APP_SHELL));

    const cacheInmutable = caches.open(CACHE_INMUTABLE).then(cache =>
        cache.addAll(APP_SHELL_INMUTABLE));



    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then(keys => {

        keys.forEach(key => {

            if (key !== CACHE_ESTATICO && key.includes('static')) {
                return caches.delete(key);
            }

            if (key !== CACHE_DINAMICO && key.includes('dynamic')) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil(respuesta);

});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});
