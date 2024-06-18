import './buttonPrint.css'
// FALTA LA URL
export const buttonPrint = (nodoContainer, texto, URL, classColor) => {
  const button = document.createElement('button')
  button.textContent = texto
  button.classList.add('button', classColor)
  // button.classList.add = classColor
  nodoContainer.appendChild(button)
}
