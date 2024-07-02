import './buttonPrint.css'
// FALTA LA URL
export const buttonPrint = (nodoContainer, texto, URL, classColor) => {
  const anchor = document.createElement('a')
  anchor.textContent = texto
  anchor.href = URL
  anchor.classList.add('anchor', classColor)
  nodoContainer.appendChild(anchor)
}
