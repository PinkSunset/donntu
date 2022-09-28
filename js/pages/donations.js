import Alpine from 'alpinejs'

export default new class Donations {
	constructor() {
		this.url = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSeJcCPZ3TSm_EWVAcEtb8AVuZ7FXcyN8oquaTsnIYVySTmymA/formResponse'
		this.handler()
	}

	donatForm = () => ({
		message: '',
		url: this.url,
		sent: false,
		sending: false,
		sum: '100',
		buttonLabel: 'Пожертвовать',
		test: '',
		// page: document.location.href,
		refferer: document.referrer,
		init() {
		},
		async submit() {
			this.buttonLabel = 'Отправка'
			this.sending = true
			const form = {
				method: 'POST',
				mode: 'no-cors',
				body: new FormData(this.$refs.form)
			}

			try {
				await fetch(this.url, form)
				this.message = 'Форма отправлена, ожидайте!<br> С вами свяжутся'
			} catch (e) {
				this.message = 'Увы, но произошла ошибка попробуйте еще раз!'
			} finally {
				this.sent = true,
				this.sending = false;
				setTimeout(() => {
					this.$refs.form.reset()
					this.buttonLabel = 'Отправить',
					this.sent = false
					this.$store.contact = false
					this.$store.bodyLock = false
				}, 5000)
			}
		}
	})

	handler() {
		Alpine.data('donatForm', this.donatForm)
	}
}

