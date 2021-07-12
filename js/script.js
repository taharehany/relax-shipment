$(document).ready(function () {
  "use strict";
  let dropdowntoggle = $("header .hamburger-menu");
  let sideWidget = $(".side-widget");

  //toggle between menue and x in navbar
  dropdowntoggle.on("click", function () {
    sideWidget.toggleClass("active");

    if (sideWidget.hasClass("active")) {
      $(this).addClass("open");
    } else {
      $(this).removeClass("open");
    }
  });

  $("section").on("click", function () {
    if (sideWidget.hasClass("active")) {
      sideWidget.removeClass("active");
      dropdowntoggle.removeClass("open");
    }
  });

  $('.main-slider-carousel').owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        nav: true,
      }
    }
  })

  //loading
  $(".loading").delay().fadeOut();

  //   dropdown.each(function () {
  //     if ($(this).hasClass("active")) {
  //       $(this).find(".dropdown-menu").addClass("show");
  //     }
  //   });

  //aos animate
  AOS.init({
    duration: 800,
    offset: 0
  });
});