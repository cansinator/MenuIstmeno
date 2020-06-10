function initMap() {
    $(document).ready(function () {
        var iconBase = 'img/';

        var menus = {
            pagina0: {
                icon: iconBase + 'menu-0.jpg'
            },
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
                icon: iconBase + 'menu-6.jpg',
                cel: "href='https://wa.me/522871057572'",
                tel: "href='tel: 522871057572'"
            },
            pagina7: {
                icon: iconBase + 'menu-7.jpg',
                cel: "href='https://wa.me/522871057572'",
                tel: "href='tel: 529721110889'"
            },
            pagina8: {
                icon: iconBase + 'menu-8.jpg',
                cel: "href='https://wa.me/522886907303'",
                tel: "href='tel: 529721075154'"
            },
            pagina9: {
                icon: iconBase + 'menu-9.jpg',
                cel: "href='https://wa.me/522299571515'",
                tel: "href='tel: 522299571515'"
            },
            pagina10: {
                icon: iconBase + 'menu-10.jpg',
                cel: "href='https://wa.me/522881285048'",
                tel: "href='tel: 522881285048'"
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
            }
        ];

        var index = 0;

        features.forEach(function (feature) {
            var infoTelFooter = "";
            if (index >= 6)
                infoTelFooter = "<footer class='footapp'><section class='contfooter'><div class='iconappfoot'><a " + menus[feature.type].cel + "><i class='fa fa-whatsapp fa-6' style='color: white;'></i><p style='color: white;' >Envíanos un WhatsApp</p></a></div><div class='iconappfoot'><a " + menus[feature.type].tel + "><i class='fa fa-phone fa-6' style='color: white;'></i><p style='color: white;'>Llamanos</p></a></div></section></footer>";
            var page = "<div class='swiper-slide'>" + infoTelFooter + "<img style='-webkit-user-select: none;margin: auto;cursor: zoom-in;' src='" + menus[feature.type].icon + "' class='slideDimension'></div>";
            $('#menuSwiper').append(page);

            index++;
        });
        $('#menuSwiper').append("<div class='swiper-slide' id='map'></div>");

        cargaMap();

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1366: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
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