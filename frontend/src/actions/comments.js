import * as Types from './types.js'
import * as API from '../utils/api'

export const fetchPostComments = (post_id) => {
  return (dispatch) => {
    API.fetchPostComments(post_id).then(res => {
      console.log("comments: coming from action", res, post_id)
      dispatch({
        type: Types.FETCH_POST_COMMENTS,
        res
      })
    })
  }
}
