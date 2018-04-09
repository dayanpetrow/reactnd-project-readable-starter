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

export const addPost = (post, callback) => {
  return (dispatch) => {
    API.addPost(post).then(() => callback())
    dispatch({
      type: Types.ADD_POST,
      post
    })
  }
}

export const deletePost = (post_id, callback) => {
  return (dispatch) => {
    API.deletePost(post_id).then(() => callback())
    dispatch({
      type: Types.DELETE_POST,
      post_id
    })
  }
}
