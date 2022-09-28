import {Swiper, Navigation} from "swiper"

export default new class SwiperNews {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "swiper-news"
		this.handler()
	}

	handler() {
		const config = {
			modules: [Navigation],
			slidesPerView: 'auto',
			spaceBetween: 10,
			navigation: {
				nextEl: `.swiper-news-button-next`,
				prevEl: `.swiper-news-button-prev`,
			},
			breakpoints: {
				1024: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 2
				},
				640: {
					spaceBetween: 40
				}
			}
		}

		this.swiper = new Swiper(`.${this.swiperClass}`, config)
	}
}
