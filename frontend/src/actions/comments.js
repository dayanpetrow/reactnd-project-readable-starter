import * as Types from './types.js'
import * as API from '../utils/api'

export const fetchPostComments = (_id) => {
  return (dispatch) => {
    API.fetchPostComments(_id).then(res => {
      console.log("comments: coming from action", res, _id)
      dispatch({
        type: Types.FETCH_POST_COMMENTS,
        res
      })
    })
  }
}
