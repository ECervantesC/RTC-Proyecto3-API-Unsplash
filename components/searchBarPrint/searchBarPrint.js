import { getData } from '../getData/getData'
import { getFilteredData } from '../getFilteredData/getFilteredData'
import './searchBarPrint.css'

// mejorar el icono de busqueda
// Falta la lógica del addeventlistener
export const searchBarPrint = (nodeContainer, nodeToPrint) => {
  const searchDiv = document.createElement('div')
  const searchInput = document.createElement('input')
  searchDiv.className = 'searchDiv'
  searchInput.placeholder = 'Buscar'
  searchInput.type = 'text'
  searchInput.className = 'searchInput'
  searchDiv.appendChild(searchInput)
  nodeContainer.appendChild(searchDiv)
  searchInput.addEventListener('click', (e) => {
    searchInput.placeholder = ''
    e.target.value = ''
  })
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value
      nodeToPrint.innerHTML = ''
      getFilteredData(nodeToPrint, query)
    }
  })
}
