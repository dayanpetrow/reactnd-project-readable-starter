import * as Types from './types.js'
import * as API from '../utils/api'

export const fetchAllPosts = () => {
  return (dispatch) => {
    API.fetchAllPosts().then(res => {
      console.log("posts : coming from action", res)
      dispatch({
        type: Types.FETCH_ALL_POSTS,
        res
      })
    })
  }
}

export const fetchPost = (post_id) => {
  return (dispatch) => {
    API.fetchPost(post_id).then(res => {
      console.log("single post : coming from action", res)
      dispatch({
        type: Types.FETCH_POST_DETAILS,
        res
      })
    })
  }
}
