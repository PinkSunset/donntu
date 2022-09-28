import Alpine from 'alpinejs'

export default new class header {
	constructor() {
		this.handler()
	}

	header = () => ({
		menuBurger: false,
		// jopa: {
		// 	'x-text'() {
		// 		return 'Жопа'
		// 	}
		// }
	})

	handler() {
		Alpine.data('header', this.header)
	}
}
