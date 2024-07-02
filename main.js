import { getData } from './components/getData/getData'
import { init } from './components/init/init'
import './style.css'
const firstDiv = document.querySelector('#app')
// firstDiv es el nodo que va a ir despues del header y donde se va a poner las fotos
init(firstDiv)
const logoInit = document.querySelector('.logo')
const inputText = document.querySelector('.searchInput')
logoInit.addEventListener('click', function () {
  firstDiv.innerHTML = ''
  inputText.value = ''
  getData(firstDiv)
})
