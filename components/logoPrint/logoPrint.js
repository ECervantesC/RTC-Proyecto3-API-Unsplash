import './logoPrint.css'
export const logoPrint = (nodoContenedor, imageURL, texto) => {
  const logoDiv = document.createElement('div')
  logoDiv.className = 'logo'
  const logoImage = document.createElement('img')
  logoImage.src = imageURL
  logoImage.alt = texto
  logoDiv.appendChild(logoImage)
  nodoContenedor.appendChild(logoDiv)
}
