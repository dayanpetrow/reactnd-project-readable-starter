import * as Types from '../actions/types'
import { sort_by_timestamp } from '../utils/helpers'

function comments(state=[], action) {
  const { comment_id } = action
  switch(action.type) {
    case Types.FETCH_POST_COMMENTS:
      console.log("comments: coming from reducer", action.res)
      return action.res.sort(sort_by_timestamp)
    case Types.DELETE_COMMENT:
      return state.filter(comment => comment.id !== comment_id)
    case Types.VOTE_COMMENT:
      return state.map(comment => {
        if(comment.id === comment_id) {
          if(action.option === "upVote") comment.voteScore += 1;
          if(action.option === "downVote") comment.downVote -= 1;
        }
        return comment
      }).sort(sort_by_timestamp)
    case Types.ADD_COMMENT:
      return state.concat(action.res).sort(sort_by_timestamp)
    case Types.EDIT_COMMENT:
      return state.map(comment => {
        if(comment.id === comment_id) {
          console.log("update found?");
          comment = action.comment
        }
        return comment
      }).sort(sort_by_timestamp)
    default:
      return state
  }
}

export default comments
