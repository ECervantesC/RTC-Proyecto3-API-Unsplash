import './getData.css'
export const getData = async (query) => {
  try {
    const res = await fetch(
      "https://api.unsplash.com/search/photos?client_id='WHLkqjNRoPmFMlbnGMMv2jFukXQ-ssYfqWr-jY9i7Ag'&query=${query}&per_page=20"
    )
    console.log(res)

    // .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Error en la solicitud a la API de Unsplash')
    //     }
    //     return response.json()
    //   })
    //   .then((data) => {
    //     console.log(data) // Aquí tienes los datos de las imágenes
    //     const images = data.results // Las imágenes están en la propiedad "results"
    //     images.forEach((image) => {
    //       const imageUrl = image.urls.regular // URL de la imagen en tamaño regular
    //       console.log('URL de la imagen:', imageUrl)
    //     })
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error)
    //   })
  } catch {
    console.log('error')
  }
}
