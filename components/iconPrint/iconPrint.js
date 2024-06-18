import './iconPrint.css'
export const iconPrint = (nodoContenedor, imageURL, texto) => {
  const iconDiv = document.createElement('div')
  iconDiv.className = 'iconDiv'
  const iconImage = document.createElement('img')
  iconImage.src = imageURL
  iconImage.alt = texto
  iconDiv.appendChild(iconImage)
  nodoContenedor.appendChild(iconDiv)
}
