import './searchErrorPrint.css'
export const searchErrorPrint = (nodoContenedor) => {
  const errorDiv = document.createElement('div')
  const errorH2 = document.createElement('h2')
  const errorText = document.createElement('p')
  errorDiv.className = 'errorDiv'
  errorH2.textContent =
    'Upps! No encuentro ninguna imagen relacionada con el texto introducido.'
  errorText.textContent =
    'Prueba con otras palabras. A continuación, se muestra el resultado de la palabras "Gatos"'
  errorDiv.append(errorH2)
  errorDiv.append(errorText)
  nodoContenedor.append(errorDiv)
}
