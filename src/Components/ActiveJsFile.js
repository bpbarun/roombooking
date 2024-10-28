import React, { useEffect } from 'react';
import $ from 'jquery';
// import 'classynav'; // Import your classyNav jQuery plugin
// import 'nice-select'; // Import nice-select plugin
import 'owl.carousel'; // Import owl-carousel
import 'counterup2'; // Import counterUp plugin
import 'jquery-sticky'; // Import sticky plugin
// import 'circle-progress'; // Import circle-progress plugin
import 'nicescroll'; // Import niceScroll plugin
import 'wowjs'; // Import WOW plugin for animations

const ActiveJsFile = () => {
  useEffect(() => {
    const browserWindow = $(window);

    // Preloader Active Code
    browserWindow.on('load', function () {
      $('.preloader').fadeOut('slow', function () {
        $(this).remove();
      });
    });

    // Nav Active Code
    // if ($.fn.classyNav) {
    //   $('#palatinNav').classyNav();
    // }

    // Nice-select Active Code
    if ($.fn.niceSelect) {
      $('select').niceSelect();
    }

    // Sliders Active Code
    if ($.fn.owlCarousel) {
      const welcomeSlide = $('.hero-slides');
      const testimonial = $('.testimonial-slides');

      welcomeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
      });

      welcomeSlide.on('translate.owl.carousel', function () {
        const slideLayer = $("[data-animation]");
        slideLayer.each(function () {
          const animName = $(this).data('animation');
          $(this).removeClass('animated ' + animName).css('opacity', '0');
        });
      });

      welcomeSlide.on('translated.owl.carousel', function () {
        const slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
        slideLayer.each(function () {
          const animName = $(this).data('animation');
          $(this).addClass('animated ' + animName).css('opacity', '1');
        });
      });

      $("[data-delay]").each(function () {
        const animDelay = $(this).data('delay');
        $(this).css('animation-delay', animDelay);
      });

      $("[data-duration]").each(function () {
        const animDur = $(this).data('duration');
        $(this).css('animation-duration', animDur);
      });

      const dot = $('.hero-slides .owl-dot');
      dot.each(function () {
        const index = $(this).index() + 1;
        $(this).html(index < 10 ? '0' + index : index);
      });

      testimonial.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 600,
      });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
      browserWindow.scrollUp({
        scrollSpeed: 1500,
        scrollText: '<i class="fa fa-angle-up"></i>',
      });
    }

    // CounterUp Active Code
    if ($.fn.counterUp) {
      $('.counter').counterUp({
        delay: 10,
        time: 2000,
      });
    }

    // Sticky Active Code
    if ($.fn.sticky) {
      $(".palatin-main-menu").sticky({
        topSpacing: 0,
      });
    }

    // Progress Bar Active Code
    if ($.fn.circleProgress) {
      $('#circle').circleProgress({
        size: 194,
        emptyFill: "rgba(0, 0, 0, .0)",
        fill: '#92593d',
        thickness: '4',
        reverse: true,
      });
      $('#circle2').circleProgress({
        size: 194,
        emptyFill: "rgba(0, 0, 0, .0)",
        fill: '#92593d',
        thickness: '4',
        reverse: true,
      });
      $('#circle3').circleProgress({
        size: 194,
        emptyFill: "rgba(0, 0, 0, .0)",
        fill: '#92593d',
        thickness: '4',
        reverse: true,
      });
      $('#circle4').circleProgress({
        size: 194,
        emptyFill: "rgba(0, 0, 0, .0)",
        fill: '#92593d',
        thickness: '4',
        reverse: true,
      });
    }

    // Tooltip Active Code
    if ($.fn.tooltip) {
      $('[data-toggle="tooltip"]').tooltip();
    }

    // niceScroll Active Code
    if ($.fn.niceScroll) {
      $(".album-all-songs").niceScroll({
        background: "#fff",
      });
    }

    // prevent default for links
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });

    // WOW Active Code
    if (browserWindow.width() > 767) {
      new window.WOW().init();
    }
  }, []);

//   return <div>{/* Your JSX structure here */}</div>;
};

export default ActiveJsFile;
