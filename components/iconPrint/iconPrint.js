import './iconPrint.css'
export const iconPrint = (nodoContenedor, imageURL, texto) => {
  console.log('voy a poner los iconos')
  const iconDiv = document.createElement('div')
  iconDiv.className = 'iconDiv'
  const iconImage = document.createElement('img')
  iconImage.src = imageURL
  iconImage.alt = texto
  iconDiv.appendChild(iconImage)
  nodoContenedor.appendChild(iconDiv)
}
