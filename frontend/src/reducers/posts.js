import * as Types from '../actions/types'

function posts(state=[], action) {
  const { post_id } = action
  switch(action.type) {
    case Types.FETCH_ALL_POSTS:
      console.log("posts : coming from reducer", action.res)
      return action.res.filter(post => !(post.deleted))
    case Types.DELETE_POST:
      return state.filter(post => post.id !== post_id)
    default:
      return state
  }
}

export default posts
