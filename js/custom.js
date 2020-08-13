$('.loader').preloadinator({
    minTime: 2000
});

$(document).ready(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        merge: true,
        autoplay: true,
        loop: true
    });
});
$(function () {
    //caches a jQuery object containing the header element
    var header = $("header");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("fixedHeader");
        } else {
            header.removeClass("fixedHeader");
        }
    });
});
$(document).ready(function () {
    $('#service-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='images/left-arrow.png'>", "<img src='images/right-arrow.png'>"],
        dots: false,
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        merge: true,
    });
});

$('#partnerSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$('#review-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    items: 1
})


window.intercomSettings = {
    app_id: "ssc8dv0e"
};
(function () {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', intercomSettings);
    } else {
        var d = document;
        var i = function () {
            i.c(arguments)
        };
        i.q = [];
        i.c = function (args) {
            i.q.push(args)
        };
        w.Intercom = i;

        function l() {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/ssc8dv0e';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
        if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    }
})()