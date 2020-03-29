$(function () {

    //navbar fixed
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
    });

    //banner slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 1000,
        arrows: false,
        fade: true,
    });


    //service-slide
    $('.service-slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
  ]
    });

    //video
    $('.venobox').venobox();

    //counter
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    //blog-slider
    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 1000,
        arrows: true,
        nextArrow: '.left',
        prevArrow: '.right',
        centerMode: true,
        centerPadding: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
  ]
    });


    //projects part
    var containerEl = document.querySelector('.filter');
    var mixer = mixitup(containerEl);



    //dote part js

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 700) {
            $(".dote").show();
        } else {
            $(".dote").hide();
        }
    });


});
