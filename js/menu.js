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
        var page = "<div class='swiper-slide' style='background-image:url(~/../" + menus[feature.type].icon +  ")'></div>";
        $('#menuSwiper').append(page);
    });
});