$(function () {

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
        slidesToScroll: 4,
        dots: false,
        autoplay: true,
        speed: 1000,
        arrows: false,
    });

    //video
    $('.venobox').venobox();

    //counter
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });


    //projects part
    var containerEl = document.querySelector('.filter');
    var mixer = mixitup(containerEl);




});
