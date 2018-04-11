import * as Types from '../actions/types'

function comments(state=[], action) {
  const { comment_id } = action
  switch(action.type) {
    case Types.FETCH_POST_COMMENTS:
      console.log("comments: coming from reducer", action.res)
      return action.res.sort(sort_by_timestamp)
    case Types.DELETE_COMMENT:
      return state.filter(comment => comment.id !== comment_id)
    case Types.VOTE_COMMENT:
      state.map(comment => {
        if(comment.id === comment_id) {
          if(action.option === "upVote") comment.voteScore += 1;
          if(action.option === "downVote") comment.downVote -= 1;
        }
      })
      return state.sort(sort_by_timestamp)
    case Types.ADD_COMMENT:
      return state.concat(action.res).sort(sort_by_timestamp)
    default:
      return state
  }
}

function sort_by_timestamp(a, b) {
  if(a.timestamp < b.timestamp) {
    return 1;
  } else {
    return -1;
  }
  return 0;
}

export default comments
