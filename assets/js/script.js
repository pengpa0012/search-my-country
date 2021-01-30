import Select from './select.js'

const selectElements = document.querySelectorAll('[data-custom]')
const search = document.querySelector('[data-search]')
const toggler = document.querySelector('[data-toggler]')

selectElements.forEach(selectElement => {

   new Select(selectElement, search, toggler)

})