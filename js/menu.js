function initMap() {
    $(document).ready(function () {
        var iconBase = 'img/';

        var menus = {
            pagina1: {
                icon: iconBase + 'menu-1.jpg'
            },
            pagina2: {
                icon: iconBase + 'menu-2.jpg'
            },
            pagina3: {
                icon: iconBase + 'menu-3.jpg'
            },
            pagina4: {
                icon: iconBase + 'menu-4.jpg'
            },
            pagina5: {
                icon: iconBase + 'menu-5.jpg'
            },
            pagina6: {
                icon: iconBase + 'menu-6.jpg'
            },
            pagina7: {
                icon: iconBase + 'menu-7.jpg'
            },
            pagina8: {
                icon: iconBase + 'menu-8.jpg'
            }
        };

        var features = [
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
            }
        ];

        features.forEach(function (feature) {
            var page = "<div class='swiper-slide' style='background-image:url(~/../" + menus[feature.type].icon + ")'><div style='text-align: right;'><a href='https://wa.me/522871555737'><i class='fa fa-whatsapp fa-4x' style='color: white;' aria-hidden='true'></i><br><a style='color: white; font-size: 12px; font-weight: bold;'>Toca Aquí</a></a></div></div>";
            $('#menuSwiper').append(page);
        });

        cargaMap();

        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        });

        swiper.update();
    });
}

function cargaMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(18.089305, -96.135304),
        mapTypeId: 'roadmap'
    });

    var iconBase = 'img/';

    var icons = {
        sucursal1: {
            icon: iconBase + 'mapicon.png',
            info: '<h3>Carnitas El Istmeño</h3><p>Av. Francisco y Madero Esq. 5 de Febrero, Colonia María Eugenia.</p>'
        },
        sucursal2: {
            icon: iconBase + 'mapicon.png',
            info: '<h3>Carnitas El Istmeño</h3><p>Av. Libertad Esq. Rayon, Colonia Centro.</p>'
        }
    };
    var features = [
        {
            position: new google.maps.LatLng(18.089305, -96.135304),
            type: 'sucursal1'
        }, {
            position: new google.maps.LatLng(18.082747, -96.120054),
            type: 'sucursal2'
        },
    ];
    // Create markers.
    features.forEach(function (feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });

        var ventana = '<div class="info_content">' + icons[feature.type].info + '</div>'
        var infoWindow = new google.maps.InfoWindow(), marker, i;
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(ventana);
                infoWindow.open(map, marker);
            }
        })(marker, i));
    });
}