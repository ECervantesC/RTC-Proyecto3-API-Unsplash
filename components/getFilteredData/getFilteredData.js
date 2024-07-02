import { dateProcessing } from '../dateProcessing/dateProcessing'
import { getFilteredDataError } from '../getFilteredDataError/getFilteredDataError'
import { photoPrint } from '../photoPrint/photoPrint'
import { randomColor } from '../randomColor/randomColor'
import './getFilteredData.css'
export const getFilteredData = async (nodoContenedor, query) => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&client_id=WHLkqjNRoPmFMlbnGMMv2jFukXQ-ssYfqWr-jY9i7Ag&per_page=20`
  // Realizar la solicitud fetch
  fetch(url)
    .then((response) => {
      const status = response.status
      if (!response.ok) {
        console.log('Error en la solicitud de fotos - Paso 1')
        if (status != 200) {
          console.log('paso por el error', status)
          getFilteredDataError(nodoContenedor)
        }
        console.log('Error:', response.status)
        return
      }
      return response.json()
    })
    .then((images) => {
      const imagesArray = images.results
      if (imagesArray.length == 0) {
        getFilteredDataError(nodoContenedor)
        return
      }
      imagesArray.forEach((image) => {
        const photoUrl = image.urls.regular // URL de la imagen en tamaño regular
        const nameUser = image.user.name
        const photoUser = image.user.profile_image.medium
        const photoId = image.id
        const photoDate = dateProcessing(image.created_at)
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
    .catch((response) => {
      console.log('Error:', response.status)
    })
}
