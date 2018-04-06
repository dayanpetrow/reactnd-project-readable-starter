import * as Types from './types.js'
import * as API from '../utils/api'

export const fetchCategories = () => {
  return (dispatch) => {
    API.fetchCategories().then(res => {
      dispatch({
        type: Types.FETCH_CATEGORIES,
        res
      })
    })
  }
}
