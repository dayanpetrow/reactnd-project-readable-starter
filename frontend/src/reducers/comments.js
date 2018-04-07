import * as Types from '../actions/types'

function comments(state=[], action) {
  switch(action.type) {
    case Types.FETCH_POST_COMMENTS:
      console.log("comments: coming from reducer", action.res)
      return action.res
    default:
      return state
  }
}

export default comments
