import {Swiper} from "swiper"
import Size from "/@root/js/tools/size"

export default new class SwiperHelp {
	constructor() {
		this.swiper = undefined
		this.swiperClass = "swiper-help"
		this.handler()
	}

	handler() {
		if (!document.querySelector(`.${this.swiperClass}`)) return
		const config = {
			spaceBetween: 10,
			slidesPerView: 'auto',
			observer: true
		}

		const enableSwiper = () => this.swiper = new Swiper(`.${this.swiperClass}`, config)

		if (document.querySelector(`.${this.swiperClass}`).classList.contains(this.swiperClass)) {
			const toggle = () => {
				if (Size.checker(Size.md)) {
					if (this.swiper !== undefined) this.swiper.destroy(true, true)
					return
				} else {
					return enableSwiper()
				}
			}

			Size.checker(Size.md, toggle)
			toggle()
		} else {
			enableSwiper()
		}
	}
}
