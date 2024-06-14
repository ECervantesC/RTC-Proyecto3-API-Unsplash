import { footerPrint } from '../footerPrint/footerPrint'
import { headerPrint } from '../headerPrint/headerPrint'

export const init = (firstElement) => {
  console.log('Creamos header')
  headerPrint(firstElement)
  console.log('Ponemos fotos aleatorias')
  console.log('Creamos footer')
  footerPrint()
}
