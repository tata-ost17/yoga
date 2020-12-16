$(function () {
   $('.js-slick').slick({
      prevArrow: '<img class="slick-arrow slick-arrow--left" src="images/icon/arrows-left.svg" alt="">',
      nextArrow: '<img class="slick-arrow slick-arrow--right" src="images/icon/arrows-right.svg" alt="">',
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
   });

   $('.header__btn').on('click', function () {
      $('.list').slideToggle();
   });




   $('input[type="file"],input[type="checkbox"],input[type="radio"],select').styler();

   new WOW().init();

});