/* hero */

const heroSlider = new Swiper('.hero__slider', {
  loop: true,
  pagination: {
    el: ".hero__pagination",
    clickable: true
  },
  scrollbar: {
    hide: true
  }
});