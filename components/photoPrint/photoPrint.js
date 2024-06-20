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
  const divPhotosContainer = document.createElement('div')
  const divPhoto = document.createElement('div')
  const photoImage = document.createElement('img')
  const divUser = document.createElement('div')
  const userImage = document.createElement('img')
  const name = document.createElement('p')
  const divDate = document.createElement('div')
  const uploadImage = document.createElement('img')
  const date = document.createElement('p')
  const divNumPhotos = document.createElement('div')
  const imgNumPhotos = document.createElement('img')
  const textNumPhotos = document.createElement('p')
  const divLikes = document.createElement('div')
  const imgLikes = document.createElement('img')
  const textLikes = document.createElement('p')
  const divVisit = document.createElement('div')
  divCard.className = 'divCard'
  divPhotosContainer.className = 'divPhotosContainer'
  photoImage.src = photoUrl
  photoImage.alt = photoTitle
  photoImage.className = 'photoImage'
  userImage.src = photoUser
  userImage.alt = nameUser
  userImage.className = 'userImage'
  userImage.style.setProperty('--random-color', borderColor)
  divDate.className = 'divDate'
  name.textContent = nameUser
  uploadImage.src = './assets/upload_share.png'
  uploadImage.alt = 'Subida a Unsplash'
  uploadImage.className = 'uploadImage'
  date.textContent = photoDate
  divLikes.className = 'divLikes'
  divNumPhotos.className = 'divNumPhotos'
  textLikes.textContent = imageLikes
  imgLikes.className = 'imgLikes'
  imgLikes.src = './assets/corazon.png'
  imgLikes.alt = 'Corazon de likes'
  imgNumPhotos.className = 'imgNumPhotos'
  imgNumPhotos.src = './assets/camara-fotografica.png'
  imgNumPhotos.alt = 'Camara de fotos'
  textNumPhotos.textContent = userTotalPhotos
  divVisit.className = 'divVisit'
  divVisit.textContent = 'Visitar'
  divPhoto.append(photoImage)
  divUser.append(userImage)
  divPhotosContainer.append(divPhoto)
  divPhotosContainer.append(divUser)
  divLikes.append(imgLikes)
  divLikes.append(textLikes)
  divPhotosContainer.append(divLikes)
  divNumPhotos.append(imgNumPhotos)
  divNumPhotos.append(textNumPhotos)
  divPhotosContainer.append(divNumPhotos)
  divPhotosContainer.append(divVisit)
  divCard.append(divPhotosContainer)
  divCard.append(name)
  divDate.append(uploadImage)
  divDate.append(date)
  divCard.append(divDate)
  nodoContenedor.append(divCard)
}
