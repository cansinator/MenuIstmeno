var menus = "";

function initMap() {
    $(document).ready(function () {
        var iconBase = 'img/';

        var modal = document.getElementById("modalbox");
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }

        menus = {
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
                tel: "href='tel: 522871057572'",
                position: new google.maps.LatLng(18.089305, -96.135304),
                info: '<h3>Carnitas El Istmeño</h3><p>Av. Francisco y Madero Esq. 5 de Febrero, Colonia María Eugenia.</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina7: {
                icon: iconBase + 'menu-7.jpg',
                cel: "href='https://wa.me/522871057572'",
                tel: "href='tel: 529721110889'",
                position: new google.maps.LatLng(18.082747, -96.120054),
                info: '<h3>Carnitas El Istmeño</h3><p>Av. Francisco y Madero Esq. 5 de Febrero, Colonia María Eugenia.</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina8: {
                icon: iconBase + 'menu-8.jpg',
                cel: "href='https://wa.me/522886907303'",
                tel: "href='tel: 529721075154'",
                position: new google.maps.LatLng(20.5197462, -97.4430313),
                info: '<h3>Carnitas El Istmeño</h3><p>HIDALGO No 506-A, Veracruz</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina9: {
                icon: iconBase + 'menu-9.jpg',
                cel: "href='https://wa.me/522299571515'",
                tel: "href='tel: 522299571515'",
                position: new google.maps.LatLng(19.130268, -96.122766),
                info: '<h3>Calle 8, Venustiano Carranza, Carranza 3ra Secc, 94297 Boca del Río, Ver.</p>',
                iconMap: iconBase + 'mapicon.png'
            },
            pagina10: {
                icon: iconBase + 'menu-10.jpg',
                cel: "href='https://wa.me/522881285048'",
                tel: "href='tel: 522881285048'",
                position: new google.maps.LatLng(18.235195, -96.144031),
                info: '<h3>Calle 8, Venustiano Carranza, Carranza 3ra Secc, 94297 Boca del Río, Ver.</p>',
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
            }
        ];

        var index = 0;

        features.forEach(function (feature) {
            var infoTelFooter = "";
            if (index >= 6) {
                var tienda = '"' + feature.type + '"';
                infoTelFooter = "<footer class='footapp'><section class='contfooter'><div class='iconappfoot'><a " + menus[feature.type].cel + "><i class='fa fa-whatsapp fa-6' style='color: white;'></i><p style='color: white;' >Envíanos un WhatsApp</p></a></div><div class='iconappfoot'><a " + menus[feature.type].tel + "><i class='fa fa-phone fa-6' style='color: white;'></i><p style='color: white;'>Llamanos</p></a></div><div class='iconappfoot'><a onclick='cargaMap(" + tienda + ")'><i class='fa fa-map-marker fa-6' style='color: white;'></i><p style='color: white;'>Ubícanos</p></a></div></section></footer>";
            }
            var page = "<div class='swiper-slide'>" + infoTelFooter + "<img src='" + menus[feature.type].icon + "' class='slideDimension'></div>";
            $('#menuSwiper').append(page);

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

function cargaMap(pagina) {
    var marker = [];

    marker.forEach(function(m) { m.setMap(null); });

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