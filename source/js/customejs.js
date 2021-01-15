jQuery('#header-page .sticky .wrap-menu .menu-main .navbar-sticky ul li a').click(function() {

    var id = jQuery(this).attr('id');

    jQuery('html, body').animate({

        scrollTop: jQuery("#scroll-" + id).offset().top
    }, 2000);

})