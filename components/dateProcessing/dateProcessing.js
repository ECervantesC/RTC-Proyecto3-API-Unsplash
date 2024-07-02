import './dateProcessing.css'
export const dateProcessing = (imageDate) => {
  const date = new Date(imageDate)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Los meses son base 0
  const year = date.getFullYear()
  const dateProcessed = `${day}-${month}-${year}`
  return dateProcessed
}
