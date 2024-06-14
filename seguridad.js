//Realizar la solicitud fetch
// fetch(url)
//   .then((response) => {
//     console.log(response)
//     if (!response.ok) {
//       throw new Error('Error en la solicitud a la API de Unsplash')
//     }
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data) // Aquí tienes los datos de las imágenes
//     const images = data.results
//     images.forEach((image) => {
//       const imageUrl = image.urls.regular // URL de la imagen en tamaño regular
//       console.log('URL de la imagen:', imageUrl)
//     })
//   })
//   .catch((error) => {
//     console.error('Error:', error)
//   })
