$(function(){

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 641,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.tab').on('click', function(e){
    e.preventDefault();
    
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');

  });

  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active');
  });

  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 891,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  });

  $('.filter-style').styler();

  $('.available-title, .filter-btn__parameters').on('click', function(){
    $(this).toggleClass('available-title--active');
    $(this).next().slideToggle('200');
  });

  $(".js-range-slider").ionRangeSlider({
    onStart: function (data){
      $('.aside-filter__price-from').text(data.from);
      $('.aside-filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.aside-filter__price-from').text(data.from);
      $('.aside-filter__price-to').text(data.to);
  },

  });

  $('.catalog__filter-btn__greed').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btn__line').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btn__line').on('click', function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btn__greed').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  $(".rateYo").rateYo({
    rating: 3.6,
    starWidth: "23px",
    ratedFill: "#1C62CD",
    normalFill: "#C4C4C4",
    readOnly: true,
    spacing: "5px"  
  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $('.footer__top-item__title').on('click', function(){
    $(this).next().slideToggle();
  });

  $('.aside__btn').on('click', function(){
    $(this).next().slideToggle();
  });

});

