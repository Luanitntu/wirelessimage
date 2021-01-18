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