import * as Types from '../actions/types'

function posts(state=[], action) {
  switch(action.type) {
    case Types.FETCH_ALL_POSTS:
      console.log("coming from reducer", action.res)
      return action.res
    default:
      return state
  }
}

export default posts
