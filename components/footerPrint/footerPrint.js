import './footerPrint.css'
export const footerPrint = (previousNode) => {
  const footer = document.createElement('footer')
  const prueba = document.createElement('p')
  prueba.textContent = 'prueba'
  footer.appendChild(prueba)
  document.body.appendChild(footer)
}
