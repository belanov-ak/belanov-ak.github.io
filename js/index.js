"use strict";

//webpchecking function
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
new Swiper('.section-hero-image', {
  pagination: {
    el: '.section-hero-image .dots',
    clickable: true
  }
});
new Swiper('.slider-blog-container', {
  pagination: {
    el: '.slider-blog .dots',
    clickable: true
  },
  navigation: {
    nextEl: '.slider-blog .btn-blog--next',
    prevEl: '.slider-blog .btn-blog--prev'
  }
});
new Swiper('.slider-quotes-container', {
  slidesPerView: 'auto',
  // spaceBetween: 35,
  pagination: {
    el: '.section-quotes .dots',
    clickable: true
  }
});
var header = document.querySelector('.section-header');
var mainNav = document.getElementById('main-navigation');
var navWrap = document.querySelector('.main-navigation__inner-wrap');
document.querySelector('.faq-accordion').addEventListener('click', function (event) {
  if (event.target.closest('.faq-accordion__item')) {
    event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item--active');
  }
});
document.querySelector('.btn-burger').addEventListener('click', function () {
  header.classList.toggle('section-header--active-nav');

  if (header.classList.contains('section-header--active-nav')) {
    hideScroll();
  } else {
    showScroll();
  }
});

var hideScroll = function hideScroll() {
  var scrollWidth = "".concat(getScrollbarWidth(), "px");
  document.body.style.paddingRight = scrollWidth;
  document.body.style.overflow = 'hidden';
  mainNav.style.paddingRight = scrollWidth;
};

var showScroll = function showScroll() {
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
  mainNav.style.paddingRight = '';
};

var resetNav = function resetNav() {
  showScroll();
  header.classList.remove('section-header--active-nav');
};

window.addEventListener('resize', resetNav);

var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  outer.style.width = '50px';
  outer.style.height = '50px';
  outer.style.overflow = 'scroll';
  outer.style.visibility = 'hidden';
  document.body.appendChild(outer);
  var scrollBarWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);
  return scrollBarWidth;
};