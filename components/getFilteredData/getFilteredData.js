import { photoPrint } from '../photoPrint/photoPrint'
import { randomColor } from '../randomColor/randomColor'
import './getFilteredData.css'
export const getFilteredData = async (nodoContenedor, query) => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&client_id=WHLkqjNRoPmFMlbnGMMv2jFukXQ-ssYfqWr-jY9i7Ag&per_page=10`
  // Realizar la solicitud fetch
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        // throw new Error('Error en la solicitud a la API de Unsplash')
        console.log('Error en la solicitud de fotos - Paso 1')
      }
      return response.json()
    })
    .then((images) => {
      const imagesArray = images.results
      imagesArray.forEach((image) => {
        const photoUrl = image.urls.regular // URL de la imagen en tamaño regular
        const nameUser = image.user.name
        const photoUser = image.user.profile_image.medium
        const photoId = image.id
        const imageDate = image.created_at
        /* HACER FUNCIÓN*/
        const date = new Date(imageDate)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0') // Los meses son base 0
        const year = date.getFullYear()
        const photoDate = `${day}-${month}-${year}`
        const photoTitle = image.alternative_slugs.es
        const imageLikes = image.likes
        const userTotalPhotos = image.user.total_photos
        const borderColor = randomColor()
        photoPrint(
          nodoContenedor,
          photoUrl,
          nameUser,
          photoUser,
          photoDate,
          photoTitle,
          borderColor,
          imageLikes,
          userTotalPhotos
        )
      })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
