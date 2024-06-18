import './userPrint.css'
export const userPrint = (nodoContenedor, user) => {
  const userDiv = document.createElement('div')
  userDiv.className = 'userDiv'
  userDiv.textContent = 'D'
  nodoContenedor.appendChild(userDiv)
}
