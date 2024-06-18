import { randomColor } from '../randomColor/randomColor'
import './photoPrint.css'
export const photoPrint = (
  nodoContenedor,
  photoUrl,
  nameUser,
  photoUser,
  photoDate,
  photoTitle,
  borderColor
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
  divPhoto.append(photoImage)
  divUser.append(userImage)
  divPhotosContainer.append(divPhoto)
  divPhotosContainer.append(divUser)
  divCard.append(divPhotosContainer)
  divCard.append(name)
  divDate.append(uploadImage)
  divDate.append(date)
  divCard.append(divDate)
  nodoContenedor.append(divCard)
}
