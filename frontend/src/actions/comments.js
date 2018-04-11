import * as Types from './types.js'
import * as API from '../utils/api'

export const fetchPostComments = (post_id) => {
  return (dispatch) => {
    API.fetchPostComments(post_id).then(comments => {
      dispatch({
        type: Types.FETCH_POST_COMMENTS,
        comments
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

export const editComment = (comment_id, values) => {
  return (dispatch) => {
    API.editComment(comment_id, values).then(comment => {
      dispatch({
        type: Types.EDIT_COMMENT,
        comment,
        comment_id
      })
    })
  }
}
