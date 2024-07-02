import { getFilteredData } from '../getFilteredData/getFilteredData'
import { searchErrorPrint } from '../searchErrorPrint/searchErrorPrint'
import './getFilteredDataError.css'
export const getFilteredDataError = async (nodoContenedor) => {
  searchErrorPrint(nodoContenedor)
  getFilteredData(nodoContenedor, 'gato')
}
