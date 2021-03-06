import * as Types from './types.js'
import * as API from '../utils/api'

export const fetchAllPosts = () => {
  return (dispatch) => {
    API.fetchAllPosts().then(posts => {
      dispatch({
        type: Types.FETCH_ALL_POSTS,
        posts
      })
    })
  }
}

export const fetchPost = (post_id) => {
  return (dispatch) => {
    API.fetchPost(post_id).then(post => {
      dispatch({
        type: Types.FETCH_POST_DETAILS,
        post
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

export const editPost = (post_id, values) => {
  return (dispatch) => {
    API.editPost(post_id, values).then(post => {
      dispatch({
        type: Types.EDIT_POST,
        post
      })
    })
  }
}

export const votePost = (post_id, option) => {
  return (dispatch) => {
    API.votePost(post_id, option).then(post => {
      dispatch({
        type: Types.VOTE_POST,
        post
      })
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

export const sortPosts = (sort_by_option) => {
  return {
      type: Types.SORT_POSTS,
      sort_by_option
  }
}
