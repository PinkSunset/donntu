import {Swiper, Parallax, Navigation} from "swiper"

export default new class SwiperReviews {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "swiper-reviews"
		this.handler()
	}

	handler() {
		const config = {
			modules: [Parallax, Navigation],
			loop: true,
			parallax:true,
			autoHeight: false,
			centeredSlides:true,
			slidesPerView: 'auto',

			navigation: {
				nextEl: ".reviews-button-next",
				prevEl: ".reviews-button-prev"
			}

		}

		this.swiper = new Swiper(`.${this.swiperClass}`, config)
	}
}

