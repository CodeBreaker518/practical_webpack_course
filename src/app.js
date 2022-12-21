import {showAlert} from './messages.js'

import './styles.css'

const button = document.querySelector('#btn-alert')
  button.addEventListener('click', showAlert)