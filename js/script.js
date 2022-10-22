$('.main').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    speed: 300,
    arrows: true,
    autoplay:true,
    autoplayspeed: 300,
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    asNavFor: '.main2',
    
});


$('.main2').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    speed: 300,
    arrows: true,
    autoplay:true,
    autoplayspeed: 300,
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    asNavFor: '.main'
    
});