document.addEventListener('DOMContentLoaded', function () {

    imgLightbox("js_lightbox", {
      loop: true,
      closeButton: true,
      closeText: 'Close',
      nextText: 'Next',
      prevText: 'Previous',
      showCounter: true,
      showThumbnails: true,
      thumbnailWidth: 100,
      thumbnailHeight: 100,
      rate: 10
    });

    $('.blk-slider-main').slick({
      dots: false,
      asNavFor: '.blk-slider-nav',
      appendDots: '.blk-slider-main-wrapper',
      prevArrow: '.blk-slider__arrows__arrow--left',
      nextArrow: '.blk-slider__arrows__arrow--right',
      initialSlide: 2,
      draggable: true,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            centerPadding: '0px',
            centerMode: true,
            variableWidth: true
          }
        },
      ]
    });

    $('.blk-slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.blk-slider-main',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      vertical: true,
      arrows: false,
      infinite: false,
      centerPadding: '0px',
      draggable: true
    });

  });