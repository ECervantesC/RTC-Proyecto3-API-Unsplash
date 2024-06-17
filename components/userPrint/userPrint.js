import './userPrint.css'
export const userPrint = (nodoContenedor, user) => {
  console.log('voy a poner el usuario')
  const userDiv = document.createElement('div')
  userDiv.className = 'userDiv'
  userDiv.textContent = 'D'
  nodoContenedor.appendChild(userDiv)
}
