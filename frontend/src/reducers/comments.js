import * as Types from '../actions/types'
import { sort_by_timestamp } from '../utils/helpers'

function comments(state=[], action) {
  switch(action.type) {

    case Types.FETCH_POST_COMMENTS:
      return action.comments.sort(sort_by_timestamp)

    case Types.DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.comment_id)

    case Types.VOTE_COMMENT:
      return state.map(comment => {
        if(comment.id === action.comment_id) {
          comment = action.comment
        }
        return comment
      }).sort(sort_by_timestamp)

    case Types.ADD_COMMENT:
      return state.concat(action.res).sort(sort_by_timestamp)

    case Types.EDIT_COMMENT:
      return state.map(comment => {
        if(comment.id === action.comment_id) {
          comment = action.comment
        }
        return comment
      }).sort(sort_by_timestamp)

    default:
      return state
  }
}

export default comments
