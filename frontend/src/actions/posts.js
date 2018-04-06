import * as Types from './types.js'
import * as API from '../utils/api'

export const fetchAllPosts = () => {
  return (dispatch) => {
    API.fetchAllPosts().then(res => {
      console.log("coming from action", res)
      dispatch({
        type: Types.FETCH_ALL_POSTS,
        res
      })
    })
  }
}
