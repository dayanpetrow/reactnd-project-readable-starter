import * as Types from '../actions/types'
import {
  sort_by_timestamp,
  sort_by_ccount,
  sort_by_voteScore
} from '../utils/helpers'

function posts(state=[], action) {
  switch(action.type) {
    case Types.FETCH_ALL_POSTS:
      return action.posts.sort(sort_by_timestamp)
    case Types.DELETE_POST:
      return state.filter(post => post.id !== action.post_id)
    case Types.SORT_POSTS:
      if(action.sort_by_option === 'timestamp') {
        return [].concat(state.sort(sort_by_timestamp));
      } else if (action.sort_by_option === 'ccount') {
        return [].concat(state.sort(sort_by_ccount));
      }
      return [].concat(state.sort(sort_by_voteScore));
    case Types.VOTE_POST:
      return state.map(post => {
        if(post.id === action.post.id) {
          post = action.post
        }
        return post
      })
    default:
      return state
  }
}

export default posts
