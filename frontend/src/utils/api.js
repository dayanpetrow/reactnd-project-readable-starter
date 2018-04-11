export const API = 'http://192.168.1.134:3001' //http://localost:3000
let token = localStorage.token

if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Authorization': token,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

/* =========================
 * CATEGORIES API BEGINS *
 * ========================= */
export const fetchCategories = () => {
  return fetch(`${API}/categories`, { headers }).then(res => res.json())
}

/* =========================
 * POSTS API BEGINS *
 * ========================= */

/* FETCH ALL POSTS */
export const fetchAllPosts = () => {
  return fetch(`${API}/posts`, { headers }).then(res => res.json())
}

/* FETCH A POST */
export const fetchPost = (post_id) => {
  return fetch(`${API}/posts/${post_id}`, { headers }).then(res => res.json())
}

/* ADD A POST */
export const addPost = (post) => {
  return fetch(`${API}/posts`, { method: 'POST', headers, body: JSON.stringify(post) })
}

/* EDIT A POST */
export const editPost = (post_id, post) => {
  return fetch(`${API}/posts/${post_id}`, { method: 'PUT', headers, body: JSON.stringify(post) })
    .then(res => res.json())
}

/* DELETE A POST */
export const deletePost = (post_id) => {
  return fetch(`${API}/posts/${post_id}`, { method: 'DELETE', headers}).then(res => res.json)
}

/* VOTE ON A POST */
export const votePost = (post_id, option) => {
  return fetch(`${API}/posts/${post_id}`, { method: 'POST', headers,
    body: JSON.stringify({option})}).then(res => res.json())
}


/* =========================
 * COMMENTS API BEGINS *
 * ========================= */

/* FETCH ALL COMMENTS ON A POST */
export const fetchPostComments = (post_id) => {
 return fetch(`${API}/posts/${post_id}/comments`, { headers }).then(res => res.json())
}

/* ADD A COMMENT */
export const addComment = (comment) => {
  //add the comment first
  fetch(`${API}/comments`, { method: 'POST', headers, body: JSON.stringify(comment) })
  //fetch the added comment with all properties from the server
  return fetch(`${API}/comments/${comment.id}`, { headers }).then(res => res.json())
}

/* DELETE A COMMENT */
export const deleteComment = (comment_id) => {
  return fetch(`${API}/comments/${comment_id}`, { method: 'DELETE', headers}).then(res => res.json)
}

/* VOTE ON A COMMENT */
export const voteComment = (comment_id, option) => {
  return fetch(`${API}/comments/${comment_id}`, { method: 'POST', headers,
    body: JSON.stringify({option})}).then(res => res.json())
}

/* EDIT A COMMENT */
export const editComment = (comment_id, values) => {
  return fetch(`${API}/comments/${comment_id}`, { method: 'PUT', headers,
    body: JSON.stringify(values) }).then(res => res.json())
}
