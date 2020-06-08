importScripts('js/sw-utils.js');


const CACHE_ESTATICO = 'PWA-cache-estatico-v1';
const CACHE_DINAMICO = 'PWA-cache-dinamico-v1';
const CACHE_INMUTABLE = 'PWA-cache-inmutable-v1';


const APP_SHELL = [
    'img/favicon.png',
    'img/mapicon.png',
    'img/menu-1.jpg',
    'img/menu-2.jpg',
    'img/menu-3.jpg',
    'img/menu-4.jpg',
    'img/menu-5.jpg',
    'img/menu-6.jpg',
    'img/menu-7.jpg',
    'img/menu-8.jpg',
    'img/icons/icon-128x128.png',
    'img/icons/icon-144x144.png',
    'img/icons/icon-152x152.png',
    'img/icons/icon-192x192.png',
    'img/icons/icon-384x384.png',
    'img/icons/icon-512x512.png',
    'img/icons/icon-72x72.png',
    'img/icons/icon-96x96.png',
    'menu.html',
    'js/app.js',
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
    'js/booklet/jquery.min.js',
    'js/swiper/swiper.js',
    'js/swiper/swiper.min.js',
    'js/swiper/swiper.js.map',
    'js/swiper/swiper.min.js.map',
    'css/booklet/images/arrow-next.png',
    'css/booklet/images/arrow-prev.png',
    'css/booklet/images/shadow-top-back.png',
    'css/booklet/images/shadow-top-forward.png',
    'css/booklet/images/shadow.png',
    'css/swiper/swiper.css',
    'css/swiper/swiper.min.css',
    'css/menu.css',
    'css/reset.css',
    'css/font-awesome.css',
    'css/font-awesome.min.css',
    'fonts/fontawesome-webfont.eot',
    'fonts/fontawesome-webfont.svg',
    'fonts/fontawesome-webfont.ttf',
    'fonts/fontawesome-webfont.woff',
    'fonts/fontawesome-webfont.woff2',
    'fonts/FontAwesome.otf'
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

/* 
self.addEventListener('fetch', e => {
    const responseSw = caches.match(e.request).then(respCache => {
        if (respCache) {
            return respCache;
        }
        else {
            fetch(e.request).then(respNetwork => {
                return updateDynamicCache(CACHE_DINAMICO, e.request, respNetwork);
            });
        }
    });
    e.respondWith(responseSw);
});   */

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});