import { dateProcessing } from '../dateProcessing/dateProcessing'
import { photoPrint } from '../photoPrint/photoPrint'
import { randomColor } from '../randomColor/randomColor'
import './getData.css'
export const getData = async (nodoContenedor) => {
  const url = `https://api.unsplash.com/photos/random?count=20&client_id=WHLkqjNRoPmFMlbnGMMv2jFukXQ-ssYfqWr-jY9i7Ag`
  // Realizar la solicitud fetch
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log('Error en la solicitud de fotos - Paso 1')
      }
      return response.json()
    })
    .then((images) => {
      images.forEach((image) => {
        const photoUrl = image.urls.regular // URL de la imagen en tamaño regular
        const nameUser = image.user.name
        const photoUser = image.user.profile_image.medium
        const photoId = image.id
        const photoDate = dateProcessing(image.created_at)
        const photoTitle = image.alt_description
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
