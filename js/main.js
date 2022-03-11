$(document).ready(function () {
  'use strict';

  //********* page loader js

  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 2000);


  //********** menu background color change while scroll

  $(window).on('scroll', function () {
    var menu_area = $('.nav-area');
    if ($(window).scrollTop() > 200) {
      menu_area.addClass('sticky_navigation');
    } else {
      menu_area.removeClass('sticky_navigation');
    }
  });


  //********** menu hides after click (mobile menu)

  $(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
      $(this).collapse('hide');
    }
  });


  //*********** scrollspy js

  $('body').scrollspy({
    target: '.navbar-collapse',
    offset: 195
  });


  //************ smooth scroll js

  $('a.smooth-menu,a.custom-btn,a.banner-btn').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
  });

  //*********** Animated headline js

  $('.animate-scale').animatedHeadline({
    animationType: 'clip'
  });

  

  //*** wow js

  new WOW().init();

  //*** Services carousel

  $("#services-carousel").owlCarousel({
    navigation: false,
    pagination: false,
    slideSpeed: 800,
    paginationSpeed: 800,
    smartSpeed: 500,
    dots: true,
    autoplay: true,
    singleItem: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      680: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  

});