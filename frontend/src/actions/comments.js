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

export const fetchComment = (comment_id) => {
  return (dispatch) => {
    API.fetchComment(comment_id).then(comment => {
      console.log("single comment : coming from action", comment)
      dispatch({
        type: Types.FETCH_COMMENT,
        comment
      })
    })
  }
}

export const addComment = (comment) => {
  return (dispatch) => {
    API.addComment(comment).then(res => {
        dispatch({
          type: Types.ADD_COMMENT,
          res
        })
      })
  }
}

export const deleteComment = (comment_id, callback) => {
  return (dispatch) => {
    API.deleteComment(comment_id).then(() => callback())
    dispatch({
      type: Types.DELETE_COMMENT,
      comment_id
    })
  }
}

export const voteComment = (comment_id, option) => {
  return (dispatch) => {
    API.voteComment(comment_id, option).then(comment => {
      dispatch({
        type: Types.VOTE_COMMENT,
        comment,
        comment_id,
        option
      })
    })
  }
}
