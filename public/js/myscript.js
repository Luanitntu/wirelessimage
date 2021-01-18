
// --------------button menu----------
jQuery(document).ready(function() {
    jQuery(".button-sticky").click(function() {
        jQuery("#header-page .sticky .wrap-menu .menu-main .navbar-menu-mobile").toggleClass("active");
        jQuery("#header-page .sticky .wrap-menu .menu-main .navbar-menu-mobile .navbar-sticky").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".button-sticky").is(e.target) && jQuery(".button-sticky").has(e.target).length === 0) {
            jQuery("#header-page .sticky .wrap-menu .menu-main .navbar-menu-mobile").removeClass("active");
            jQuery("#header-page .sticky .wrap-menu .menu-main .navbar-menu-mobile .navbar-sticky").removeClass("active");
            jQuery('body').removeClass('show-scroll');
        }
    });
});
jQuery('#header-page .sticky .wrap-menu .menu-main .navbar-sticky ul li a').click(function() {

    var id = jQuery(this).attr('id');

    jQuery('html, body').animate({

        scrollTop: jQuery("#scroll-" + id).offset().top
    }, 2000);

})
jQuery(document).ready(function() {
    // -------------flexslider
    jQuery('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        slideshowSpeed: 4000,
        animationSpeed: 1200,
        // controlsContainer:jQuery(".flex-control-nav li"),
        // customDirectionNav:jQuery(".flex-control-nav li a")
    });

    // -------button flexsider
    // jQuery(".arrow-prev").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("prev");
    //     return false;
    // })
    // jQuery(".arrow-next").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("next");
    //     return false;
    // })
});
// -----------------slick----------
jQuery(document).ready(function() {
    var width = jQuery(window).width();
    if (width <= 769) {
        jQuery('.home__services--content').addClass('slick_services');
        jQuery('.slick_services').slick({
            autoplay: true,
            arrows: false,
            dots: true,
            slidesToShow: 1,
            draggable: false,
            infinite: true,
            pauseOnHover: false,
            swipe: true,
            touchMove: true,
            speed: 1500,
            autoplaySpeed: 8000,
            useTransform: true,
            cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
            adaptiveHeight: true,
            focusOnSelect: true,
            // centerMode: true,
            // variableWidth: true
        });
    }
});
jQuery(document).ready(function() {
    jQuery(function() {
        var width = jQuery(window).width();
        var header = jQuery(".sticky");
        offset = header.offset().top;
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > offset && width > 992) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        })
    })
});