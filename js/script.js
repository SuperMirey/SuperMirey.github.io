(function ($) {
  $(document).ready(function () {
    "use strict";

    /*RSVP Form*/
    $(".submit_block_1").on("click", function (e) {
      send_form('block_1');
      return false;
    });

    function send_form (type) {

      var name = $("input#name_" + type).val();
      if (name == "") {
        $("input#name_" + type).css({border: "1px solid red"});
        $("input#name_" + type).focus();
        return false;
      }
      var email = $("input#email_" + type).val();
      if (email == "") {
        $("input#email_" + type).css({border: "1px solid red"});
        $("input#email_" + type).focus();
        return false;
      }
      var guest = $("input#guest_" + type).val();



      console.log(name);
      console.log(email);
      console.log(guest);


      var dataString = '&entry.1068564038=' + name + '&entry.352472512=' + email + '&entry.1150838879=' + guest + '&entry.66493311=';
      var form = $(this);
      var str = form.serialize();
      function sent(){
        $('#div_' + type).html("<div id='form_send_message'>Gracias! Ya estas en la lista! 💖</div>", 1500);
      }
      $.ajax({
        type: "POST",
        url: "https://forms.gle/kRRkYecH8N34Q3w47",
        data: dataString,
        complete:sent
      });
    }

    /*ScrollR */
    if ($(window).width() > 1024) {
      var s = skrollr.init({
        forceHeight: false
      });
    }

    /*Gallery ColorBox */
    $('.gallery_txt a').colorbox({
      rel: 'gal',
      maxWidth: "100%",
    });

    /*Main Menu Button */
    $('.main_menu_btn').on("click", function (e) {
      $(this).toggleClass('main_menu_btn_open');
      $('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
      $('.main_menu_block').find('.menu_wrapper').toggleClass('active');
      $('header .anim').toggleClass('active');
      e.preventDefault();
    });

    /* Section Background */
    $('section, .parallax').each(function () {
      var image = $(this).attr('data-image');
      if (image) {
        $(this).css('background-image', 'url(' + image + ')');
      }
    });

    /*ColorBox*/
    if ($(window).width() >= 760) {
      $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
    } else {
      $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
    }
    $(window).resize(function () {
      if ($(window).width() >= 760) {
        $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});
      } else {
        $(".youtube").colorbox({iframe: true, innerWidth: 320, innerHeight: 240});
      }
    });

    /*Scroll Effect*/
    $('.intro_down, .go').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });

    /*Show/Hide Photo in When&Where Block*/
    $('.photocamera span').on("click", function (e) {
      $(this).parents('section').find('.opacity').toggleClass('fade');
      $(this).parents('section').find('.over').fadeToggle();
      e.preventDefault();
    });

    /*Player*/
    $('.music').on("click", function (e) {
      $('.player').fadeToggle();
      e.preventDefault();
    });

    /*CountDown*/
    $('.married_coundown').countdown({until: new Date("Dec 30, 2023 17:30:00")});

    /*OWL Carousel in Our Story*/
    $(".story_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
      paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 1], autoPlay: false,
      itemsMobile: [479, 1], itemsDesktopSmall: [980, 1], itemsDesktop: [1500, 2], mouseDrag: true
    });

    /*Gallery Carousel */
    $(".gallery_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200,
      paginationSpeed: 200, rewindSpeed: 500, items: 3, itemsTablet: [768, 2], autoPlay: true,
      itemsMobile: [479, 1], mouseDrag: true
    });

    /*Registry Carousel */
    $(".registry_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 3, mouseDrag: true, autoPlay: true
    });

    /*The Crew Carousel*/
    $(".guest_wrapper").owlCarousel({
      navigation: true, responsive: true, responsiveRefreshRate: 200, slideSpeed: 200, paginationSpeed: 200,
      rewindSpeed: 500, stopOnHover: true, autoHeight: true, items: 4, mouseDrag: true, autoPlay: true
    });

    /*Slider Carousel*/
    $(".slider").owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: false,
      autoHeight: true,
      singleItem: true,
      mouseDrag: true,
      autoPlay: true,
      transitionStyle: "fade"
    });

    /* Top Menu Click to Section */
    $('.sub_menu').find('a').on("click", function (e) {
      $('.sub_menu').find('a').removeClass('active');
      $(this).addClass('active');
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top + 1
      }, 1000);
      $(".main_menu_btn").trigger('click');
      e.preventDefault();
    });

    /*FireFly in Intro*/
    $.firefly({
      color: '#fff', minPixel: 1, maxPixel: 3, total: 55, on: '.into_firefly'
    });

    /* Refresh ScrollR */
    s.refresh($(".guest_wrapper, .our_story"));

  });
}(jQuery));

/* NEW CODE JAVI */

$(document).scroll(function() {
  navbarScroll();
});

function navbarScroll() {
  var y = window.scrollY;
  if (y > 10) {
    $('.header').addClass('small');
  } else if (y < 10) {
    $('.header').removeClass('small');
  }
}

/* Acordion */

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */
( function( window ) {
  'use strict';
  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  var hasClass, addClass, removeClass;
  
  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }
  
  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }
  var classie = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  if ( typeof define === 'function' && define.amd ) {
    define( classie );
  } else {
    window.classie = classie;
  }
  })( window );
  var $ = function(selector){
    return document.querySelector(selector);
  }
  var accordion = $('.accordion');
  accordion.addEventListener("click",function(e) {
    e.stopPropagation();
    e.preventDefault();
    if(e.target && e.target.nodeName == "A") {
      var classes = e.target.className.split(" ");
      if(classes) {
        for(var x = 0; x < classes.length; x++) {
          if(classes[x] == "accordionTitle") {
            var title = e.target;
            var content = e.target.parentNode.nextElementSibling;
            classie.toggle(title, 'accordionTitleActive');
            if(classie.has(content, 'accordionItemCollapsed')) {
              if(classie.has(content, 'animateOut')){
                classie.remove(content, 'animateOut');
              }
              classie.add(content, 'animateIn');
            }else{
               classie.remove(content, 'animateIn');
               classie.add(content, 'animateOut');
            }
            classie.toggle(content, 'accordionItemCollapsed');      
          }
        }
      }  
    }
  });

  let scrollPos = window.scrollY;

  // grab your header element
  const header = document.querySelector(".header");
  
  // set when the nav shrinks (after __ px)
  const whenHeaderShrinks = 50;
  
  // have the browser "listen" for when the user scrolls
  window.addEventListener("scroll", function() {
    scrollPos = window.scrollY;
    
    // if scroll position is greater than whenHeaderShrinks (line 7)
    // add the class "is-fixed"
    // otherwise, remove the "is-fixed" class
    if (scrollPos >= whenHeaderShrinks) {
      header.classList.add("is-shrunk");
    } else {
      header.classList.remove("is-shrunk");
    }
  });