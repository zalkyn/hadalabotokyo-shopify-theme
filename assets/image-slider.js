
// Image slider Section
  class ImageSlider extends HTMLElement{
    constructor() {
      super()

      this.sliderSelector = `.${this.dataset.sliderSelector}`
      this.sliderInit()
    }

    sliderInit() {
      new Swiper(this.sliderSelector , {
        slidesPerView: 1.5,
        spaceBetween: 15,
        speed: 1000,
        breakpoints: {
          769: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      })
    }
  }

  customElements.define("image-slider", ImageSlider)