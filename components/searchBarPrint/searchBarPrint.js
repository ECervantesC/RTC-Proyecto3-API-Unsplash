import './searchBarPrint.css'

// FALTA EL ICONO DE LA BUSQUEDA Y EL ADDEVENT LISTENER QUE RECOGA LAS PALABRAS DE BUSQUEDA

export const searchBarPrint = (nodeContainer) => {
  const searchBarInput = document.createElement('input')
  searchBarInput.placeholder = 'Buscar'
  nodeContainer.appendChild(searchBarInput)
}
