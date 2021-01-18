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