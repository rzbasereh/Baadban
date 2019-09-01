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
            750:{
                items:2
            }
        }
    });

    $("section#news .owl-carousel .item").hover(function () {
        $(this).find(".item-title").css("height", "100%");
        $(this).find(".item-title").children("span").addClass("center-abs");
    }, function () {
        $(this).find(".item-title").css("height", "fit-content");
        $(this).find(".item-title").children("span").removeClass("center-abs");
    });
});