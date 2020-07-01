var menus = "";
var player;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function initMap() {
    $(document).ready(function () {
        var iconBase = 'img/';

        var modal = document.getElementById("modalbox");
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
            stopVideo();
        }

        menus = {
            pagina0: {
                icon: iconBase + 'menu-0.jpg'
            },
            pagina1: {
                icon: iconBase + 'menu-1.jpg',
                youtube: "Dq0Fyz9tyUE"
            },
            pagina2: {
                icon: iconBase + 'menu-2.jpg',
                youtube: "hXNObvj-m28"
            },
            pagina3: {
                icon: iconBase + 'menu-3.jpg',
                youtube: "gkTM8wXEZG4"
            },
            pagina4: {
                icon: iconBase + 'menu-4.jpg',
                youtube: "rX2eEa4LYoM"
            },
            pagina5: {
                icon: iconBase + 'menu-5.jpg',
                youtube: "Zl-xOHG8bYM"
            },
            pagina6: {
                icon: iconBase + 'menu-6.jpg',
                youtube: "klcj5UqyeEM"
            },
            pagina7: {
                icon: iconBase + 'menu-7.jpg',
                youtube: "zJYCm7-4bH8"
            },
            pagina8: {
                icon: iconBase + 'menu-8.jpg',
                cel: "href='https://wa.me/522871057572'",
                tel: "href='tel: 522871057572'",
                position: new google.maps.LatLng(18.089305, -96.135304),
                info: '<h3>Carnitas El Istmeño</h3><p>Av. Francisco y Madero Esq. 5 de Febrero, Colonia María Eugenia.</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina9: {
                icon: iconBase + 'menu-9.jpg',
                cel: "href='https://wa.me/522871057572'",
                tel: "href='tel: 529721110889'",
                position: new google.maps.LatLng(18.082797, -96.120222),
                info: '<h3>Carnitas El Istmeño</h3><p>Av. Libertad 472-576, Centro, 68300 San Juan Bautista Tuxtepec, Oax.</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina10: {
                icon: iconBase + 'menu-10.jpg',
                cel: "href='https://wa.me/529721075154'",
                tel: "href='tel: 529721075154'",
                position: new google.maps.LatLng(20.5197462, -97.4430313),
                info: '<h3>Carnitas El Istmeño</h3><p>HIDALGO No 506-A, Veracruz</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina11: {
                icon: iconBase + 'menu-11.jpg',
                cel: "href='https://wa.me/522299571515'",
                tel: "href='tel: 522299571515'",
                position: new google.maps.LatLng(19.130268, -96.122766),
                info: '<h3>Calle 8, Venustiano Carranza, Carranza 3ra Secc, 94297 Boca del Río, Ver.</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina12: {
                icon: iconBase + 'menu-12.jpg',
                cel: "href='https://wa.me/522881285048'",
                tel: "href='tel: 522881285048'",
                position: new google.maps.LatLng(18.235195, -96.144031),
                info: '<h3>Blvd. Fernando Gutiérrez Barrios #703, Tres Valles, Veracruz.</p>',
                iconMap: iconBase + 'mapicon.png'
            }
        };

        var features = [
            {
                type: 'pagina0'
            },
            {
                type: 'pagina1'
            },
            {
                type: 'pagina2'
            },
            {
                type: 'pagina3'
            },
            {
                type: 'pagina4'
            },
            {
                type: 'pagina5'
            },
            {
                type: 'pagina6'
            },
            {
                type: 'pagina7'
            },
            {
                type: 'pagina8'
            },
            {
                type: 'pagina9'
            },
            {
                type: 'pagina10'
            },
            {
                type: 'pagina11'
            },
            {
                type: 'pagina12'
            }
        ];

        var index = 0;

        features.forEach(function (feature) {
            var infoTelFooter = "";
            var c = "";

            if (index >= 8) {
                var tienda = '"' + feature.type + '"';
                infoTelFooter = "<footer class='footapp'><section class='contfooter'><div class='iconappfoot'><a " + menus[feature.type].cel + "><i class='fa fa-whatsapp fa-6' style='color: black;'></i></a></div><div class='iconappfoot'><a " + menus[feature.type].tel + "><i class='fa fa-phone fa-6' style='color: black;'></i></a></div><div class='iconappfoot'><a onclick='cargaMap(" + tienda + ")'><i class='fa fa-map-marker fa-6' style='color: black;'></i></a></div></section></footer>";

                var page = "<div class='swiper-slide'>" + infoTelFooter + "<img src='" + menus[feature.type].icon + "' class='slideDimension'></div>";
                $('#menuSwiper').append(page);
            } else if (index >= 1 && index <= 7) {
                var tienda = '"' + feature.type + '"';
                youtube = "<footer class='footapp'><section class='contfooter'><div class='iconappfoot'><a onclick='cargaYoutube(" + tienda + ")'><i class='fa fa-youtube fa-6' style='color: black;'></i></a></div></section></footer>";
                var page = "<div class='swiper-slide'>" + youtube + "<img src='" + menus[feature.type].icon + "' class='slideDimension'></div>";
                $('#menuSwiper').append(page);
            }
            index++;
        });
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            effect: 'coverflow',
            centeredSlides: true,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }, coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            breakpoints: {
                2160: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                2000: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1366: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                650: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            }
        });

        swiper.update();
    });
}


function cargaYoutube(pagina) {
    $('#canvasMap').empty();
    document.getElementById("modalbox").style.display = "block";
    player = new YT.Player('canvasMap', {
        height: '100%',
        width: '100%',
        videoId: menus[pagina].youtube,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },playerVars : {
            'enablejsapi' : 1,
            'origin' : window.location.host
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 60000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
    player.destroy();
}


function cargaMap(pagina) {
    $('#canvasMap').empty();
    var marker = [];

    marker.forEach(function (m) { m.setMap(null); });

    document.getElementById("modalbox").style.display = "block";
    var map = new google.maps.Map(document.getElementById('canvasMap'), {
        zoom: 15,
        center: menus[pagina].position,
        mapTypeId: 'roadmap'
    });

    marker = new google.maps.Marker({
        position: menus[pagina].position,
        icon: menus[pagina].iconMap,
        map: map
    });

    var ventana = '<div class="info_content">' + menus[pagina].info + '</div>'
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infoWindow.setContent(ventana);
            infoWindow.open(map, marker);
        }
    })(marker, i));
}




/////////////////////////////////////////////////////////////////////////
let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});

function instalar(){
    // Hide the app provided install promotion
    hideMyInstallPromotion();
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  }


  self.addEventListener('appinstalled', (evt) => {
    // Log install to analytics
    console.log('INSTALL: Success');
  });


  self.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (navigator.standalone) {
      displayMode = 'standalone-ios';
    }
    if (window.matchMedia('(display-mode: standalone)').matches) {
      displayMode = 'standalone';
    }
    // Log launch display mode to analytics
    console.log('DISPLAY_MODE_LAUNCH:', displayMode);
  });

  self.addEventListener('DOMContentLoaded', () => {
    window.matchMedia('(display-mode: standalone)').addListener((evt) => {
      let displayMode = 'browser tab';
      if (evt.matches) {
        displayMode = 'standalone';
      }
      // Log display mode change to analytics
      console.log('DISPLAY_MODE_CHANGED', displayMode);
    });
  });

  function showInstallPromotion(){
    $('#headerInstall').show();
  }

  function hideMyInstallPromotion(){
    $('#headerInstall').hide();
  }