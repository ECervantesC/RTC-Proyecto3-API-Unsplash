import { buttonPrint } from '../buttonPrint/buttonPrint'
import { iconPrint } from '../iconPrint/iconPrint'
import { logoPrint } from '../logoPrint/logoPrint'
import { searchBarPrint } from '../searchBarPrint/searchBarPrint'
import { userPrint } from '../userPrint/userPrint'
import './headerPrint.css'

//Parámetros de entrada al header:
// - Nodo posterior
//Funciones que se lanzan desde headerPrint:
// - logoPrint para poner el logo de la página. Datos necesarios: nodo donde se pinta, URL del logo, y alt de la imagen. Crea un div con clase "logo" que contiene una imagen. La imagen tiene un tamaño de 40x40px
// - buttonPrint para poner los botones con letras y link. FALTA EL LINK. Datos necesarios: nodo donde se pinta, texto, URL, clase: white/black
// searchBarPrint para poner la barra de busqueda. A MITAD
// FALTA aJUSTAR EL RESPONSIVE
// FALTA EL REINICIO DE LAS BUSQUEDAS
export const headerPrint = (followingNode) => {
  const header = document.createElement('header')
  logoPrint(header, './assets/logoPinterest.png', 'Logo Pinterest')
  const navBarButtons = document.createElement('nav')
  navBarButtons.className = 'navButtons'
  buttonPrint(navBarButtons, 'Inicio', 'https://www.pinterest.es/', 'black')
  buttonPrint(
    navBarButtons,
    'Explorar',
    'https://www.pinterest.es/today/',
    'white'
  )
  buttonPrint(
    navBarButtons,
    'Crear',
    'https://www.pinterest.es/pin-creation-tool/',
    'white'
  )
  header.appendChild(navBarButtons)
  searchBarPrint(header, followingNode)
  const navBarIcons = document.createElement('nav')
  navBarIcons.className = 'navIcons'
  iconPrint(
    navBarIcons,
    './assets/burbuja-de-dialogo.png',
    'Burbuja de comentarios'
  )
  iconPrint(navBarIcons, './assets/campana.png', 'Campana de notificaciones')
  userPrint(navBarIcons, 'D')
  header.appendChild(navBarIcons)
  document.body.insertBefore(header, followingNode)
}
