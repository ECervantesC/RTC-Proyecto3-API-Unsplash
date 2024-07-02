import { randomColor } from '../randomColor/randomColor'
import './photoPrint.css'
export const photoPrint = (
  nodoContenedor,
  photoUrl,
  nameUser,
  photoUser,
  photoDate,
  photoTitle,
  borderColor,
  imageLikes,
  userTotalPhotos
) => {
  const divCard = document.createElement('div')

  const imagePhoto = document.createElement('img')

  const divPhotographer = document.createElement('div')
  const imagePhotographer = document.createElement('img')
  const namePhotographer = document.createElement('p')

  const divDate = document.createElement('div')
  const uploadImage = document.createElement('img')
  const textDate = document.createElement('p')

  const divNumPhotos = document.createElement('div')
  const imageNumPhotos = document.createElement('img')
  const textNumPhotos = document.createElement('p')

  const divLikes = document.createElement('div')
  const imageLikes2 = document.createElement('img')
  const textLikes = document.createElement('p')

  const divVisit = document.createElement('div')

  divCard.className = 'divCard'

  imagePhoto.src = photoUrl
  imagePhoto.alt = photoTitle
  imagePhoto.className = 'imagePhoto'

  divPhotographer.className = 'divPhotographer'
  imagePhotographer.src = photoUser
  imagePhotographer.alt = nameUser
  imagePhotographer.className = 'imagePhotographer'
  imagePhotographer.style.setProperty('--random-color', borderColor)
  namePhotographer.textContent = nameUser

  divDate.className = 'divDate'
  uploadImage.src = './assets/upload_share.png'
  uploadImage.alt = 'Subida a Unsplash'
  uploadImage.className = 'uploadImage'
  textDate.textContent = photoDate

  divNumPhotos.className = 'divNumPhotos'
  imageNumPhotos.src = './assets/camara-fotografica.png'
  imageNumPhotos.alt = 'Camara de fotos'
  imageNumPhotos.className = 'imageNumPhotos'
  textNumPhotos.textContent = userTotalPhotos

  divLikes.className = 'divLikes'
  imageLikes2.src = './assets/corazon.png'
  imageLikes2.alt = 'Corazon de likes'
  imageLikes2.className = 'imageLikes2'
  textLikes.textContent = imageLikes

  divVisit.className = 'divVisit'
  divVisit.textContent = 'Visitar'

  divPhotographer.append(imagePhotographer)
  divPhotographer.append(namePhotographer)

  divDate.append(uploadImage)
  divDate.append(textDate)

  divNumPhotos.append(imageNumPhotos)
  divNumPhotos.append(textNumPhotos)

  divLikes.append(imageLikes2)
  divLikes.append(textLikes)

  divCard.append(imagePhoto)
  divCard.append(divPhotographer)
  divCard.append(divDate)
  divCard.append(divNumPhotos)
  divCard.append(divLikes)
  divCard.append(divVisit)
  nodoContenedor.append(divCard)
}
