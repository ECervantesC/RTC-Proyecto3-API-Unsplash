import { getData } from '../getData/getData'
import { headerPrint } from '../headerPrint/headerPrint'

export const init = (firstElement) => {
  headerPrint(firstElement)
  /* Añadir el nodo donde va el getData*/
  getData(firstElement)
}
