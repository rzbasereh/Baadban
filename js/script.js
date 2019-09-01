$(window).on("load", function () {
    // $(".owl-item").width();
    $(".owl-prev").html("<i class='fas fa-chevron-left fa-lg'></i>");
    $(".owl-next").html("<i class='fas fa-chevron-right fa-lg'></i>");
});
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
});