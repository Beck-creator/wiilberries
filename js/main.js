const swiper = new Swiper('.swiper-container', {
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
