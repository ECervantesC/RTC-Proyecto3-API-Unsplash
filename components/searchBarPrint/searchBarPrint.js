import './searchBarPrint.css'

// FALTA EL ICONO DE LA BUSQUEDA Y EL ADDEVENT LISTENER QUE RECOGA LAS PALABRAS DE BUSQUEDA

export const searchBarPrint = (nodeContainer) => {
  const searchDiv = document.createElement('div')
  const searchInput = document.createElement('input')
  searchDiv.className = 'searchDiv'
  searchInput.placeholder = 'Buscar'
  searchInput.type = 'text'
  searchInput.className = 'searchInput'
  searchDiv.appendChild(searchInput)
  nodeContainer.appendChild(searchDiv)
}
