import './userPrint.css'
export const userPrint = (nodoContenedor, user) => {
  const userDiv = document.createElement('div')
  userDiv.className = 'userDiv'
  userDiv.textContent = user;
  nodoContenedor.appendChild(userDiv)
}
