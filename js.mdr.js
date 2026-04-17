$(document).ready(function () {
    // Hero Slider
    $(".hero-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000
    });

    // Product Carousels
    $(".product-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["<", ">"],
        dots: false,
        responsive: {
            0: { items: 1.2, center: true, nav: false },
            768: { items: 3 },
            1024: { items: 4 }
        }
    });

    // Category Carousel
    $(".category-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        responsive: {
            0: { items: 2.2, margin: 5 },
            768: { items: 3 },
            1024: { items: 4 }
        }
    });

    // Preparation Tabs Slider
    var prepSlider = $(".prep-slider").owlCarousel({
        loop: false,
        items: 1,
        nav: false,
        dots: false,
        smartSpeed: 500
    });

    $(".prep-nav-btn").on("click", function () {
        var index = $(this).data("index");
        prepSlider.trigger("to.owl.carousel", [index, 500]);
        $(".prep-nav-btn").removeClass("active");
        $(this).addClass("active");
    });

    prepSlider.on('changed.owl.carousel', function (event) {
        var index = event.item.index;
        $(".prep-nav-btn").removeClass("active");
        $(".prep-nav-btn[data-index='" + index + "']").addClass("active");
    });

    // Preparation Grid Mobile logic if needed (it's handled by CSS grid normally)
});