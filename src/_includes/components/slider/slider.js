import {Swiper} from "swiper"

export default new class Sliders {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "sliders"
		this.handler()
	}

	handler() {
		const config = {
			slidesPerView: 'auto',
			spaceBetween: 10,
		}

		this.swiper = new Swiper(`.${this.swiperClass}`, config)
	}
}
