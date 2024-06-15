import './userPrint.css'
export const userPrint = (nodoContenedor, user) => {
  console.log('voy a poner el usuario')
  const userDiv = document.createElement('div')
  userDiv.className = 'userDiv'
  const userInitial = document.createElement('p')
  userInitial.textContent = 'D'
  userDiv.appendChild(userInitial)
  nodoContenedor.appendChild(userDiv)
}
