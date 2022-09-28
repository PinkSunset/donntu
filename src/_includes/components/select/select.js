import SlimSelect from 'slim-select'

export default new class Select {
	constructor() {
		this.select = null
		this.selectClass = 'select'
		this.handler()
	}
	handler() {
		const selects = document.querySelectorAll(`.${this.selectClass}`)
		selects.forEach(select => {
			new SlimSelect({
				select: select,
				showSearch: false,
				placeholder: select.dataset.placeholder,
				searchText: "Город не найден",
				searchPlaceholder: "Найти город"
			})
		})
	}
}
