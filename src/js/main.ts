import '../css/style.css'

import Alpine from 'alpinejs'

import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import reservationModal from './reservation'

// register plugin SEBELUM start
Alpine.plugin(intersect)
Alpine.plugin(collapse)
Alpine.data('reservationModal', reservationModal)

window.Alpine = Alpine
Alpine.start()
