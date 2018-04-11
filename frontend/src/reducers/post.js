import * as Types from '../actions/types'

function post(state={}, action) {
  const { post } = action
  switch(action.type) {
    case Types.FETCH_POST_DETAILS:
      console.log("single post : coming from reducer", action.res)
      return action.res
    case Types.ADD_POST:
      return post
    case Types.VOTE_POST:
      if(action.vote_option === "upVote")   post.voteScore += 1
      if(action.vote_option === "downVote") post.voteScore -= 1
      return post
    case Types.EDIT_POST:
      return post
    default:
      return state
  }
}

export default post
