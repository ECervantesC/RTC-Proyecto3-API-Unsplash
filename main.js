import { init } from './components/init/init'
import './style.css'

const accessKey = 'WHLkqjNRoPmFMlbnGMMv2jFukXQ-ssYfqWr-jY9i7Ag' // Reemplaza esto con tu clave de acceso
const query = 'gato playa' // Palabras clave para la búsqueda

// URL de la API de Unsplash para buscar imágenes por palabras clave
const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
  query
)}&client_id=${accessKey}&per_page=10`

const getData = async (node) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&client_id=${accessKey}&per_page=10`
    )
    if (!response.ok) {
      console.log('no tengo la respuesta?')
    } else {
      const res = await response.json()
      console.log(res)
    }
  } catch (error) {
    console.log('Error en la funcion')
  }
}
// const div = document.querySelector('#app')
// const arrayPhotos = getData(div)

const firstDiv = document.querySelector('#app')
// firstDiv es el nodo que va a ir despues del header
init(firstDiv)
// init crea el header y el footer
