import * as Types from '../actions/types'

function post(state={}, action) {
  const { post } = action
  switch(action.type) {
    case Types.FETCH_POST_DETAILS:
      console.log("single post : coming from reducer", action.res)
      return action.res
    case Types.ADD_POST:
      return post
    default:
      return state
  }
}

export default post
