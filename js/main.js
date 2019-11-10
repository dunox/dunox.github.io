$(function(){

    // $('.slider-dots').slick({
    //     infinite: true,
    //     fade: true,
    //     // prevArrow: '<img class="slider-arrows slider-arrows_left" src="../images/arrow-left.png" alt=""></img>',
    //     // nextArrow: '<img class="slider-arrows slider-arrows_right" src="../images/arrow-right.png" alt=""></img>',
    // });
    $('.main__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../images/arrow-left.png" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../images/arrow-right.png" alt=""></img>',
        dots: true,
        // asNavFor: '.slider-dots',
      });

    // $('.slider-dots').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     asNavFor: '.main__slider',
    // });

    
});