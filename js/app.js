import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import mask from '@alpinejs/mask'
import focus from '@alpinejs/focus'
import header from '/@includes/partials/header/header'
import footer from '/@includes/partials/footer/footer'
import Select from '/@includes/components/select/select'
import lozad from 'lozad'
import Size from './tools/size'
import Cookies from './tools/cookies'

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.plugin(mask)
Alpine.plugin(focus)

window.Size = Size

window.Cookies = Cookies

Alpine.store('bodyLock', false)
Alpine.start()
const observer = lozad();
observer.observe();
