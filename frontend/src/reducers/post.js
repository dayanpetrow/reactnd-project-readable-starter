import * as Types from '../actions/types'

function post(state={}, action) {
  const { post } = action
  switch(action.type) {
    case Types.FETCH_POST_DETAILS:
      return post
    case Types.ADD_POST:
      return post
    case Types.VOTE_POST:
      return post
    case Types.EDIT_POST:
      return post
    default:
      return state
  }
}

export default post
